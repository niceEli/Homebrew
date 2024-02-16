import k from "../kaboom";

export default function Jilian() {
  sessionStorage.setItem("isUGC", "false");
  k.setBackground(k.WHITE);
  // Actors
  var RB = k.add([
    k.pos(k.center()),
    k.anchor("center"),
    k.rect(32, 32),
    k.color(255, 0, 0),
    k.rotate(0),
  ]);

  var RB2 = k.add([
    k.pos(k.center()),
    //k.anchor('center'),
    //k.rect(32,32),
    //k.color(255,0,0),
    k.rotate(0),
  ]);
  var RB3 = k.add([
    k.pos(k.center()),
    //k.anchor('center'),
    //k.rect(32,32),
    //k.color(255,0,0),
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

  k.onUpdate(() => {
    k.tween(RB2.pos, RB.pos, 0.5, (p) => (RB2.pos = p), k.easings.linear);
    k.addKaboom(RB2.pos);
    k.tween(RB3.pos, RB2.pos, 0.5, (p) => (RB3.pos = p), k.easings.linear);
    k.addKaboom(RB3.pos);
  });
}
