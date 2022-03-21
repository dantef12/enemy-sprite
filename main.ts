let sprite = game.createSprite(2, 2)
let enemy_sprite = game.createSprite(2, 2)
game.setLife(3)
if (enemy_sprite.isTouching(sprite)) {
    enemy_sprite = randint(0, 10)
    enemy_sprite = randint(0, 10)
}
basic.forever(function () {
	
})
