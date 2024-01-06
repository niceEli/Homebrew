import kaboom from "kaboom";
import flexUIPlugin from "kaboom-flex-ui";

export const k = kaboom({
  background: [255, 255, 255],
  plugins: [flexUIPlugin],
  font: "sans-serif",
});

export default k;
