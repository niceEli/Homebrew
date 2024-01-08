import k from "../kaboom";
import { hexToRgb } from "../kUtils/kColor";
import matterRect, {
  matterRect4Sprites,
  matterRect4Static,
} from "./kMatterRect";
import PlayerPawnCircle from "./kMatterPlayerCircle";
import kCamera from "./kCamera";
import kReset from "./kReset";
import { GameObj, SceneDef } from "kaboom";
import Matter from "matter-js";
import matterCircle from "./kMatterCircle";
import kDownloadToVar from "./kDownloadToVar";
import loadSpritesSheet from "./kLoadSpriteSheet";

export default function kLdtkSceneImporter(
  sceneData,
  levelsize: number = 2,
  currentScene: SceneDef,
  nextScene: SceneDef,
  engine?: any
) {
  // Load The Level
  k.scene("scene", currentScene);
  k.loadSprite("CTPlayer", "CTPlayer.png");
  k.loadSprite("box", "box.png");
  k.loadSprite("door", "end.png");

  let isInlevel: number;
  let scripts = [];
  let groups: { active; chgX; chgY }[] = [{ active: false, chgX: 0, chgY: 0 }];
  let CTriggers = [];

  let classTiles = [];

  let updateTriggers: number[] = [];
  let unactiveUpdateTriggers: { ActivateGroupID: number; GroupID: number }[] = [
    { ActivateGroupID: -1, GroupID: -1 },
  ];

  let score: number = 0;
  let lives: number = 0;
  let health: number = 0;

  for (let i = 0; i < 9999; i++) {
    groups.push({ active: false, chgX: 0, chgY: 0 });
  }
  groups.splice(0, 1);

  let maxGroups = -1;

  // this will spawn everything from ldtk
  for (let i = 0; i < sceneData.levels.length; i++) {
    const element = sceneData.levels[i];
    let bg = k.add([
      k.rect(element.pxWid * levelsize, element.pxHei * levelsize),
      k.pos(element.worldX * levelsize, element.worldY * levelsize),
      k.z(-2147483647),
      k.area(),
      "BG",
      k.color(
        hexToRgb(element.__bgColor).r,
        hexToRgb(element.__bgColor).g,
        hexToRgb(element.__bgColor).b
      ),
    ]);
    for (let i = 0; i < element.layerInstances.length; i++) {
      switch (element.layerInstances[i].__type) {
        case "Entities":
          for (
            let z = 0;
            z < element.layerInstances[i].entityInstances.length;
            z++
          ) {
            const ent = element.layerInstances[i].entityInstances[z];

            let entValues: object = {};
            for (let m = 0; m < ent.fieldInstances.length; m++) {
              const element = ent.fieldInstances[m];

              const identifier = element.__identifier;
              const value = element.__value;

              entValues[identifier] = value;
            }

            switch (ent.__identifier) {
              case "Collider":
                k.add([
                  k.rect(levelsize * ent.width, levelsize * ent.height),
                  k.pos(
                    (ent.__worldX + ent.width / 2) * levelsize,
                    (ent.__worldY + ent.height / 2) * levelsize
                  ),
                  k.anchor("center"),
                  k.opacity(0),
                  matterRect(engine, { isStatic: true }),
                ]);
                break;
              case "Death_Trig":
                k.add([
                  k.rect(levelsize * ent.width, levelsize * ent.height),
                  k.pos(
                    (ent.__worldX + ent.width / 2) * levelsize,
                    (ent.__worldY + ent.height / 2) * levelsize
                  ),
                  k.anchor("center"),
                  k.opacity(0),
                  k.area(),
                  "Death_Trig",
                ]);
                break;
              case "Player_Start":
                var player: GameObj = k.add([
                  k.pos(ent.__worldX * levelsize, ent.__worldY * levelsize),
                  k.anchor("center"),
                  k.rotate(0),
                  k.sprite("SpriteSheet3"),
                  k.scale(levelsize),
                  k.z(2147483647),
                  k.fadeIn(0.16),
                  k.opacity(),
                  // Matter For Pawns
                  PlayerPawnCircle(
                    engine,
                    { friction: 0 },
                    8 * levelsize,
                    k.vec2(levelsize, levelsize),
                    levelsize / 2
                  ),
                  kCamera(entValues["UseCamera"]),
                  kReset(currentScene),
                  k.area(),
                  "Player",
                ]);
                break;
              case "Box_Spawner":
                k.add([
                  k.pos(ent.__worldX * levelsize, ent.__worldY * levelsize),
                  k.anchor("center"),
                  k.sprite("SpriteSheet30"),
                  k.scale(levelsize),
                  k.z(2147483646),
                  k.fadeIn(0.16),
                  k.opacity(),
                  matterRect4Sprites(
                    engine,
                    { angle: 0 },
                    k.vec2(16 * levelsize, 16 * levelsize)
                  ),
                ]);
                break;
              case "Win_Condition":
                k.add([
                  k.pos(ent.__worldX * levelsize, ent.__worldY * levelsize),
                  k.anchor("center"),
                  k.sprite("door"),
                  k.scale(2 * levelsize),
                  k.z(-2147483645),
                  k.area(),
                  "Win_Condition",
                ]);
                break;
              case "Text_Object":
                k.add([
                  k.text(entValues["Text"], {
                    size: entValues["Size"],
                    font: "sans-serif",
                    align: "center",
                  }),
                  k.anchor("center"),
                  k.z(2147483645),
                  k.color(entValues["Color"]),
                  k.pos(ent.__worldX * levelsize, ent.__worldY * levelsize),
                ]);
                break;
              case "Script":
                if (
                  maxGroups < entValues["GroupID"] ||
                  maxGroups < entValues["NextGID"]
                ) {
                  let grp = entValues["GroupID"];
                  if (grp < entValues["NextGID"]) {
                    grp = entValues["NextGID"];
                  }
                  maxGroups = grp;
                }
                scripts.push({
                  Func: entValues["AsyncJSCode"],
                  GroupID: entValues["GroupID"],
                  NextGID: entValues["NextGID"],
                  X: ent.__worldX * levelsize,
                  Y: ent.__worldY * levelsize,
                });
                break;
              case "StartTrigger":
                if (maxGroups < entValues["GroupID"]) {
                  maxGroups = entValues["GroupID"];
                }
                groups.splice(entValues["GroupID"], 1, {
                  active: true,
                  chgX: 0,
                  chgY: 0,
                });
                break;
              case "CollisionTrigger":
                if (maxGroups < entValues["GroupID"]) {
                  maxGroups = entValues["GroupID"];
                }
                CTriggers.push({
                  obj: k.add([
                    k.rect(levelsize * ent.width, levelsize * ent.height),
                    k.pos(
                      (ent.__worldX + ent.width / 2) * levelsize,
                      (ent.__worldY + ent.height / 2) * levelsize
                    ),
                    k.anchor("center"),
                    k.opacity(0),
                    k.area(),
                    "CTrigger",
                  ]),
                  GroupID: entValues["GroupID"],
                  UnCollideGroupID: entValues["UnCollideGroupID"],
                  OneTime: entValues["OneTime"],
                });
                break;
              case "EditableTile":
                let size = 16 * levelsize;
                let spritename =
                  entValues["Tile"].x / 16 + (entValues["Tile"].y / 16) * 25;
                if (entValues["Collisions"]) {
                  classTiles.push({
                    entity: k.add([
                      k.scale(levelsize),
                      k.anchor("center"),
                      k.sprite("SpriteSheet" + spritename),
                      k.z(2000),
                      k.offscreen({ hide: true }),
                      k.pos(
                        ent.__worldX * levelsize + 8 * levelsize,
                        ent.__worldY * levelsize + 8 * levelsize
                      ),
                      matterRect4Static(engine, k.vec2(size, size)),
                      "Tile",
                    ]),
                    name: entValues["Class"],
                  });
                } else {
                  classTiles.push({
                    entity: k.add([
                      k.scale(levelsize),
                      k.sprite("SpriteSheet" + spritename),
                      k.anchor("center"),
                      k.z(2000),
                      k.offscreen({ hide: true }),
                      k.pos(
                        ent.__worldX * levelsize + 8 * levelsize,
                        ent.__worldY * levelsize + 8 * levelsize
                      ),
                      "Tile",
                    ]),
                    name: entValues["Class"],
                  });
                }
                break;
              case "TickTrigger":
                if (entValues["ActivateGroupID"] === -1) {
                  updateTriggers.push(entValues["GroupID"]);
                } else {
                  unactiveUpdateTriggers.push({
                    ActivateGroupID: entValues["ActivateGroupID"],
                    GroupID: entValues["GroupID"],
                  });
                }
                break;
              case "Collectible":
                let CollectibleSpritename =
                  entValues["Tile"].x / 16 + (entValues["Tile"].y / 16) * 25;
                if (entValues["Sound_Effect"] !== "") {
                  k.loadSound(
                    entValues["Sound_Effect"],
                    entValues["Sound_Effect"]
                  );
                }
                k.add([
                  k.scale(levelsize),
                  k.sprite("SpriteSheet" + CollectibleSpritename),
                  k.anchor("center"),
                  k.z(2000),
                  k.offscreen({ hide: true }),
                  k.pos(
                    ent.__worldX * levelsize + 8 * levelsize,
                    ent.__worldY * levelsize + 8 * levelsize
                  ),
                  k.area(),
                  {
                    GroupID: entValues["GroupID"],
                    SFX: entValues["Sound_Effect"],
                  },
                  "Collectible",
                ]);
                break;
              case "Phys_Object":
                let POent = k.add([
                  k.pos(ent.__worldX * levelsize, ent.__worldY * levelsize),
                  k.anchor("center"),
                  k.rect(ent.width * levelsize, ent.height * levelsize),
                  k.color(
                    hexToRgb(entValues["Color"]).r,
                    hexToRgb(entValues["Color"]).g,
                    hexToRgb(entValues["Color"]).b
                  ),
                  k.rotate(0),
                  k.z(300000000),
                  k.outline(0.5, k.BLACK),
                  matterRect(engine, {
                    angle: k.deg2rad(entValues["Angle"]),
                    friction: entValues["Friction"],
                    isStatic: entValues["IsStatic"],
                  }),
                ]);

                if (entValues["Class"] !== "") {
                  classTiles.push({
                    entity: POent,
                    name: entValues["Class"],
                  });
                }
                break;
              default:
                let text = k.add([
                  k.scale(levelsize),
                  k.text(
                    "// - LDTKJSON ERR \n// - Unknown Object: \n" +
                      ent.__identifier +
                      "\n" +
                      JSON.stringify(entValues),
                    {
                      size: 8 * levelsize,
                    }
                  ),
                  k.z(2002),
                  k.offscreen({ hide: true }),
                  k.color(k.WHITE),
                  k.outline(2.5 * levelsize, k.WHITE),
                  k.pos(ent.__worldX * levelsize, ent.__worldY * levelsize),
                ]);
                let textObj = k.add([
                  k.scale(levelsize, levelsize),
                  k.sprite("SpriteSheet0", {
                    tiled: true,
                    width: text.width,
                    height: text.height,
                  }),
                  k.z(2001),
                  k.offscreen({ hide: true }),
                  k.pos(ent.__worldX * levelsize, ent.__worldY * levelsize),
                  {
                    Update() {
                      this.sprite.height = text.height;
                      this.sprite.width = text.width;
                    },
                  },
                ]);
                break;
            }
          }
          break;
        case "Tiles":
          for (let z = 0; z < element.layerInstances[i].gridTiles.length; z++) {
            let gridInstanceOnPoint = element.layerInstances[i].gridTiles[z];
            let spritename: number = gridInstanceOnPoint.t;

            k.add([
              k.scale(levelsize),
              k.sprite("SpriteSheet" + spritename),
              k.offscreen({ hide: true }),
              k.pos(
                gridInstanceOnPoint.px[0] * levelsize +
                  element.worldX * levelsize,
                gridInstanceOnPoint.px[1] * levelsize +
                  element.worldY * levelsize
              ),
              "Tile",
            ]);
          }
          break;
        default:
          break;
      }
    }
  }

  async function delay(ms) {
    new Promise((res) => setTimeout(res, ms));
  }

  let checkGroups = async function () {
    let checkFlag = true;

    if (maxGroups !== -1) {
      if (checkFlag) {
        checkFlag = false;

        const asyncTasks = [];

        for (let i = 0; i <= maxGroups; i++) {
          try {
            let GroupID = scripts[i].GroupID;
            let NextGID = scripts[i].NextGID;
            let Func = scripts[i].Func;
            let X = scripts[i].X;
            let Y = scripts[i].Y;
            let group = groups[GroupID];
            if (group.active) {
              const runnableFunc = new Function(
                "k",
                "engine",
                "Matter",
                "groups",
                "scripts",
                "X",
                "Y",
                "currentScene",
                "nextScene",
                "classTiles",
                "matterRect",
                "matterRect4Sprites",
                "matterRect4Static",
                "PlayerPawnCircle",
                "matterCircle",
                "hexToRgb",
                "kDownloadToVar",
                "kCamera",
                "kReset",
                "loadSpritesSheet",
                "player",
                "score",
                "lives",
                "health",
                "delay",
                `
                  return (async function() {
                    ${Func}
                  })();
                `
              );

              asyncTasks.push(
                runnableFunc(
                  k,
                  engine,
                  Matter,
                  groups,
                  scripts,
                  X,
                  Y,
                  currentScene,
                  nextScene,
                  classTiles,
                  matterRect,
                  matterRect4Sprites,
                  matterRect4Static,
                  PlayerPawnCircle,
                  matterCircle,
                  hexToRgb,
                  kDownloadToVar,
                  kCamera,
                  kReset,
                  loadSpritesSheet,
                  player,
                  score,
                  lives,
                  health,
                  delay
                )
              );

              group = groups[GroupID];
              groups[GroupID] = { active: false, chgX: 0, chgY: 0 };
              groups[NextGID] = { active: true, chgX: 0, chgY: 0 };
            }
          } catch (error) {}
        }
        try {
          await Promise.all(asyncTasks);
        } catch (error) {
          let reelError = "UGC JS Script ERR: " + error.stack;
          let smallError = "UGC JS Script ERR: " + error;
          k.debug.log(smallError);
          console.error(reelError);
        }
      } else {
        checkFlag = true;
      }
    }
  };

  for (let i = 0; i < CTriggers.length; i++) {
    const element = CTriggers[i];
    element.obj.onCollide("Player", () => {
      groups.splice(element.GroupID, 1, { active: true, chgX: 0, chgY: 0 });
    });
    element.obj.onCollideEnd("Player", () => {
      groups.splice(element.UnCollideGroupID, 1, {
        active: true,
        chgX: 0,
        chgY: 0,
      });
      if (element.OneTime) {
        k.destroy(element.obj);
      }
    });
  }
  player.onCollide("Collectible", (c) => {
    if (c.GroupID !== -1) {
      groups.splice(c.GroupID, 1, { active: true, chgX: 0, chgY: 0 });
    }
    if (c.SFX !== "") {
      k.loadSound(c.SFX, c.SFX);
      k.play(c.SFX);
    }
    k.destroy(c);
  });

  k.onUpdate(() => {
    for (let i = 0; i < unactiveUpdateTriggers.length; i++) {
      const element = unactiveUpdateTriggers[i];
      try {
        if (groups[element.ActivateGroupID].active) {
          score++;
          unactiveUpdateTriggers.splice(i, 1);
          updateTriggers.push(element.GroupID);
        }
      } catch {}
    }
    for (let i = 0; i < updateTriggers.length; i++) {
      const element = updateTriggers[i];
      groups.splice(element, 1, { active: true, chgX: 0, chgY: 0 });
    }
  });

  k.onUpdate(checkGroups);

  player.onCollide("Death_Trig", () => {
    k.go("scene");
  });
  player.onCollide("Win_Condition", () => {
    k.scene("nextLevel", nextScene);
    k.go("nextLevel");
  });
  player.onCollideUpdate("BG", () => {
    isInlevel = 5;
  });

  k.onUpdate(() => {
    if (isInlevel <= 0) {
      k.go("scene");
    }
    isInlevel--;
  });
}
