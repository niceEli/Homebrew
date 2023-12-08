import k from "../kaboom";
import Matter from "matter-js";
import matterRect from "../kUtils/kMatterRect";
import matterCircle from "../kUtils/kMatterCircle";
import PlayerPawnCircle from "../kUtils/kMatterPlayerCircle";

import * as sceneData from "../kLdtkWorlds/example.json";
import kLdtkSceneImporter from "../kUtils/kLdtkSceneImporter";
import kMatterTest from "../scenes/kMatterTest";

export default function kLdtkScene() {
  // Setup Engine
  const engine: any = Matter.Engine.create();
  Matter.Composite.create(engine);
  k.onUpdate(() => {
    Matter.Engine.update(engine, k.dt() * 1000);
  });
  // Load This Scene And Sprites
  kLdtkSceneImporter(sceneData, 2, kLdtkScene, kMatterTest, engine);

  k.add([
    k.rect(99999999, 99999999),
    k.color(k.BLACK),
    k.z(-999999999999999),
    k.anchor("center"),
  ]);

  k.scene("kLdtkScene", kLdtkScene);
}
