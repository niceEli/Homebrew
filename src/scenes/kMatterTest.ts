import k from "../kaboom";
import Matter from "matter-js";
import matterRect from "../kUtils/kMatterRect";
import matterCircle from "../kUtils/kMatterCircle";
import PlayerPawnCircle from "../kUtils/kMatterPlayerCircle";
import gameInfo from "../gameInfo";

export default function kMatterTest() {
  sessionStorage.setItem(gameInfo.internalName + "_isUGC", "false");
  k.setBackground(k.WHITE);
  // Setup Engine
  const engine: any = Matter.Engine.create();
  Matter.Composite.create(engine);
  k.onUpdate(() => {
    Matter.Engine.update(engine, k.dt() * 1000);
  });

  // Load This Scene And Sprites
  k.loadSprite("RAD", "Radians.jpg");
  k.loadSprite("CTPlayer", "CTPlayer.png");

  k.scene("kMatterTest", kMatterTest);

  // Actors
  // This One Object is for the player
  var PlayerPawn = k.add([
    k.pos(k.center().x + 208, k.center().y + 342 - 16),
    k.anchor("center"),
    k.rotate(0),
    k.sprite("CTPlayer"),
    k.scale(4),
    k.z(2147483647),
    // Matter For Pawns
    PlayerPawnCircle(engine, {}, 16, k.vec2(4, 4)),
  ]);
  var RigidBody = k.add([
    k.pos(k.center().x, k.center().y),
    k.anchor("center"),
    k.rect(32, 32),
    k.color(255, 0, 0),
    k.rotate(0),
    // Matter For Rectangles
    matterRect(engine, { angle: 0.78539816 }),
  ]);
  var RigidBody2 = k.add([
    k.pos(k.center().x + 320, k.center().y + 278),
    k.anchor("center"),
    k.rect(32, 64),
    k.color(0, 128, 128),
    k.rotate(0),
    // Matter For Rectangles
    matterRect(engine, {}),
  ]);
  var RigidBodyC = k.add([
    k.pos(k.center().x, k.center().y - 40),
    k.anchor("center"),
    k.sprite("RAD"),
    k.rotate(0),
    k.scale(0.045),
    k.z(-2147483647),
    // Matter For Circles
    matterCircle(engine, {}, 16),
  ]);
  var RigidBodyRAD = k.add([
    k.pos(k.center().x, k.center().y - 64),
    k.anchor("center"),
    k.rotate(0),
    k.circle(16),
    k.color(255, 0, 0),
    // Matter For Circles
    matterCircle(engine, {}),
  ]);
  var PlatForm = k.add([
    k.pos(k.center().x - 64, k.center().y + 64),
    k.anchor("center"),
    k.rect(128, 32),
    k.color(0, 0, 0),
    k.rotate(0),
    // Matter For Rectangles
    matterRect(engine, { isStatic: true }),
  ]);
  var PlatForm2 = k.add([
    k.pos(k.center().x + 105, k.center().y + 128),
    k.anchor("center"),
    k.rect(128, 32),
    k.color(0, 0, 0),
    k.rotate(0),
    // Matter For Rectangles
    matterRect(engine, { isStatic: true }),
  ]);
  var PlatForm3 = k.add([
    k.pos(k.center().x, k.center().y + 256),
    k.anchor("center"),
    k.rect(256, 32),
    k.color(0, 0, 0),
    k.rotate(0),
    // Matter For Rectangles
    matterRect(engine, { isStatic: true, angle: 0.78539816 }),
  ]);
  var PlatForm4 = k.add([
    k.pos(k.center().x + 208, k.center().y + 342),
    k.anchor("center"),
    k.rect(256, 32),
    k.color(0, 0, 0),
    k.rotate(0),
    // Matter For Rectangles
    matterRect(engine, { isStatic: true }),
  ]);

  // This script makes the camera follow the square (it runs on update)
  k.onUpdate(() => {
    // k.camPos is the cameras vector 2 position
    // RigidBody.pos is the vector 2 position of the obj with variable RigidBody (Red square)
    k.tween(k.camPos(), PlayerPawn.pos, 0.5, (p) => k.camPos(p));

    // This code resets the scene if PlayerPawns position.y is above 1000 (the void) or the key R is pressed
    if (PlayerPawn.pos.y >= 1000 || k.isKeyPressed("r")) {
      k.go("kMatterTest");
    }
  });
}
