import { SceneDef } from "kaboom";
import k from "../kaboom";

export default function kReset(currentScene: SceneDef, deathScore: number) {
  return {
    add() {
      k.scene("scene", currentScene);
    },
    update() {
      if (k.isKeyPressed("r")) {
        sessionStorage.setItem("score", String(deathScore));
        k.go("scene");
      }
    },
  };
}
