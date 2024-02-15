import k from "../kaboom";
import Matter from "matter-js";
import delay from "../kUtils/kDelay";
import * as $ from "jquery";

import kLdtkSceneImporter from "../kUtils/kLdtkSceneImporter";
import kMatterTest from "../scenes/kMatterTest";

import Empty from "./campaign/Empty";
import Dropzone from "dropzone";
import UGCUploader from "./UGCUploader";

export default async function UGCLoader() {
  k.setBackground(k.WHITE);
  let dz = document.createElement("form");
  dz.id = "UGCUploadLoadLevel";
  dz.className = "dropzone";
  dz.action = ".";
  dz.setAttribute(
    "style",
    "display: flex; justify-content: center; align-items: center; height: 100vh;"
  );
  document.body.insertAdjacentElement("afterbegin", dz);
  let myDropzone = new Dropzone("#UGCUploadLoadLevel", {
    acceptedFiles: ".json,.ldtk",
  });
  myDropzone.on("addedfile", async function (file) {
    myDropzone.removeAllFiles();
    sessionStorage.setItem("UGCLevelData", await file.text());
    myDropzone.element.remove();
    document.querySelector("#UGCUploadLoadLevel");
    k.scene("UGCLevel", UGCLevel);
    k.go("UGCLevel");
  });
}

async function UGCLevel() {
  k.setBackground(k.BLACK);
  // Conf
  const LevelName = "UGCLevel";
  const ThisLevel = UGCLoader;
  const Nextlevel = UGCUploader;

  // Setup Engine
  const engine: any = Matter.Engine.create();
  engine.velocityIterations = 100;
  engine.positionIterations = 200;
  Matter.Composite.create(engine);
  let sceneData = JSON.parse(sessionStorage.getItem("UGCLevelData"));
  // Load This Scene And Sprites
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
