/** - Enemy.js Class
- (Properties) Health, position, speed, size, sprites, damage value
- (Methods) Follow te player (move), Attack
**/
class Enemy {
	constructor({ health = 1, position = { x: 0, y: 0 }, speed = { x: 0, y: 0 }, size = { width: 0, height: 0 }, damage = 0,
		sprites = { moving: { left: 0, right: 0 }, attacking: { left: 0, right: 0 }, die: 0, damaged: 0 } } = {}) {
		this.position = position
		this.size = size
		this.speed = speed
		this.damage = damage
		this.health = health
		this.sprites = sprites
	}

	move() {

	}

	attack() {

	}


}
