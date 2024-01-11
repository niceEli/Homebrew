// Imports
import k from "./kaboom";

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
import loadSpritesSheet from "./kUtils/kLoadSpriteSheet";
import Level1 from "./scenes/campaign/Level1";
import Level2 from "./scenes/campaign/Level2";
import Empty from "./scenes/campaign/Empty";
// Add Scenes
k.scene("Hello-World-EX", HelloWorld);
k.scene("kMatter-Test", kMatterTest);
k.scene("Jillian-Test-Scene", Jilian);
k.scene("AvaC", Ava);
k.scene("kLdtkScene", kLdtkScene);
k.scene("Empty", Empty);
k.scene("Level1", Level1);
k.scene("Level2", Level2);

// Load SpriteSheet
loadSpritesSheet();

// Run Scenes

//k.go('Hello-World-EX'); // This is a template scene

//k.go("kMatter-Test"); // This is a physics (matter) template scene

//k.go("kLdtkScene");

//k.go('Jillian-Test-Scene') // This is a scene made by my friend that doesnt know how to program

//k.go('AvaC') // My Sister wrote this "obby"

k.go("Level1");
//k.go("Level2");
