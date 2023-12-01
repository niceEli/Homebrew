import k from "../kaboom";
import Matter from "matter-js";

export default function matterRect(engine, options = {}, size?) {
  return {
    add() {
      const { x = size.x, y = size.y } = this.pos;
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
