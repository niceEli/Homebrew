import k from "../kaboom";
import { hexToRgb } from "../kUtils/kColor";
import matterRect, { matterRect4Sprites } from "./kMatterRect";
import PlayerPawnCircle from "./kMatterPlayerCircle";
import kCamera from "./kCamera";
import kReset from "./kReset";
import { GameObj, SceneDef } from "kaboom";
import Matter from "matter-js";

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
  let groups = [];
  let CTriggers = [];

  for (let i = 0; i < 9999; i++) {
    groups.push({ active: false, chgX: 0, chgY: 0 });
  }

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
      if (element.layerInstances[i].__type === "Entities") {
        for (
          let z = 0;
          z < element.layerInstances[i].entityInstances.length;
          z++
        ) {
          const ent = element.layerInstances[i].entityInstances[z];
          if (ent.__identifier == "Collider") {
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
          } else if (ent.__identifier == "Death_Trig") {
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
          } else if (ent.__identifier == "Player_Start") {
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
                k.vec2(levelsize, levelsize)
              ),
              kCamera(ent.fieldInstances[0].__value),
              kReset(currentScene),
              k.area(),
              "Player",
            ]);
          } else if (ent.__identifier == "Box_Spawner") {
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
          } else if (ent.__identifier == "Win_Condition") {
            k.add([
              k.pos(ent.__worldX * levelsize, ent.__worldY * levelsize),
              k.anchor("center"),
              k.sprite("door"),
              k.scale(2 * levelsize),
              k.z(-2147483645),
              k.area(),
              "Win_Condition",
            ]);
          } else if (ent.__identifier == "Text_Object") {
            k.add([
              k.text(ent.fieldInstances[0].__value, {
                size: ent.fieldInstances[1].__value,
                font: "sans-serif",
                align: "center",
              }),
              k.anchor("center"),
              k.z(2147483645),
              k.color(ent.fieldInstances[2].__value),
              k.pos(ent.__worldX * levelsize, ent.__worldY * levelsize),
            ]);
          } else if (ent.__identifier == "Script") {
            scripts.push({
              Func: ent.fieldInstances[0].__value,
              GroupID: ent.fieldInstances[1].__value,
              NextGID: ent.fieldInstances[2].__value,
              X: ent.__worldX * levelsize,
              Y: ent.__worldY * levelsize,
            });
          } else if (ent.__identifier == "StartTrigger") {
            groups.splice(ent.fieldInstances[0].__value, 1, {
              active: true,
              chgX: 0,
              chgY: 0,
            });
          } else if (ent.__identifier == "CollisionTrigger") {
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
              GroupID: ent.fieldInstances[0].__value,
            });
          }
        }
      } else if (element.layerInstances[i].__type === "Tiles") {
        for (let z = 0; z < element.layerInstances[i].gridTiles.length; z++) {
          let gridInstanceOnPoint = element.layerInstances[i].gridTiles[z];
          let spritename: number = gridInstanceOnPoint.t;

          k.add([
            k.scale(levelsize),
            k.sprite("SpriteSheet" + spritename),
            k.pos(
              gridInstanceOnPoint.px[0] * levelsize +
                element.worldX * levelsize,
              gridInstanceOnPoint.px[1] * levelsize + element.worldY * levelsize
            ),
          ]);
        }
      }
    }
  }

  let checkGroups = function () {
    for (let i = 0; i < scripts.length; i++) {
      const element = scripts[i];
      if (groups[element.GroupID].active) {
        const func = element.Func;
        const runnableFunc = new Function(
          "k",
          "engine",
          "Matter",
          "groups",
          "scripts",
          "X",
          "Y",
          `
        return (async function() {
          ${func}
        })();
      `
        );

        runnableFunc(k, engine, Matter, groups, scripts, element.X, element.Y);
        groups.splice(element.GroupID, 1, { active: false, chgX: 0, chgY: 0 });
        groups.splice(element.NextGID, 1, { active: true, chgX: 0, chgY: 0 });
      }
    }
  };

  k.onUpdate(checkGroups);

  for (let i = 0; i < CTriggers.length; i++) {
    const element = CTriggers[i];
    element.obj.onCollide("Player", () => {
      groups.splice(element.GroupID, 1, { active: true, chgX: 0, chgY: 0 });
    });
  }

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
