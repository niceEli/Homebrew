import k from '../kaboom'

export default function HelloWorld () {
    var RB = k.add([
        k.pos(k.center()),
        k.anchor('center'),
        k.rect(32,32),
        k.color(255,0,0),
        k.rotate(0)
    ])

    k.onMouseMove(() => {
        RB.pos = k.mousePos();
        if (k.isMouseDown()) {
            k.addKaboom(k.mousePos());
        }
    })
}