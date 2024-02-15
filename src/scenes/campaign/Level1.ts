import k from "../../kaboom";
import Matter from "matter-js";

import kLdtkSceneImporter from "../../kUtils/kLdtkSceneImporter";
import kMatterTest from "../../scenes/kMatterTest";
import delay from "../../kUtils/kDelay";
import Empty from "./Empty";
import Level2 from "./Level2";

export default async function Level1() {
  k.setBackground(0,0,0);
  // Conf
  const LevelName = "Level1";
  const ThisLevel = Level1;
  const Nextlevel = Level2;

  // Setup Engine
  const engine: any = Matter.Engine.create();
  engine.velocityIterations = 10;
  engine.positionIterations = 20;
  Matter.Composite.create(engine);
  let sceneData = await import("../../kLdtkWorlds/campaign/Level1.json");
  // Load This Scene And Sprites
  localStorage.setItem("cLevel", LevelName);
  try {
    kLdtkSceneImporter(sceneData, ThisLevel, Nextlevel, engine);
  } catch (error) {
    k.debug.error(error);
    k.debug.paused = true;
    console.error(error.stack);
  }

  k.scene("kLdtkScene", ThisLevel);
  k.scene(LevelName, ThisLevel);

  await new Promise((f) => setTimeout(f, 100));
  k.onUpdate(() => {
    Matter.Engine.update(engine, k.dt() * 1000);
  });
}
