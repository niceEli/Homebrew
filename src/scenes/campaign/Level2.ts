import k from "../../kaboom";
import Matter from "matter-js";

import kLdtkSceneImporter from "../../kUtils/kLdtkSceneImporter";
import kMatterTest from "../../scenes/kMatterTest";
import delay from "../../kUtils/kDelay";
import Empty from "./Empty";
import Level3 from "./Level3";

export default async function Level2() {
  // Conf
  const ThisLevel = Level2;
  const Nextlevel = Level3;

  // Setup Engine
  const engine: any = Matter.Engine.create();
  engine.velocityIterations = 10;
  engine.positionIterations = 20;
  Matter.Composite.create(engine);
  let sceneData = await import("../../kLdtkWorlds/campaign/Level2.json");
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

  await new Promise((f) => setTimeout(f, 100));
  await delay(100);
  k.onUpdate(() => {
    Matter.Engine.update(engine, k.dt() * 1000);
  });
}
