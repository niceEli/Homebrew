/*Licence (GPL3)*/ console.log(
  "KaboomTS Game Engine And Physformer2 Game\nCopyright (C) 2024 Eli Cardoso\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details"
);

// Imports
import k from "./kaboom";
import loadSpritesSheet from "./kUtils/kLoadSpriteSheet";
import loadSounds from "./kUtils/kLoadSounds";

// Make Black Screen
k.add([
  k.rect(99999999, 99999999),
  k.color(k.BLACK),
  k.z(-999999999999999),
  k.anchor("center"),
]);

// Reset Score
sessionStorage.setItem("score", "0");

// Import Scenes
import HelloWorld from "./scenes/helloworld";
import kMatterTest from "./scenes/kMatterTest";
import Jilian from "./scenes/Jillian";
import Ava from "./scenes/Ava";
import kLdtkScene from "./scenes/kLdtkScene";
import UGCLoader from "./scenes/UGCLoader";
// Import Campaign Levels
import Level1 from "./scenes/campaign/Level1";
import Level2 from "./scenes/campaign/Level2";
import Level3 from "./scenes/campaign/Level3";
import Level4 from "./scenes/campaign/Level4";
import Level5 from "./scenes/campaign/Level5";
import Level6 from "./scenes/campaign/Level6";
import Level7 from "./scenes/campaign/Level7";
import Level8 from "./scenes/campaign/Level8";
import Empty from "./scenes/campaign/Empty";
import TopDown from "./scenes/campaign/TopDown";
// Add Scenes
k.scene("Hello-World-EX", HelloWorld);
k.scene("kMatter-Test", kMatterTest);
k.scene("Jillian-Test-Scene", Jilian);
k.scene("AvaC", Ava);
k.scene("kLdtkScene", kLdtkScene);
k.scene("UGCLoader", UGCLoader);
k.scene("Empty", Empty);
k.scene("Level1", Level1);
k.scene("Level2", Level2);
k.scene("Level3", Level3);
k.scene("Level4", Level4);
k.scene("Level5", Level5);
k.scene("Level6", Level6);
k.scene("Level7", Level7);
k.scene("Level8", Level8);
k.scene("TopDown", TopDown);

// Load SpriteSheet
loadSpritesSheet();

// Load Sounds
loadSounds();

k.onLoad(() => {
  if (k.isKeyDown("c")) {
    k.go("UGCLoader");
    return;
  }
  // Run Scenes
  //
  //k.go('Hello-World-EX'); // This is a template scene
  //
  //k.go("kMatter-Test"); // This is a physics (matter) template scene
  //
  //k.go("kLdtkScene");
  //
  //k.go('Jillian-rTest-Scene') // This is a scene made by my friend that doesnt know how to program
  //
  //k.go("AvaC"); // My Sister wrote this "obby"
  //
  //k.go("UGCLoader");
  //
  k.go("Level1");
  //k.go("Level2");
  //k.go("Level3");
  //k.go("Level4");
  //k.go("Level5");
  //k.go("Level6");
  //k.go("Level7");
  //k.go("Level8");
  //k.go("TopDown")
  //k.go("Empty");
});
