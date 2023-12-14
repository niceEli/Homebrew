import { Vec2 } from "kaboom";
import k from "../kaboom";
import Matter, { IChamferableBodyDefinition } from "matter-js";

export default function matterRect(
  engine,
  options: IChamferableBodyDefinition,
  size?
) {
  return {
    add() {
      const { x, y } = this.pos;
      const { width, height } = this;
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
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
      this.angle = this.body.angle * (180 / Math.PI);
    },
  };
}

export function matterRect4Sprites(
  engine,
  options: IChamferableBodyDefinition,
  size?: Vec2
) {
  return {
    add() {
      const { x, y } = this.pos;
      const width = size.x;
      const height = size.y;
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
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
      this.angle = this.body.angle * (180 / Math.PI);
    },
  };
}
