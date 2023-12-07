import k from "../kaboom";
import { hexToRgb } from "../kUtils/kColor";
export default function kLdtkSceneImporter(sceneData) {
  // Load The Level
  for (let i = 0; i < sceneData.levels.length; i++) {
    const element = sceneData.levels[i];
    let bg = k.add([
      //k.anchor("center"),
      k.rect(element.pxWid, element.pxHei),
      k.pos(element.worldX, element.worldY),
      k.z(-2147483647),
      k.color(
        hexToRgb(element.__bgColor).r,
        hexToRgb(element.__bgColor).g,
        hexToRgb(element.__bgColor).b
      ),
    ]);
    for (let i = 0; i < element.layerInstances.length; i++) {
      if (element.layerInstances[i].visible) {
        console.log(`layer`, i, `is visible`);
      }
    }
  }
}
