import k from "../kaboom";
import { hexToRgb } from "../kUtils/kColor";
import * as w from "../kLdtkWorlds/example.json";
import matterRect from "./kMatterRect";
import { Engine } from "matter-js";
import PlayerPawnCircle from "./kMatterPlayerCircle";
import kCamera from "./kCamera";
import kReset from "./kReset";
import { SceneDef } from "kaboom";
export default function kLdtkSceneImporter(
  sceneData = w,
  levelsize: number = 2,
  currentScene: SceneDef,
  engine?: any
) {
  // Load The Level
  k.scene("scene", currentScene);
  for (let i = 0; i < sceneData.levels.length; i++) {
    const element = sceneData.levels[i];
    console.log(sceneData.levels);
    let bg = k.add([
      //k.anchor("center"),
      k.rect(element.pxWid * levelsize, element.pxHei * levelsize),
      k.pos(element.worldX * levelsize, element.worldY * levelsize),
      k.z(-2147483647),
      k.color(
        hexToRgb(element.__bgColor).r,
        hexToRgb(element.__bgColor).g,
        hexToRgb(element.__bgColor).b
      ),
    ]);
    for (let i = 0; i < element.layerInstances.length; i++) {
      if (element.layerInstances[i].visible) {
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
                k.pos(ent.__worldX * levelsize, ent.__worldY * levelsize),
                k.anchor("center"),
                k.opacity(0),
                matterRect(engine, { isStatic: true }),
              ]);
            } else if (ent.__identifier == "Death_Trig") {
              k.add([
                k.rect(levelsize * ent.width, levelsize * ent.height),
                k.pos(ent.__worldX * levelsize, ent.__worldY * levelsize),
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
                k.scale(4),
                k.z(2147483647),
                // Matter For Pawns
                PlayerPawnCircle(engine, {}, 16, k.vec2(4, 4)),
                kCamera(),
                kReset(currentScene),
                k.area(),
                "Player",
              ]);
            }
          }
        }
      }
    }
  }
  player.onCollide("Death_Trig", () => {
    k.go("scene");
  });
}
