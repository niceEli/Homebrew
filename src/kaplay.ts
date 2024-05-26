import kaboom from "kaplay";
import flexUIPlugin from "kaboom-flex-ui";

let canvas: HTMLCanvasElement = document.querySelector("#kaplayGLCanvas");

export const k = kaboom({
  background: [0, 0, 0],
  plugins: [flexUIPlugin],
  font: "sans-serif",
  canvas: canvas,
  crisp: true,
  maxFPS: 0,
  debug: true,
});

export default k;

globalThis.k = k;
