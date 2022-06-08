def on_button_pressed_a():
    sprite.move(-1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    sprite.move(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

sprite: game.LedSprite = None
basic.clear_screen()
sprite = game.create_sprite(2, 4)

def on_every_interval():
    malo: game.LedSprite = None
    malo.change(LedSpriteProperty.Y, -1)
loops.every_interval(500, on_every_interval)

def on_every_interval2():
    pass
loops.every_interval(2000, on_every_interval2)
