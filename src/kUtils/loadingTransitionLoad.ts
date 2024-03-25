import k from "../kaboom";

k.loadShader(
  "transition",
  undefined,
  `
uniform vec2 u_resolution;
uniform float u_time;

vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
   vec4 origColor = def_frag();

   // Calculate the position of the pixel
   vec2 pixelPos = uv * u_resolution;

   // Calculate the size of the rectangle
   float squareSize = min(u_resolution.x, u_resolution.y) * 0.2; // The size of the rectangle is 20% of the smallest side of the screen

   // Calculate the number of rows and columns of the rectangle where the pixel is located
   int column = int(pixelPos.x / squareSize);
   int row = int(pixelPos.y / squareSize);

   // Calculate the center of the rectangle where the pixel is located
   vec2 squareCenter = vec2(float(column) * squareSize + squareSize * 0.5, float(row) * squareSize + squareSize * 0.5);

   // Calculate the size of the diamond (dynamically changes based on time and number of columns, but does not exceed the size of the rectangle)
   float diamondSize;
   if (u_time < 0.8) {
     diamondSize = min(squareSize, squareSize * (u_time - float(column) * 0.05) * 2.5);
   } else {
     diamondSize = min(squareSize, squareSize * (1.4 - (u_time - float(column) * 0.05)) * 2.5);
   }

   // Calculate the distance between the pixel position and the center of the diamond
   float distance = abs(pixelPos.x - squareCenter.x) + abs(pixelPos.y - squareCenter.y);

   // Check if the pixel is inside the diamond
   if (distance <= diamondSize) {
     // If inside the diamond, set the color to black
     return vec4(0.0, 0.0, 0.0, 1.0);
   }

   // If not inside the diamond, use original color
   return origColor;
}
`
);
