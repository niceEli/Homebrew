import k from '../kaboom'
import Matter from 'matter-js'

export default function matterCircle (engine, options = {}) {
    return{
        add(){
            const { x, y } = this.pos
            const { radius } = this
            this.body = Matter.Bodies.circle(x, y, radius, options)
            Matter.Composite.add(engine.world, this.body)
        },
        update(){
            if (!this.body){
                return
            }
            this.pos.x = this.body.position.x
            this.pos.y = this.body.position.y
            this.angle = this.body.angle * (180/Math.PI)
        }
    }
}