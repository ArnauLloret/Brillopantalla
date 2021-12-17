input.onButtonPressed(Button.A, function () {
    Brillo += 5
})
input.onButtonPressed(Button.B, function () {
    Brillo += -5
})
let Brillo = 0
led.setBrightness(0)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    led.setBrightness(Brillo)
    if (Brillo < 0) {
        Brillo = 0
    }
    if (Brillo > 255) {
        Brillo = 255
    }
})
