import { SceneDef } from "kaboom";
import k from "../kaboom";

export default function kReset(currentScene: SceneDef) {
  return {
    add() {
      k.scene("scene", currentScene);
    },
    update() {
      if (k.isKeyPressed("r")) {
        k.go("scene");
      }
    },
  };
}
