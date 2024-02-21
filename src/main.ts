/*Licence (GPL3)*/ let licence =
  "KaboomTS Game Engine And Physformer2 Game\nCopyright (C) 2024 Eli Cardoso\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details";
// Imports
import k from "./kaboom";
import loadSpritesSheet from "./kUtils/kLoadSpriteSheet";
import loadSounds from "./kUtils/kLoadSounds";
import loadScenes from "./kUtils/kLoadScenes";
import * as gameInfo from "./gameInfo.json";

// Make Black Screen
k.add([
  k.rect(99999999, 99999999),
  k.color(k.BLACK),
  k.z(-999999999999999),
  k.anchor("center"),
]);

// Load SpriteSheet
loadSpritesSheet();

// Load Sounds
loadSounds();

// Load Scenes
loadScenes();

k.onLoad(async () => {
  console.clear();
  console.log(licence);
  if (k.isKeyDown("c")) {
    // UGC Debug
    k.go("UGCLoader");
    return;
  } else {
    // Run Scenes
    k.go(gameInfo.gameMenuScene);
    return;
  }
});
