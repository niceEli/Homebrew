import k from "../../kaboom";
import Matter from "matter-js";

import * as sceneData from "../../kLdtkWorlds/campaign/Empty.json";
import kLdtkSceneImporter from "../../kUtils/kLdtkSceneImporter";
import kMatterTest from "../../scenes/kMatterTest";

export default function Empty() {
  // Conf
  const ThisLevel = Empty;
  const Nextlevel = Empty;

  // Setup Engine
  const engine: any = Matter.Engine.create();
  engine.velocityIterations = 100;
  engine.positionIterations = 200;
  Matter.Composite.create(engine);
  k.onUpdate(() => {
    Matter.Engine.update(engine, k.dt() * 1000);
  });
  // Load This Scene And Sprites
  kLdtkSceneImporter(sceneData, 2, ThisLevel, Nextlevel, engine);

  k.add([
    k.rect(99999999, 99999999),
    k.color(k.BLACK),
    k.z(-999999999999999),
    k.anchor("center"),
  ]);

  k.scene("kLdtkScene", ThisLevel);
}
