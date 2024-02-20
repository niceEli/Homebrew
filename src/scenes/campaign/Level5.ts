import k from "../../kaboom";
import Matter from "matter-js";
import delay from "../../kUtils/kDelay";

import * as gameInfo from "../../gameInfo.json";

import kLdtkSceneImporter from "../../kUtils/kLdtkSceneImporter";
import kMatterTest from "../../scenes/kMatterTest";
import Level6 from "./Level6";

import Empty from "./Empty"; //You need to uncomment this

export default async function Level5() {
  sessionStorage.setItem(gameInfo.internalName + "_isUGC", "false");
  k.setBackground(0, 0, 0, 1);
  // Conf
  const LevelName = "Level5";
  const ThisLevel = Level5;
  const Nextlevel = Level6;

  // Setup Engine
  const engine: any = Matter.Engine.create();
  engine.velocityIterations = 100;
  engine.positionIterations = 200;
  Matter.Composite.create(engine);
  let sceneData = await import("../../kLdtkWorlds/campaign/Level5.json");
  // Load This Scene And Sprites
  localStorage.setItem(gameInfo.internalName + "_cLevel", LevelName);
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
