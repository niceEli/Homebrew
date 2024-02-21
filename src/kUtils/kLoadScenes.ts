import k from "../kaboom";

// Import Scenes
import HelloWorld from "../scenes/helloworld";
import kMatterTest from "../scenes/kMatterTest";
import Jilian from "../scenes/Jillian";
import Ava from "../scenes/Ava";
import kLdtkScene from "../scenes/kLdtkScene";
import UGCLoader from "../scenes/UGCLoader";
import TopDown from "../scenes/campaign/TopDown";
import Empty from "../scenes/campaign/Empty";
// Import Campaign Levels
import Level1 from "../scenes/campaign/Level1";
import Level2 from "../scenes/campaign/Level2";
import Level3 from "../scenes/campaign/Level3";
import Level4 from "../scenes/campaign/Level4";
import Level5 from "../scenes/campaign/Level5";
import Level6 from "../scenes/campaign/Level6";
import Level7 from "../scenes/campaign/Level7";
import Level8 from "../scenes/campaign/Level8";

export default function loadScenes() {
  // Add Scenes
  k.scene("Hello-World-EX", HelloWorld);
  k.scene("kMatter-Test", kMatterTest);
  k.scene("Jillian-Test-Scene", Jilian);
  k.scene("AvaC", Ava);
  k.scene("kLdtkScene", kLdtkScene);
  k.scene("UGCLoader", UGCLoader);
  k.scene("TopDown", TopDown);
  k.scene("Empty", Empty);
  // Add Campaign Levels
  k.scene("Level1", Level1);
  k.scene("Level2", Level2);
  k.scene("Level3", Level3);
  k.scene("Level4", Level4);
  k.scene("Level5", Level5);
  k.scene("Level6", Level6);
  k.scene("Level7", Level7);
  k.scene("Level8", Level8);
  //k.go('Hello-World-EX'); // This is a template scene
  //
  //k.go("kMatter-Test"); // This is a physics (matter) template scene
  //
  //k.go("kLdtkScene");
  //
  //k.go('Jillian-Test-Scene') // This is a scene made by my friend that doesnt know how to program
  //
  //k.go("AvaC"); // My Sister wrote this "obby"
  //
  //k.go("UGCLoader"); UGC Loader
}
