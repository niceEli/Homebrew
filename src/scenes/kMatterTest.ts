import k from '../kaboom'
import Matter from 'matter-js'
import matterRect from '../kMatter/kMatterRect'
import matterCircle from '../kMatter/kMatterCircle'
import PlayerPawnCircle from '../kMatter/kMatterPlayerCircle'

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
        matterRect(engine, { angle: 0.78539816 })
    ])
    // This One Object is for the player
    var PlayerPawn = k.add([
        k.pos(k.center().x + 208, k.center().y + 342 - 16),
        k.anchor('center'),
        k.circle(16),
        k.color(0,255,255),
        k.rotate(0),
        // Matter For Pawns
        PlayerPawnCircle(engine)
    ])
    var RigidBodyC = k.add([
        k.pos(k.center().x, k.center().y-40),
        k.anchor('center'),
        k.circle(16),
        k.color(255,0,0),
        k.rotate(0),
        // Matter For Circles
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
        k.pos(k.center().x + 208, k.center().y + 342),
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
        k.tween(k.camPos(), PlayerPawn.pos, 0.5, (p) => k.camPos(p))
    })
}