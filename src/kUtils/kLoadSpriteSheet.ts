import k from "../kaplay";
import gameInfo from "../gameInfo";

export default async function loadSpritesSheet() {
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
    let spr = await k.loadSprite("MainMenuBG", gameInfo["TitleBackground"]);
    globalThis.titleWidth = spr.width;
    globalThis.titleHeight = spr.height;
  } else {
    let spr = await k.loadSprite("MainMenuBG", "greenGrad.jpg");
    globalThis.titleWidth = spr.width;
    globalThis.titleHeight = spr.height;
  }

  k.loadFont("Jetbrains", "jetbrains.ttf");
  k.loadFont("Shantell_Sans", "Shantell_Sans.ttf");
  k.loadFont("Keedy_Sans", "Keedy_Sans.ttf");
}
