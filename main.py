def on_button_pressed_a():
    sprite.move(-1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    sprite.move(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

malo_x = 0
malo: game.LedSprite = None
sprite: game.LedSprite = None
basic.clear_screen()
sprite = game.create_sprite(2, 4)

def on_every_interval():
    malo.change(LedSpriteProperty.Y, 1)
loops.every_interval(500, on_every_interval)

def on_every_interval2():
    global malo_x, malo
    malo_x = randint(0, 4)
    malo = game.create_sprite(malo_x, 0)
loops.every_interval(2000, on_every_interval2)

def on_forever():
    pass
basic.forever(on_forever)
