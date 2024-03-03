import k from "../kaboom";
import * as gameInfo from "../gameInfo.json";

export default function loadSpritesSheet() {
  const spriteSheetData = {};

  for (let i = 0; i < 625; i++) {
    spriteSheetData["SpriteSheet" + i] = {
      x: (i % 25) * 16,
      y: Math.floor(i / 25) * 16,
      width: 16,
      height: 16,
    };
  }

  k.loadSpriteAtlas("spriteSheet16.png", spriteSheetData);

  if (
    gameInfo["TitleBackground"] != "" &&
    gameInfo["TitleBackground"] != undefined &&
    gameInfo["TitleBackground"] != null
  ) {
    k.loadSprite("MainMenuBG", gameInfo["TitleBackground"]);
  } else {
    k.loadSprite("MainMenuBG", "greenGrad.jpg");
  }

  k.loadFont("Jetbrains", "jetbrains.ttf");
  k.loadFont("Shantell_Sans", "Shantell_Sans.ttf");
  k.loadFont("Keedy_Sans", "Keedy_Sans.ttf");
}
