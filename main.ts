input.onButtonPressed(Button.A, function () {
    Index += 1
})
let Index = 0
basic.forever(function () {
    if (Index == 0) {
        basic.showString("T")
    }
    if (Index == 1) {
        basic.showString("h")
    }
    if (Index == 2) {
        basic.showString("e")
    }
    if (Index == 3) {
        basic.showString("o")
    }
    if (Index == 4) {
        basic.showIcon(IconNames.StickFigure)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        basic.pause(5000)
        Index = 0
    }
})
