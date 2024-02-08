import kaboom from "kaboom";
import flexUIPlugin from "kaboom-flex-ui";

export const k = kaboom({
  background: [255, 255, 255],
  plugins: [flexUIPlugin],
  font: "sans-serif",
  canvas: document.querySelector("#kaboomGLCanvas")
});

export default k;
