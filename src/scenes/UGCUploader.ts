import k from "../kaboom";

export default async function UGCUploader() {
  k.setBackground(k.YELLOW);
  const level = sessionStorage.getItem("UGCLevelData");
  k.debug.log("YOU BEAT THE LEVEL");
  console.log(level);
}
