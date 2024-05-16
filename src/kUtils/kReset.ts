import { SceneDef } from "kaboom-beta";
import k from "../kaboom";
import * as IMC from "../Controls/INPUT_movement";
import gameInfo from "../gameInfo";

export default function kReset(
  currentScene: SceneDef,
  deathScore: number,
  kEndSongs: any
) {
  return {
    add() {
      k.scene("scene", currentScene);
    },
    update() {
      if (IMC.reseting()) {
        localStorage.setItem(
          gameInfo.internalName + "_score",
          String(deathScore)
        );
        kEndSongs();
        k.go("scene");
      }
    },
  };
}
