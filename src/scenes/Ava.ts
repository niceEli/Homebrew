import k from '../kaboom'
import Matter from 'matter-js'
import matterRect from '../kMatter/kMatterRect'
import matterCircle from '../kMatter/kMatterCircle'
import PlayerPawnCircle from '../kMatter/kMatterPlayerCircle'

export default function Ava () {
    // Setup Engine
    const engine = Matter.Engine.create()
    Matter.Composite.create(engine)
    k.onUpdate(() => {
        Matter.Engine.update(engine, k.dt() * 1000)
    })
    k.scene('AvaC', Ava)
    k.loadSprite("RAD", "./res/Radians.jpg")
    k.loadSprite("CTPlayer", "./res/CTPlayer.png")
    
    // Actors
    var PlayerPawn = k.add([
        k.pos(k.center().x, k.center().y),
        k.anchor('center'),
        k.rotate(0),
        k.sprite("CTPlayer"),
        k.scale(4),
        // Matter For Pawns
        PlayerPawnCircle(engine, {}, 16)
    ])

    var PlatForm = k.add([
        k.pos(k.center().x, k.center().y + 64),
        k.anchor('center'),
        k.rect(128,32),
        k.color(0,0,0),
        k.rotate(0),
        // Matter For Rectangles
        matterRect(engine, { isStatic: true})
    ])

    var PlatForm2 = k.add([
        k.pos(k.center().x + 200, k.center().y + 64),
        k.anchor('center'),
        k.rect(128,32),
        k.color(0,0,0),
        k.rotate(0),
        // Matter For Rectangles
        matterRect(engine, { isStatic: true})
    ])

    var PlatForm3 = k.add([
        k.pos(k.center().x + 400, k.center().y - 50),
        k.anchor('center'),
        k.rect(128,32),
        k.color(0,0,0),
        k.rotate(0),
        // Matter For Rectangles
        matterRect(engine, { isStatic: true})
    ])

    var PlatForm4 = k.add([
        k.pos(k.center().x + 600, k.center().y + 69),
        k.anchor('center'),
        k.rect(128,32),
        k.color(0,0,0),
        k.rotate(0),
        // Matter For Rectangles
        matterRect(engine, { isStatic: true})
    ])

    var PlatForm5 = k.add([
        k.pos(k.center().x + 900, k.center().y + 10),
        k.anchor('center'),
        k.rect(128,32),
        k.color(0,0,0),
        k.rotate(0),
        // Matter For Rectangles
        matterRect(engine, { isStatic: true})
    ])
    var PlatForm6 = k.add([
        k.pos(k.center().x + 1200, k.center().y + 90),
        k.anchor('center'),
        k.rect(128,32),
        k.color(0,0,0),
        k.rotate(0),
        // Matter For Rectangles
        matterRect(engine, { isStatic: true})
    ])
    var PlatForm7 = k.add([
        k.pos(k.center().x + 1507, k.center().y + 10),
        k.anchor('center'),
        k.rect(128,32),
        k.color(0,0,0),
        k.rotate(0),
        // Matter For Rectangles
        matterRect(engine, { isStatic: true})
    ])

    var PlatForm8 = k.add([
        k.pos(k.center().x + 1793, k.center().y + 107),
        k.anchor('center'),
        k.rect(128,32),
        k.color(0,0,0),
        k.rotate(0),
        // Matter For Rectangles
        matterRect(engine, { isStatic: true})
    ])

    var PlatForm9 = k.add([
        k.pos(k.center().x + 1859, k.center().y + 139),
        k.anchor('center'),
        k.rect(128,32),
        k.color(0,0,0),
        k.rotate(0),
        // Matter For Rectangles
        matterRect(engine, { isStatic: true})
    ])

    var PlatForm10 = k.add([
        k.pos(k.center().x + 1975, k.center().y + 135),
        k.anchor('center'),
        k.rect(128,32),
        k.color(0,0,0),
        k.rotate(0),
        // Matter For Rectangles
        matterRect(engine, { isStatic: true})
    ])
    
    // This script makes the camera follow the square (it runs on update)
    k.onUpdate(() => {
        // k.camPos is the cameras vector 2 position
        // RigidBody.pos is the vector 2 position of the obj with variable RigidBody (Red square)
        k.tween(k.camPos(), PlayerPawn.pos, 0.5, (p) => k.camPos(p))
        if (PlayerPawn.pos.y >= 1000) {
            k.go("AvaC")
        }
    })
}