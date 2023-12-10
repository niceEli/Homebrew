import k from "../kaboom";

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
}
