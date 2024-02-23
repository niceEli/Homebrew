import k from "../kaboom";
import * as IMC from "../Controls/INPUT_movement";

export default function kCamera(
  useCam: boolean = true,
  CamPos: { cx: number; cy: number },
  levelSize: number,
  grid: number[]
) {
  return {
    add() {
      if (useCam) {
        k.camPos(this.pos);
      } else {
        if (CamPos != null) {
          let x = CamPos.cx - grid[0];
          let y = CamPos.cy - grid[1];
          k.camPos(
            this.pos.x + x * 16 * levelSize,
            this.pos.y + y * 16 * levelSize
          );
        }
      }
    },
    update() {
      if (useCam) {
        k.camPos(
          k.lerp(
            k.camPos(),
            k.vec2(IMC.looking().x + this.pos.x, IMC.looking().y + this.pos.y),
            0.025 * 144 * k.dt()
          )
        );
        /*k.tween(
          k.camPos(),
          k.vec2(IMC.looking().x + this.pos.x, IMC.looking().y + this.pos.y),
          0.5,
          (p) => k.camPos(p),
        );*/
      }
    },
  };
}
