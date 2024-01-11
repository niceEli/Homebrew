import k from "../../kaboom";
import Matter from "matter-js";

import kLdtkSceneImporter from "../../kUtils/kLdtkSceneImporter";
import kMatterTest from "../../scenes/kMatterTest";

//import Empty from "./Empty"; //You need to uncomment this

export default async function Empty() {
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
  let sceneData = await import("../../kLdtkWorlds/campaign/Empty.json");
  // Load This Scene And Sprites
  localStorage.setItem("cLevel", ThisLevel.name);
  try {
    kLdtkSceneImporter(sceneData, 2, ThisLevel, Nextlevel, engine);
  } catch (error) {
    k.debug.error(error);
    k.debug.paused = true;
    console.error(error.stack);
  }

  k.add([
    k.rect(99999999, 99999999),
    k.color(k.BLACK),
    k.z(-999999999999999),
    k.anchor("center"),
  ]);

  k.scene("kLdtkScene", ThisLevel);
}
