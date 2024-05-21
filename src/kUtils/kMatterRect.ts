import { Vec2 } from "kaplay-beta";
import k from "../kaplay";
import Matter, { IChamferableBodyDefinition } from "matter-js";

export default function matterRect(
  engine,
  options?: IChamferableBodyDefinition,
  size?
) {
  var body: Matter.Body;
  let prevPos = k.vec2();
  return {
    add() {
      const { x, y } = this.pos;
      const { width, height } = this;
      body = Matter.Bodies.rectangle(x, y, width, height, options);
      Matter.Composite.add(engine.world, body);
    },
    update() {
      if (!body) {
        return;
      }
      if (prevPos !== this.pos) {
        Matter.Body.setPosition(body, this.pos);
      }
      prevPos = this.pos;
      let collisions = 0;
      for (let i = 0; i < engine.world.bodies.length; i++) {
        const element = engine.world.bodies[i];
        const collision = Matter.Collision.collides(body, element, null);
        if (collision != null && collision.bodyA != collision.bodyB) {
          collisions++;
        }
      }
      this.pos.x = body.position.x;
      this.pos.y = body.position.y;
      this.angle = body.angle * (180 / Math.PI);
    },
    destroy() {
      Matter.Composite.remove(engine.world, body);
    },
  };
}

export function matterRect4Sprites(
  engine,
  options?: IChamferableBodyDefinition,
  size?: Vec2
) {
  var body: Matter.Body;
  let prevPos = k.vec2();
  return {
    add() {
      const { x, y } = this.pos;
      const width = size.x;
      const height = size.y;
      body = Matter.Bodies.rectangle(x, y, width, height, options);
      Matter.Composite.add(engine.world, body);
    },
    update() {
      if (!body) {
        return;
      }
      if (prevPos !== this.pos) {
        Matter.Body.setPosition(body, this.pos);
      }
      prevPos = this.pos;
      let collisions = 0;
      for (let i = 0; i < engine.world.bodies.length; i++) {
        const element = engine.world.bodies[i];
        const collision = Matter.Collision.collides(body, element, null);
        if (collision != null && collision.bodyA != collision.bodyB) {
          collisions++;
        }
      }
      this.pos.x = body.position.x;
      this.pos.y = body.position.y;
      this.angle = body.angle * (180 / Math.PI);
    },
    destroy() {
      Matter.Composite.remove(engine.world, body);
    },
  };
}

export function matterRect4Static(engine, size?: Vec2) {
  var body: Matter.Body;
  return {
    add() {
      const { x, y } = this.pos;
      const width = size.x;
      const height = size.y;
      body = Matter.Bodies.rectangle(x, y, width, height, {
        isStatic: true,
      });
      Matter.Composite.add(engine.world, body);
    },
    update() {
      if (!body) {
        return;
      }
      Matter.Body.setPosition(body, { x: this.pos.x, y: this.pos.y });
      Matter.Body.setVelocity(body, { x: 0, y: 0 });
    },
    destroy() {
      Matter.Composite.remove(engine.world, body);
    },
  };
}
