export function hexToRgb(hex) {
  let hexd = hex.substring(1);
  var bigint = parseInt(hexd, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return { r, g, b };
}
