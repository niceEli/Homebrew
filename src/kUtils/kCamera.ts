import k from "../kaboom";

export default function kCamera(useCam: boolean = true) {
  return {
    add() {
      if (useCam) {
        k.camPos(this.pos);
      }
    },
    update() {
      if (useCam) {
        k.tween(k.camPos(), this.pos, 0.5, (p) => k.camPos(p));
      }
    },
  };
}
