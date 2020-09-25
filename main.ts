input.onButtonPressed(Button.A, function () {
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
    }
    Index += 1
    if (Index == 5) {
        Index = 0
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    }
})
let Index = 0
Index = 0
