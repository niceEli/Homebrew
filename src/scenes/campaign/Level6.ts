import k from "../../kaplay";
import Matter from "matter-js";
import delay from "../../kUtils/kDelay";

import gameInfo from "../../gameInfo";

import kLdtkSceneImporter from "../../kUtils/kLdtkSceneImporter";
import kMatterTest from "../../scenes/kMatterTest";

import Empty from "./Empty"; //You need to uncomment this
import Level7 from "./Level7";

import db from "../../indexedDB";

export default async function Level6() {
  sessionStorage.setItem(gameInfo.internalName + "_isUGC", "false");
  k.setBackground(0, 0, 0, 1);
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
  db.storage.put({ value: LevelName, key: "cLevel" }, "cLevel");
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
