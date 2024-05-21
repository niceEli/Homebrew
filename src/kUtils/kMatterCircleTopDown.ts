import * as IMC from "../Controls/INPUT_movement";
import k from "../kaplay";
import Matter, { IBodyDefinition, Vector } from "matter-js";
import { BrowserWindow } from "electron";

export default function PlayerPawnCircleTopDown(
  engine: Matter.Engine,
  options?: IBodyDefinition,
  rad?: number,
  scaleOPlayer?: Vector,
  multiplier: number = 1,
  rotate: boolean = false
) {
  let isDashable: boolean = true;
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
      for (let i = 0; i < engine.world.bodies.length; i++) {
        const element = engine.world.bodies[i];
        const collision = Matter.Collision.collides(body, element, null);
        if (collision != null && collision.bodyA != collision.bodyB) {
          if (Math.round(collision.normal.y) === -1) {
            collisions++;
          }
        }
      }

      this.pos.x = body.position.x;
      this.pos.y = body.position.y;
      if (rotate) {
        this.angle = body.angle * (180 / Math.PI);
      }
      Matter.Body.setVelocity(body, {
        x: IMC.movementTD().x * multiplier * 3.5 * scaleOPlayer.x,
        y:
          IMC.movementTD().y * multiplier * 3.5 * scaleOPlayer.y -
          engine.gravity.y * k.dt() * 16.735,
      });
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
