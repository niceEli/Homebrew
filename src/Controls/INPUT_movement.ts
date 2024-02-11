import k from "../kaboom";
import { Vec2 } from "kaboom";
import { Vector } from "matter-js";

export function movement(): number {
  let value: number = 0;
  if (
    k.isKeyDown("right") ||
    k.isKeyDown("d") ||
    k.getGamepadStick("left").x >= 0.5 ||
    k.isGamepadButtonDown("dpad-right")
  ) {
    value += 1;
  }
  if (
    k.isKeyDown("left") ||
    k.isKeyDown("a") ||
    k.getGamepadStick("left").x <= -0.5 ||
    k.isGamepadButtonDown("dpad-left")
  ) {
    value -= 1;
  }

  return value;
}

export function movementY(): number {
  let value: number = 0;
  if (
    k.isKeyDown("up") ||
    k.isKeyDown("w") ||
    k.getGamepadStick("left").y <= -0.5 ||
    k.isGamepadButtonDown("dpad-up")
  ) {
    value -= 1;
  }
  if (
    k.isKeyDown("down") ||
    k.isKeyDown("s") ||
    k.getGamepadStick("left").y >= 0.5 ||
    k.isGamepadButtonDown("dpad-down")
  ) {
    value += 1;
  }

  return value;
}

export function jumping(): boolean {
  let value: boolean = false;
  if (
    k.isKeyPressed("up") ||
    k.isKeyPressed("w") ||
    k.isGamepadButtonPressed("south") ||
    k.isGamepadButtonPressed("north") ||
    k.isGamepadButtonPressed("west") ||
    k.isGamepadButtonPressed("east")
  ) {
    value = true;
  }

  return value;
}

export function dashing(): boolean {
  let value: boolean = false;
  if (
    (k.isKeyPressed("space") ||
      k.isGamepadButtonPressed("lshoulder") ||
      k.isGamepadButtonPressed("rshoulder") ||
      k.isGamepadButtonPressed("ltrigger") ||
      k.isGamepadButtonPressed("rtrigger")) &&
    movement() !== 0
  ) {
    value = true;
  }

  return value;
}

export function pausing(): boolean {
  let value: boolean = false;
  if (k.isKeyPressed("escape") || k.isGamepadButtonPressed("start")) {
    value = true;
  }

  return value;
}

export function reseting(): boolean {
  let value: boolean = false;
  if (k.isKeyPressed("r") || k.isGamepadButtonPressed("select")) {
    value = true;
  }

  return value;
}

export function looking(): Vec2 {
  const kVec = k.getGamepadStick("right");
  const stick: Vector = { x: kVec.x, y: kVec.y };
  let normalVec = Vector.magnitude(stick);
  if (normalVec <= 0.4) {
    stick.x = 0;
    stick.y = 0;
    normalVec = Vector.magnitude(stick);
  }
  if (normalVec == 0) {
    let vec: Vector = { x: 0, y: 0 };
    if (k.isKeyDown("i")) {
      vec.y -= 1;
    }
    if (k.isKeyDown("k")) {
      vec.y += 1;
    }
    if (k.isKeyDown("j")) {
      vec.x -= 1;
    }
    if (k.isKeyDown("l")) {
      vec.x += 1;
    }
    const nVecCache = Vector.normalise(vec);
    const nVec = {
      x: nVecCache.x * 300,
      y: nVecCache.y * 300,
    };
    return k.vec2(nVec.x, nVec.y);
  } else {
    return k.vec2(stick.x * 300, stick.y * 300);
  }
}

export function rumble(time: number) {
  try {
    // Kaboom gamepad
    const gamepadIndex = k.getGamepads()[0].index;
    // Browser gamepad
    const gamepad = navigator.getGamepads()[gamepadIndex];
    // Then use the vibration api
    gamepad.vibrationActuator.playEffect("dual-rumble", {
      startDelay: 0,
      duration: time,
      weakMagnitude: 1.0,
      strongMagnitude: 1.0,
    });
  } catch (error) {}
}
