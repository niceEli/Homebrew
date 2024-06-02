import { SceneDef } from "kaplay";
import k from "../kaplay";
import * as IMC from "../Controls/INPUT_movement";
import gameInfo from "../gameInfo";
import db from "../indexedDB";

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
        db.storage.put({ value: String(deathScore), key: "score" }, "score");
        kEndSongs();
        k.go("scene");
      }
    },
  };
}
