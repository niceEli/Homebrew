import { load } from "js-toml";
import k from "./kaplay";

let tomlData;
export let gameInfo;

await fetch("./gameInfo.toml")
  .then((response) => response.text())
  .then((data) => {
    tomlData = data;
    gameInfo = load(tomlData);
  });

export default gameInfo;

globalThis.gameInfo = gameInfo;
