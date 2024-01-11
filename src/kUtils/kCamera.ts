import k from "../kaboom";

export default function kCamera(
  useCam: boolean = true,
  CamPos: { cx: number; cy: number },
  levelSize: number,
  grid
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
        k.tween(k.camPos(), this.pos, 0.5, (p) => k.camPos(p));
      }
    },
  };
}
