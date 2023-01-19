input.onButtonPressed(Button.A, function () {
    numerº += 1
    basic.showString("" + (numerº))
})
input.onButtonPressed(Button.AB, function () {
    if (numerº > 5) {
        basic.showIcon(IconNames.Happy)
    }
    if (numerº < 5) {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
    numerº += -1
    basic.showString("" + (numerº))
})
let numerº = 0
numerº = 0
basic.showString("" + (numerº))
basic.forever(function () {
	
})
