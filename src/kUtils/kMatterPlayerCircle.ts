import { Vec2 } from "kaboom";
import k from "../kaboom";
import Matter, { Vector } from "matter-js";

export default function PlayerPawnCircle(
  engine: any,
  options = {},
  rad?: number,
  scaleOPlayer?: Vector,
  rotate: boolean = false
) {
  var isDashable: boolean = true;
  return {
    add() {
      const { x, y } = this.pos;
      var { radius = rad } = this;
      this.body = Matter.Bodies.circle(x, y, radius, options);
      Matter.Composite.add(engine.world, this.body);
    },
    update() {
      if (!this.body) {
        return;
      }
      let collisions = 0;

      this.body.position.y += 10;
      this.body.radius -= 3;
      for (let i = 0; i < engine.world.bodies.length; i++) {
        const element = engine.world.bodies[i];
        const collision = Matter.Collision.collides(this.body, element, null);
        if (collision != null && collision.bodyA != collision.bodyB) {
          collisions++;
        }
      }
      this.body.position.y -= 10;
      this.body.radius += 3;

      this.pos.x = this.body.position.x;
      this.pos.y = this.body.position.y;
      if (rotate) {
        this.angle = this.body.angle * (180 / Math.PI);
      }

      if (!rotate) {
        let vel = Matter.Body.getVelocity(this.body);
        if (Math.round(vel.x) < 0) {
          this.scale = k.vec2(-scaleOPlayer.x, scaleOPlayer.y);
        } else if (Math.round(vel.x) > 0) {
          this.scale = scaleOPlayer;
        }
      }

      if (collisions !== 0) {
        isDashable = true;
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
      if (k.isKeyPressed("up") || k.isKeyPressed("w")) {
        if (collisions != 0) {
          let Vel = Matter.Vector.add(
            Matter.Body.getVelocity(this.body),
            Matter.Vector.create(0, -9)
          );
          Matter.Body.setVelocity(this.body, Vel);
        }
      }
      if (k.isKeyPressed("space") && isDashable) {
        isDashable = false;
        if (
          (k.isKeyDown("right") || k.isKeyDown("d")) &&
          !(k.isKeyDown("left") || k.isKeyDown("a"))
        ) {
          if (collisions != 0) {
            var Vel = Matter.Vector.add(
              Matter.Body.getVelocity(this.body),
              Matter.Vector.create(8, 0)
            );
          } else {
            var Vel = Matter.Vector.add(
              Matter.Body.getVelocity(this.body),
              Matter.Vector.create(8, -6)
            );
          }
          Matter.Body.setVelocity(this.body, Vel);
        }
        if (
          (k.isKeyDown("left") || k.isKeyDown("a")) &&
          !(k.isKeyDown("right") || k.isKeyDown("d"))
        ) {
          if (collisions != 0) {
            var Vel = Matter.Vector.add(
              Matter.Body.getVelocity(this.body),
              Matter.Vector.create(-8, 0)
            );
          } else {
            var Vel = Matter.Vector.add(
              Matter.Body.getVelocity(this.body),
              Matter.Vector.create(-8, -6)
            );
          }
          Matter.Body.setVelocity(this.body, Vel);
        }
      }
    },
  };
}
