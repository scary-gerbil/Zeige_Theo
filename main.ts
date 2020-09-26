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
        for (let index = 0; index < 2; index++) {
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
        }
        for (let index = 0; index < 2; index++) {
            music.playTone(440, music.beat(BeatFraction.Half))
            music.playTone(494, music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Whole))
        }
        music.playTone(523, music.beat(BeatFraction.Quarter))
        music.playTone(587, music.beat(BeatFraction.Quarter))
        music.playTone(523, music.beat(BeatFraction.Quarter))
        basic.pause(2000)
        Index = 0
    }
})
