import k from '../kaboom'
import Matter from 'matter-js'
import matterRect from '../kMatter/kMatterRect'
import matterCircle from '../kMatter/kMatterCircle'

export default function kMatterTest () {
    // Setup Engine
    const engine = Matter.Engine.create()
    engine.enableSleeping = true
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
        matterRect(engine, { angle: 0.78539816 })
    ])
    var RigidBodyC = k.add([
        k.pos(k.center().x, k.center().y-40),
        k.anchor('center'),
        k.circle(16),
        k.color(255,0,0),
        k.rotate(0),
        // Matter For Rectangles
        matterCircle(engine)
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
    var PlatForm3 = k.add([
        k.pos(k.center().x, k.center().y + 256),
        k.anchor('center'),
        k.rect(256,32),
        k.color(0,0,0),
        k.rotate(0),
        // Matter For Rectangles
        matterRect(engine, { isStatic: true, angle: 0.78539816})
    ])
    var PlatForm4 = k.add([
        k.pos(k.center().x + 208, k.center().y + 341),
        k.anchor('center'),
        k.rect(256,32),
        k.color(0,0,0),
        k.rotate(0),
        // Matter For Rectangles
        matterRect(engine, { isStatic: true} )
    ])

    // This script makes the camera follow the square (it runs on update)
    k.onUpdate(() => {
        // k.camPos is the cameras vector 2 position
        // RigidBody.pos is the vector 2 position of the obj with variable RigidBody (Red square)
        k.camPos(RigidBody.pos)
    })
}