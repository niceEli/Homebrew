import gameInfo from "../gameInfo";
import kDownloadToVar from "../kUtils/kDownloadToVar";
import k from "../kaboom";

export default async function UGCJSInit() {
  const levelLocation = gameInfo["UGCLevel"];
  let levelData;
  if (globalThis["UGCJSInit"] === undefined) {
    levelData = (await kDownloadToVar(levelLocation)).data;
  } else {
    levelData = globalThis["UGCJSInit"];
  }
  const level = new Function(
    "kaboomContext",
    "gameInfoCTX",
    `
      return (async function() {
        ${levelData}
      })();
    `
  );
  await level(k, gameInfo);
  k.go("UGC_Init");
}
