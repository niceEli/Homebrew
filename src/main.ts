// Imports
import k from "./kaboom";
// Import Scenes
import HelloWorld from "./scenes/helloworld";
import kMatterTest from "./scenes/kMatterTest";
import Jilian from "./scenes/Jillian";
import Ava from "./scenes/Ava";
import kLdtkScene from "./scenes/kLdtkScene";
import loadSpritesSheet from "./kUtils/kLoadSpriteSheet";
// Add Scenes
k.scene("Hello-World-EX", HelloWorld);
k.scene("kMatter-Test", kMatterTest);
k.scene("Jillian-Test-Scene", Jilian);
k.scene("AvaC", Ava);
k.scene("kLdtkScene", kLdtkScene);

// Load SpriteSheet
loadSpritesSheet();

// Run Scenes

//k.go('Hello-World-EX'); // This is a template scene

//k.go("kMatter-Test"); // This is a physics (matter) template scene

k.go("kLdtkScene");

//k.go('Jillian-Test-Scene') // This is a scene made by my friend that doesnt know how to program

//k.go('AvaC') // My Sister wrote this "obby"
