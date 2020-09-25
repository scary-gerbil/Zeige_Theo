input.onButtonPressed(Button.A, function () {
    for (let Index = 0; Index <= 4; Index++) {
        if (Index == 0) {
            basic.showString("T")
            Index += 1
        }
        if (Index == 1) {
            basic.showString("h")
            Index += 1
        }
        if (Index == 2) {
            basic.showString("e")
            Index += 1
        }
        if (Index == 3) {
            basic.showString("o")
            Index += 1
        }
        if (Index == 4) {
            basic.showIcon(IconNames.StickFigure)
            music.ringTone(262)
        }
    }
})
