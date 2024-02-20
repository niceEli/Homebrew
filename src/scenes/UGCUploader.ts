import k from "../kaboom";
import * as gameInfo from "../gameInfo.json";

export default async function UGCUploader() {
  k.setBackground(k.YELLOW);
  const level = sessionStorage.getItem(gameInfo.internalName + "_UGCLevelData");
  k.debug.log("YOU BEAT THE LEVEL");
  console.log(level);
}
