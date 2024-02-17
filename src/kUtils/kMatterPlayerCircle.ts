import * as IMC from "../Controls/INPUT_movement";
import k from "../kaboom";
import Matter, { IBodyDefinition, Vector } from "matter-js";

export default function PlayerPawnCircle(
  engine: any,
  options?: IBodyDefinition,
  rad?: number,
  scaleOPlayer?: Vector,
  multiplier: number = 1,
  rotate: boolean = false
) {
  let isDashable: boolean = true;
  let CTTime: number = 10;
  let body: Matter.Body;
  let prevPos = k.vec2();
  return {
    add() {
      const { x, y } = this.pos;
      let { radius = rad } = this;
      body = Matter.Bodies.circle(x, y, radius, options);
      Matter.Composite.add(engine.world, body);
    },
    update() {
      if (!body) {
        return;
      }
      let collisions = 0;
      if (prevPos !== this.pos) {
        Matter.Body.setPosition(body, this.pos);
      }
      prevPos = this.pos;
      body.position.y += 10;
      body.circleRadius -= 3;
      for (let i = 0; i < engine.world.bodies.length; i++) {
        const element = engine.world.bodies[i];
        const collision = Matter.Collision.collides(body, element, null);
        if (collision != null && collision.bodyA != collision.bodyB) {
          if (Math.round(collision.normal.y) === -1) {
            collisions++;
          }
        }
      }
      body.position.y -= 10;
      body.circleRadius += 3;

      this.pos.x = body.position.x;
      this.pos.y = body.position.y;
      if (rotate) {
        this.angle = body.angle * (180 / Math.PI);
      }

      if (!rotate) {
        let vel = Matter.Body.getVelocity(body);
        if (Math.round(vel.x) < 0) {
          this.scale = k.vec2(-scaleOPlayer.x, scaleOPlayer.y);
        } else if (Math.round(vel.x) > 0) {
          this.scale = scaleOPlayer;
        }
      }
      if (CTTime > 0) {
        CTTime = CTTime - k.dt();
      } else if (CTTime <= 0) {
        CTTime = 0;
      }

      if (collisions !== 0) {
        CTTime = 0.1618;
        isDashable = true;
      }

      if (IMC.movement() === -1 && Matter.Body.getVelocity(body).x >= -13) {
        Matter.Body.applyForce(
          body,
          body.position,
          k.vec2(-0.001 * multiplier, 0)
        );
      }
      if (IMC.movement() === 1 && Matter.Body.getVelocity(body).x <= 13) {
        Matter.Body.applyForce(
          body,
          body.position,
          k.vec2(0.001 * multiplier, 0)
        );
      }
      if (IMC.movement() === 0 && collisions !== 0) {
        Matter.Body.setVelocity(
          body,
          k.vec2(0, Matter.Body.getVelocity(body).y)
        );
      }
      if (IMC.jumping()) {
        if (CTTime > 0) {
          let Vel = Matter.Vector.add(
            Matter.Body.getVelocity(body),
            Matter.Vector.create(
              0,
              -Matter.Body.getVelocity(body).y + -9 * multiplier
            )
          );
          Matter.Body.setVelocity(body, Vel);
          CTTime = 0;
        }
      }
      if (IMC.dashing() && isDashable) {
        isDashable = false;
        IMC.rumble(100);
        if (IMC.movement() === 1) {
          let Vel: Matter.Vector;
          if (CTTime > 0) {
            Vel = Matter.Vector.add(
              Matter.Body.getVelocity(body),
              Matter.Vector.create(8 * multiplier, 0)
            );
          } else {
            if (Matter.Body.getVelocity(body).y <= 0) {
              Vel = Matter.Vector.add(
                Matter.Body.getVelocity(body),
                Matter.Vector.create(8 * multiplier, -6 * multiplier)
              );
            } else {
              Vel = Matter.Vector.add(
                Matter.Body.getVelocity(body),
                Matter.Vector.create(
                  8 * multiplier,
                  -Matter.Body.getVelocity(body).y + -6 * multiplier
                )
              );
            }
          }
          Matter.Body.setVelocity(body, Vel);
        }
        if (IMC.movement() === -1) {
          let Vel: Matter.Vector;
          if (CTTime > 0) {
            Vel = Matter.Vector.add(
              Matter.Body.getVelocity(body),
              Matter.Vector.create(-8 * multiplier, 0)
            );
          } else {
            if (Matter.Body.getVelocity(body).y <= 0) {
              Vel = Matter.Vector.add(
                Matter.Body.getVelocity(body),
                Matter.Vector.create(-8 * multiplier, -6 * multiplier)
              );
            } else {
              Vel = Matter.Vector.add(
                Matter.Body.getVelocity(body),
                Matter.Vector.create(
                  -8 * multiplier,
                  -Matter.Body.getVelocity(body).y + -6 * multiplier
                )
              );
            }
          }
          Matter.Body.setVelocity(body, Vel);
        }
      }
    },
    destroy() {
      Matter.Composite.remove(engine.world, body);
    },
    set velocity(vel: Vector) {
      Matter.Body.setVelocity(body, vel);
    },

    get velocity(): Vector {
      return Matter.Body.getVelocity(body);
    },

    set isDashable(v: boolean) {
      isDashable = v;
    },
    get isDashable() {
      return isDashable;
    },
  };
}
