import k from "../kaboom";
import * as gameInfo from "../gameInfo.json";

export default async function UGCUploader() {
  k.setBackground(160, 234, 222);
  const level = sessionStorage.getItem(gameInfo.internalName + "_UGCLevelData");
  let hbm = k.play("mus/homeBrew");
  hbm.loop = true;
  hbm.speed = 1.2;
  console.log(level);
  const ybtl = k.add([
    k.text("You Beat The Level!", { size: 64, font: "Shantell_Sans" }),
    k.color(29, 38, 59),
    k.pos(20, 20),
  ]);
}
