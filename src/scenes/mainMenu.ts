import k from "../kaboom";
import * as gameInfo from "../gameInfo.json";
import * as IMC from "../Controls/INPUT_movement";
import { Asset, AudioPlay, SpriteData } from "kaboom";

let rainsounds: AudioPlay;

export default function mainMenu() {
  /*https://coolors.co/157f1f-4cb963-a0eade-5c6784-1d263b*/
  k.setBackground(k.BLACK);
  let menuBG = k.getSprite("MainMenuBG");
  let asset = menuBG["data"];
  k.camScale(1, 1);
  k.add([
    k.sprite("MainMenuBG"),
    k.fixed(),
    k.pos(0, 0),
    k.anchor("topleft"),
    k.z(-Infinity),
    k.area(),
    k.scale(1, 1),
    {
      update() {
        this.scale = k.vec2(k.width() / asset.width, k.height() / asset.height);
      },
    },
  ]);
  rainsounds = k.play("mus/rain");
  rainsounds.volume = 0.3;
  let gameName: string;
  if (
    gameInfo["friendlyName"] !== null &&
    gameInfo["friendlyName"] !== undefined &&
    gameInfo["friendlyName"] !== ""
  ) {
    gameName = gameInfo["friendlyName"];
  } else {
    gameName = gameInfo["internalName"];
  }
  const gameText = k.add([
    k.text(gameName, { size: 80, font: "Keedy_Sans" }),
    k.color(29, 38, 59),
    k.pos(20, 20),
  ]);

  const playButton = k.add([
    k.anchor("botleft"),
    k.pos(),
    k.rect(256, 64),
    k.area(),
    k.color(),
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
    k.color(),
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

  let ugcButton;
  if (
    gameInfo["UGCApi"] !== null &&
    gameInfo["UGCApi"] !== undefined &&
    gameInfo["UGCApi"] !== ""
  ) {
    ugcButton = k.add([
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
  }

  const verText = k.add([
    k.text(gameInfo["internalName"] + "_" + gameInfo["version"], { size: 32 }),
    k.color(29, 38, 59),
    k.anchor("botright"),
    k.pos(20, 20),
    {
      update() {
        this.pos = k.vec2(k.width() - 20, k.height() - 20);
      },
    },
  ]);
  let currentPos: number;
  currentPos = -6;
  k.onUpdate(() => {
    if (currentPos !== -6) {
      currentPos += IMC.Ui_Move();
      if (ugcButton != undefined) {
        currentPos = currentPos % 3;
      } else {
        currentPos = currentPos % 2;
      }

      if (currentPos < 0 && ugcButton != undefined) {
        currentPos = 2;
      } else if (currentPos < 0 && currentPos) {
        currentPos = 1;
      }
      let vals = [playButton, newGameButton, ugcButton];
      for (let i = 0; i < vals.length; i++) {
        const element = vals[i];
        if (element != undefined) {
          element.color = k.WHITE;
          if (i == currentPos) {
            element.color = k.CYAN;
            if (IMC.Ui_Select()) {
              switch (currentPos) {
                case 0:
                  continueGame();
                  break;
                case 1:
                  play();
                  break;
                case 2:
                  playUGC();
                  break;
                default:
                  break;
              }
            }
          }
        }
      }
    } else {
      if (IMC.Ui_Move()) {
        currentPos = 0;
      }
    }
  });

  k.onClick("newGameButton", () => play());
  k.onClick("Playbutton", () => continueGame());
  k.onClick("ugcButton", () => playUGC());
}

async function play() {
  rainsounds.stop();
  localStorage.setItem(gameInfo["internalName"] + "_score", "0");
  k.go(gameInfo["compStartLevel"]);
}
function continueGame() {
  rainsounds.stop();
  if (localStorage.getItem(gameInfo["internalName"] + "_cLevel") == null) {
    play();
  } else {
    k.go(localStorage.getItem(gameInfo["internalName"] + "_cLevel"));
  }
}
function playUGC() {
  rainsounds.stop();
  k.go("UGCLoader");
}
