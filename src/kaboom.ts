import kaboom from "kaboom";
import flexUIPlugin from "kaboom-flex-ui";

let canvas: HTMLCanvasElement = document.querySelector("#kaboomGLCanvas");

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
