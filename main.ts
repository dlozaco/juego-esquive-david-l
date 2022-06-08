input.onButtonPressed(Button.A, function () {
    if (true) {
    	
    } else {
        sprite.move(-1)
    }
})
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
let malo: game.LedSprite = null
let malox = 0
let sprite: game.LedSprite = null
basic.clearScreen()
sprite = game.createSprite(2, 4)
basic.forever(function () {
    malox = randint(0, 4)
    malo = game.createSprite(malox, 0)
    basic.pause(1000)
    if (malo.isTouching(sprite)) {
        basic.showString("FIN")
    }
    malo.delete()
})
loops.everyInterval(200, function () {
    malo.change(LedSpriteProperty.Y, 1)
})
