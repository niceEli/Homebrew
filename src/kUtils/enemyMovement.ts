import type { Comp, GameObj, Vec2 } from "kaplay-beta";
import k from "../kaplay";

export default function enemyMovement(
  startpos: Vec2,
  endPos: Vec2,
  moveTime: number,
  waitTime: number
) {
  let time: number = 0;
  let state: number = 0;
  let statePercent: number = 0;
  return {
    id: "enemyMovement",
    require: ["pos"],
    add() {},
    update() {
      time += k.dt();
      time = time % (moveTime * 2 + waitTime * 2);
      if (time < moveTime) {
        state = 0;
        statePercent = time / moveTime;
      } else if (time < moveTime + waitTime) {
        state = 1;
        statePercent = (time - moveTime) / waitTime;
      } else if (time < moveTime * 2 + waitTime) {
        state = 2;
        statePercent = (time - moveTime - waitTime) / moveTime;
      } else {
        state = 3;
        statePercent = (time - moveTime * 2 - waitTime) / waitTime;
      }
      if (state == 0) {
        this.pos = k.lerp(startpos, endPos, statePercent);
      }
      if (state == 2) {
        this.pos = k.lerp(endPos, startpos, statePercent);
      }
    },
  } satisfies Comp & ThisType<GameObj> & Record<string, any>;
  // To fully type `this` inside component you will need to include your
  // required component ids respective Comp variants inside `GameObj<...>`
  // For example if you have: `require: [ "pos" ]` you will need to add
  // `PosComp` to `GameObj<...>`
}

export type EnemymovementComp = ReturnType<typeof enemyMovement>;
