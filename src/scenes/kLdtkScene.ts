import k from "../kaplay";
import Matter from "matter-js";

import gameInfo from "../gameInfo";

import kLdtkSceneImporter from "../kUtils/kLdtkSceneImporter";
import kMatterTest from "../scenes/kMatterTest";

import Empty from "./campaign/Empty"; //You need to uncomment this

export default async function kLdtkScene() {
  sessionStorage.setItem(gameInfo.internalName + "_isUGC", "false");
  k.setBackground(0, 0, 0);
  // Conf
  const ThisLevel = kLdtkScene;
  const Nextlevel = kLdtkScene;

  // Setup Engine
  const engine: any = Matter.Engine.create();
  engine.velocityIterations = 100;
  engine.positionIterations = 200;
  Matter.Composite.create(engine);
  k.onUpdate(() => {
    Matter.Engine.update(engine, k.dt() * 1000);
  });
  let sceneData = await import("../kLdtkWorlds/example.json");
  // Load This Scene And Sprites
  localStorage.setItem(gameInfo.internalName + "_cLevel", ThisLevel.name);
  try {
    kLdtkSceneImporter(sceneData, ThisLevel, Nextlevel, engine);
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
