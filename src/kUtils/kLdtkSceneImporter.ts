import k from "../kaboom";
import { hexToRgb } from "../kUtils/kColor";
import * as w from "../kLdtkWorlds/example.json";
import matterRect, { matterRect4Sprites } from "./kMatterRect";
import PlayerPawnCircle from "./kMatterPlayerCircle";
import kCamera from "./kCamera";
import kReset from "./kReset";
import { SceneDef } from "kaboom";
import kMatterTest from "../scenes/kMatterTest";

export default function kLdtkSceneImporter(
  sceneData = w,
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

  // This is your level tiles
  k.loadSpriteAtlas("spriteSheet.png", {
    "0spriteSheet": {
      x: 0,
      y: 0,
      width: 8,
      height: 8,
    },
    "1spriteSheet": {
      x: 8,
      y: 0,
      width: 8,
      height: 8,
    },
    "2spriteSheet": {
      x: 16,
      y: 0,
      width: 8,
      height: 8,
    },
    "3spriteSheet": {
      x: 0,
      y: 8,
      width: 8,
      height: 8,
    },
    "4spriteSheet": {
      x: 8,
      y: 8,
      width: 8,
      height: 8,
    },
    "5spriteSheet": {
      x: 16,
      y: 8,
      width: 8,
      height: 8,
    },
  });

  let isInlevel: number;
  var condition: SceneDef;

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
            var player = k.add([
              k.pos(ent.__worldX * levelsize, ent.__worldY * levelsize),
              k.anchor("center"),
              k.rotate(0),
              k.sprite("CTPlayer"),
              k.scale(2 * levelsize),
              k.z(2147483647),
              // Matter For Pawns
              PlayerPawnCircle(
                engine,
                {},
                8 * levelsize,
                k.vec2(2 * levelsize, 2 * levelsize)
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
              k.sprite("box"),
              k.scale(2 * levelsize),
              k.z(2147483646),
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
          }
        }
      } else if (element.layerInstances[i].__type === "Tiles") {
        for (let z = 0; z < element.layerInstances[i].gridTiles.length; z++) {
          let gridInstanceOnPoint = element.layerInstances[i].gridTiles[z];
          let spritename: string = gridInstanceOnPoint.t;
          spritename = spritename.toString() + "spriteSheet";
          k.add([
            k.scale(2 * levelsize),
            k.sprite(spritename),
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
