import k from "../kaboom";
import Matter from "matter-js";

export default function PlayerPawnCircle(
  engine,
  options = {},
  rad?,
  rotate = false
) {
  return {
    add() {
      const { x, y } = this.pos;
      const { radius = rad } = this;
      this.body = Matter.Bodies.circle(x, y, radius, options);
      Matter.Composite.add(engine.world, this.body);
    },
    update() {
      if (!this.body) {
        return;
      }
      let collisions = 0;
      for (let i = 0; i < engine.world.bodies.length; i++) {
        const element = engine.world.bodies[i];
        const collision = Matter.Collision.collides(this.body, element, null);
        if (collision != null && collision.bodyA != collision.bodyB) {
          collisions++;
        }
      }
      this.pos.x = this.body.position.x;
      this.pos.y = this.body.position.y;
      if (rotate) {
        this.angle = this.body.angle * (180 / Math.PI);
      }

      if (k.isKeyDown("left") || k.isKeyDown("a")) {
        Matter.Body.applyForce(
          this.body,
          this.body.position,
          k.vec2(-0.001, 0)
        );
      }
      if (k.isKeyDown("right") || k.isKeyDown("d")) {
        Matter.Body.applyForce(this.body, this.body.position, k.vec2(0.001, 0));
      }
      if (
        k.isKeyPressed("up") ||
        k.isKeyPressed("space") ||
        k.isKeyPressed("w")
      ) {
        if (collisions != 0) {
          var Vel = Matter.Vector.add(
            Matter.Body.getVelocity(this.body),
            Matter.Vector.create(0, -9)
          );
          Matter.Body.setVelocity(this.body, Vel);
        }
      }
    },
  };
}
