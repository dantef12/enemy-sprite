input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, 1)
    enemy_sprite.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.AB, function () {
    sprite.change(LedSpriteProperty.Y, 1)
    enemy_sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, -1)
    enemy_sprite.change(LedSpriteProperty.Y, 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    sprite.change(LedSpriteProperty.Y, -1)
    enemy_sprite.change(LedSpriteProperty.X, 1)
})
let enemy_sprite: game.LedSprite = null
let sprite: game.LedSprite = null
let life = 1
sprite = game.createSprite(2, 2)
enemy_sprite = game.createSprite(2, 2)
let dice = randint(0, 7)
// The Let Statements, randomise the location of the enmy sprite
// 
// This chain of lets statements, randomises the location of the enemy sprite
if (dice == 0) {
    enemy_sprite.change(LedSpriteProperty.X, 1)
    enemy_sprite.change(LedSpriteProperty.Y, 1)
} else if (dice == 1) {
    enemy_sprite.change(LedSpriteProperty.X, -1)
    enemy_sprite.change(LedSpriteProperty.Y, 1)
} else if (dice == 2) {
    enemy_sprite.change(LedSpriteProperty.X, 1)
    enemy_sprite.change(LedSpriteProperty.Y, -1)
} else if (dice == 3) {
    enemy_sprite.change(LedSpriteProperty.X, 2)
    enemy_sprite.change(LedSpriteProperty.Y, 2)
} else if (dice == 4) {
    enemy_sprite.change(LedSpriteProperty.X, -2)
    enemy_sprite.change(LedSpriteProperty.Y, 2)
} else if (dice == 5) {
    enemy_sprite.change(LedSpriteProperty.X, 2)
    enemy_sprite.change(LedSpriteProperty.Y, -2)
} else if (dice == 6) {
    enemy_sprite.change(LedSpriteProperty.X, 0)
    enemy_sprite.change(LedSpriteProperty.Y, 1)
} else if (dice == 7) {
    enemy_sprite.change(LedSpriteProperty.X, 1)
    enemy_sprite.change(LedSpriteProperty.Y, 0)
}
basic.forever(function () {
    if (sprite.isTouching(enemy_sprite)) {
        life += -1
        basic.showString("life lost")
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
        soundExpression.sad.playUntilDone()
        basic.clearScreen()
        life = 1
        sprite = game.createSprite(2, 2)
        enemy_sprite = game.createSprite(2, 2)
        dice = randint(0, 7)
    }
})
