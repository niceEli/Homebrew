import k from "../kaboom";
import Matter from "matter-js";
import matterRect from "../kUtils/kMatterRect";
import matterCircle from "../kUtils/kMatterCircle";
import PlayerPawnCircle from "../kUtils/kMatterPlayerCircle";

import * as sceneData from "../kLdtkWorlds/example.json";
import kLdtkSceneImporter from "../kUtils/kLdtkSceneImporter";

export default function kLdtkScene() {
  // Setup Engine
  const engine: any = Matter.Engine.create();
  Matter.Composite.create(engine);
  k.onUpdate(() => {
    Matter.Engine.update(engine, k.dt() * 1000);
  });
  // Load This Scene And Sprites
  k.loadSprite("RAD", "Radians.jpg");
  k.loadSprite("CTPlayer", "CTPlayer.png");
  kLdtkSceneImporter(sceneData, 2, kLdtkScene, engine);

  k.scene("kLdtkScene", kLdtkScene);
}
