import k from "../../kaplay";
import Matter from "matter-js";
import delay from "../../kUtils/kDelay";

import gameInfo from "../../gameInfo";

import kLdtkSceneImporter from "../../kUtils/kLdtkSceneImporter";
import db from "../../indexedDB";

//import Empty from "./Empty"; //You need to uncomment this

export default async function Empty() {
  sessionStorage.setItem(gameInfo.internalName + "_isUGC", "false");
  k.setBackground(0, 0, 0, 1);
  // Conf
  const LevelName = "Empty";
  const ThisLevel = Empty;
  const Nextlevel = Empty;

  // Setup Engine
  const engine: any = Matter.Engine.create();
  engine.velocityIterations = 100;
  engine.positionIterations = 200;
  Matter.Composite.create(engine);
  let sceneData = await import("../../kLdtkWorlds/campaign/Empty.json");
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
