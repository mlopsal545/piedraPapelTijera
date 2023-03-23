let random = 0
input.onGesture(Gesture.Shake, function () {
    random = randint(0, 2)
    if (random == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (random == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
