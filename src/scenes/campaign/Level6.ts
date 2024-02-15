import k from "../../kaboom";
import Matter from "matter-js";
import delay from "../../kUtils/kDelay";

import kLdtkSceneImporter from "../../kUtils/kLdtkSceneImporter";
import kMatterTest from "../../scenes/kMatterTest";

import Empty from "./Empty"; //You need to uncomment this
import Level7 from "./Level7";

export default async function Level6() {
  k.setBackground(0,0,0);
  // Conf
  const LevelName = "Level6";
  const ThisLevel = Level6;
  const Nextlevel = Level7;

  // Setup Engine
  const engine: any = Matter.Engine.create();
  engine.velocityIterations = 100;
  engine.positionIterations = 200;
  Matter.Composite.create(engine);
  let sceneData = await import("../../kLdtkWorlds/campaign/Level6.json");
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
