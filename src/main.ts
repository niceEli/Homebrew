/*Licence (GPL3)*/ let licence = `Copyright (c) 2024 KaboomTS Contributers\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
// Imports
import k from "./kaboom";
import loadSpritesSheet from "./kUtils/kLoadSpriteSheet";
import loadSounds from "./kUtils/kLoadSounds";
import loadScenes from "./kUtils/kLoadScenes";
import gameInfo from "./gameInfo";
import kPlayIntroVid from "./kUtils/kPlayIntroVid";
import getNGSong from "./kUtils/kNGLoader";

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
  if (
    gameInfo["introVid"] == undefined ||
    gameInfo["introVid"] == "" ||
    gameInfo["introVid"] == null
  ) {
    onStart();
  } else {
    kPlayIntroVid(gameInfo["introVid"], onStart);
  }
});

async function onStart() {
  if (
    gameInfo["licence"] != undefined &&
    gameInfo["licence"] != "" &&
    gameInfo["licence"] != null
  ) {
    licence = gameInfo["licence"];
  }
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
}
