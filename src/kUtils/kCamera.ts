import k from "../kaboom";

export default function kCamera() {
  return {
    update() {
      k.tween(k.camPos(), this.pos, 0.5, (p) => k.camPos(p));
    },
  };
}
