import kaboom from "kaboom-beta";
import Matter, { IBodyDefinition } from "matter-js";
import k from "../kaboom";

export default function matterCircle(
  engine: any,
  options?: IBodyDefinition,
  rad?,
  isStatic = false
) {
  var body: Matter.Body;
  let prevPos = k.vec2();
  return {
    add() {
      const { x, y } = this.pos;
      const { radius = rad } = this;
      body = Matter.Bodies.circle(x, y, radius, options);
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
      if (isStatic) {
        Matter.Body.setPosition(body, { x: this.pos.x, y: this.pos.y });
        Matter.Body.setVelocity(body, { x: 0, y: 0 });
        //body.angle = this.angle / (180 / Math.PI);
      } else {
        this.pos.x = body.position.x;
        this.pos.y = body.position.y;
        this.angle = body.angle * (180 / Math.PI);
      }
    },
    destroy() {
      Matter.Composite.remove(engine.world, body);
    },
  };
}
