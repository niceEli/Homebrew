import k from "../kaboom";
import * as gameInfo from "../gameInfo.json";

export default function mainMenu() {
  /*https://coolors.co/157f1f-4cb963-a0eade-5c6784-1d263b*/
  k.setBackground(76, 185, 99);
  k.camScale(1, 1);
  const gameText = k.add([
    k.text(gameInfo.friendlyName, { size: 64, font: "Shantell_Sans" }),
    k.color(29, 38, 59),
    k.pos(20, 20),
  ]);

  const playButton = k.add([
    k.anchor("botleft"),
    k.pos(),
    k.rect(256, 64),
    k.area(),
    {
      update() {
        this.pos = k.vec2(20, k.height() - 20);
      },
    },
    "Playbutton",
  ]);

  playButton.add([
    k.text("Play", { size: 64, font: "Jetbrains" }),
    k.color(29, 38, 59),
    k.pos(128, -32),
    k.anchor("center"),
  ]);

  const newGameButton = k.add([
    k.anchor("botleft"),
    k.pos(),
    k.rect(256, 64),
    k.area(),
    {
      update() {
        this.pos = k.vec2(20, k.height() - 104);
      },
    },
    "newGameButton",
  ]);

  newGameButton.add([
    k.text("New Game", { size: 50, font: "Jetbrains" }),
    k.color(29, 38, 59),
    k.pos(128, -32),
    k.anchor("center"),
  ]);

  const ugcButton = k.add([
    k.anchor("botleft"),
    k.pos(),
    k.rect(256, 64),
    k.area(),
    {
      update() {
        this.pos = k.vec2(20, k.height() - 188);
      },
    },
    "ugcButton",
  ]);

  ugcButton.add([
    k.text("Edit", { size: 64, font: "Jetbrains" }),
    k.color(29, 38, 59),
    k.pos(128, -32),
    k.anchor("center"),
  ]);

  const verText = k.add([
    k.text(gameInfo.internalName + "_" + gameInfo.version, { size: 32 }),
    k.color(29, 38, 59),
    k.anchor("botright"),
    k.pos(20, 20),
    {
      update() {
        this.pos = k.vec2(k.width() - 20, k.height() - 20);
      },
    },
  ]);

  k.onClick("newGameButton", () => play());
  k.onClick("Playbutton", () => continueGame());
  k.onClick("ugcButton", () => playUGC());
}

function play() {
  localStorage.setItem(gameInfo.internalName + "_score", "0");
  k.go(gameInfo.compStartLevel);
}
function continueGame() {
  if (localStorage.getItem(gameInfo.internalName + "_cLevel") == null) {
    localStorage.setItem(gameInfo.internalName + "_score", "0");
    k.go(gameInfo.compStartLevel);
  } else {
    k.go(localStorage.getItem(gameInfo.internalName + "_cLevel"));
  }
}
function playUGC() {
  k.go("UGCLoader");
}
