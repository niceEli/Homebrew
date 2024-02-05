import k from "../kaboom";

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
    k.isKeyPressed("space") ||
    k.isGamepadButtonPressed("lshoulder") ||
    k.isGamepadButtonPressed("rshoulder") ||
    k.isGamepadButtonPressed("ltrigger") ||
    k.isGamepadButtonPressed("rtrigger")
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
