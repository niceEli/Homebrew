import { SceneDef } from "kaboom";
import k from "../kaboom";
import * as IMC from "../Controls/INPUT_movement";
import gameInfo from "../gameInfo";

export default function kReset(currentScene: SceneDef, deathScore: number) {
  return {
    add() {
      k.scene("scene", currentScene);
    },
    update() {
      if (IMC.reseting()) {
        localStorage.setItem(gameInfo.internalName + "_score", String(deathScore));
        k.go("scene");
      }
    },
  };
}
