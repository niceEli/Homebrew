import k from "../../kaplay";
import Matter from "matter-js";
import delay from "../../kUtils/kDelay";

import gameInfo from "../../gameInfo";

import kLdtkSceneImporter from "../../kUtils/kLdtkSceneImporter";
import kMatterTest from "../../scenes/kMatterTest";

import Empty from "./Empty"; //You need to uncomment this
import Level8 from "./Level8";

import db from "../../indexedDB";

export default async function Level7() {
  sessionStorage.setItem(gameInfo.internalName + "_isUGC", "false");
  k.setBackground(0, 0, 0, 1);
  // Conf
  const LevelName = "Level7";
  const ThisLevel = Level7;
  const Nextlevel = Level8;

  // Setup Engine
  const engine: any = Matter.Engine.create();
  engine.velocityIterations = 100;
  engine.positionIterations = 200;
  Matter.Composite.create(engine);
  let sceneData = await import("../../kLdtkWorlds/campaign/Level7.json");
  // Load This Scene And Sprites
  db.storage.put({ value: LevelName, key: "cLevel" }, "cLevel");
  try {
    kLdtkSceneImporter(sceneData, ThisLevel, Nextlevel, engine, k.vec2(2, 2));
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
