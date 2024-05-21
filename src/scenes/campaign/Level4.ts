import k from "../../kaplay";
import Matter from "matter-js";
import delay from "../../kUtils/kDelay";

import gameInfo from "../../gameInfo";

import kLdtkSceneImporter from "../../kUtils/kLdtkSceneImporter";
import kMatterTest from "../../scenes/kMatterTest";

import Empty from "./Empty"; //You need to uncomment this
import Level5 from "./Level5";

export default async function Level4() {
  sessionStorage.setItem(gameInfo.internalName + "_isUGC", "false");
  k.setBackground(0, 0, 0, 1);
  // Conf
  const LevelName = "Level4";
  const ThisLevel = Level4;
  const Nextlevel = Level5;

  // Setup Engine
  const engine: any = Matter.Engine.create();
  engine.velocityIterations = 10;
  engine.positionIterations = 20;
  Matter.Composite.create(engine);
  let sceneData = await import("../../kLdtkWorlds/campaign/Level4.json");
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
