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
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
        Index = 0
    }
})
let Index = 0
Index = 0
