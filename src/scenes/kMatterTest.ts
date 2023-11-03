import k from '../kaboom'
import Matter from 'matter-js'
import matterRect from '../kMatter'

export default function kMatterTest () {
    // Setup Engine
    const engine = Matter.Engine.create()
    Matter.Composite.create(engine)
    k.onUpdate(() => {
        Matter.Engine.update(engine, k.dt() * 1000)
    })

    // Actors
    var RigidBody = k.add([
        k.pos(k.center().x, k.center().y),
        k.anchor('center'),
        k.rect(32,32),
        k.color(255,0,0),
        k.rotate(0),
        // Matter For Rectangles
        matterRect(engine)
    ])
    var PlatForm = k.add([
        k.pos(k.center().x - 64, k.center().y + 64),
        k.anchor('center'),
        k.rect(128,32),
        k.color(0,0,0),
        k.rotate(0),
        // Matter For Rectangles
        matterRect(engine, { isStatic: true})
    ])
    var PlatForm2 = k.add([
        k.pos(k.center().x + 105, k.center().y + 128),
        k.anchor('center'),
        k.rect(128,32),
        k.color(0,0,0),
        k.rotate(0),
        // Matter For Rectangles
        matterRect(engine, { isStatic: true})
    ])
}