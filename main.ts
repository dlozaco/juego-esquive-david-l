input.onButtonPressed(Button.A, function on_button_pressed_a() {
    sprite.move(-1)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    sprite.move(1)
})
let malo_x = 0
let malo : game.LedSprite = null
let sprite : game.LedSprite = null
basic.clearScreen()
sprite = game.createSprite(2, 4)
loops.everyInterval(500, function on_every_interval() {
    malo.change(LedSpriteProperty.Y, 1)
})
loops.everyInterval(2000, function on_every_interval2() {
    
    malo_x = randint(0, 4)
    malo = game.createSprite(malo_x, 0)
})
basic.forever(function on_forever() {
    
})
