import k from "../kaboom";

export default function HelloWorld() {
  // Actors
  var RB = k.add([
    k.pos(k.center()),
    k.anchor("center"),
    k.rect(32, 32),
    k.color(255, 0, 0),
    k.rotate(0),
  ]);

  // Kaboom When Mouse Down And Moving
  // Also moves obj RB to mouse position when mouse is moving
  k.onMouseMove(() => {
    RB.pos = k.mousePos();
    if (k.isMouseDown()) {
      k.addKaboom(k.mousePos());
    }
  });
}
