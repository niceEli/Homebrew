import kaboom from "kaplay";

let canvas: HTMLCanvasElement = document.querySelector("#kaplayGLCanvas");

export const k = kaboom({
  background: [0, 0, 0],
  font: "sans-serif",
  canvas: canvas,
  crisp: true,
  maxFPS: 0,
  debug: true,
});

export default k;

globalThis.k = k;
