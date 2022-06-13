input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
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
        for (let index = 0; index < 2; index++) {
            sprite.delete()
            malo.delete()
            basic.showIcon(IconNames.No)
        }
    }
    malo.delete()
})
basic.forever(function () {
    if (sprite.get(LedSpriteProperty.X) == 4) {
        sprite.set(LedSpriteProperty.X, 0)
        basic.pause(1000)
    } else if (sprite.get(LedSpriteProperty.X) == 0) {
        sprite.set(LedSpriteProperty.X, 4)
        basic.pause(1000)
    }
})
loops.everyInterval(200, function () {
    malo.change(LedSpriteProperty.Y, 1)
})
