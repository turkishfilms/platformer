/** - Enemy.js Class
- (Properties) Health, position, speed, size, sprites, damage value
- (Methods) Follow te player (move), Attack
**/
class Enemy {
	constructor({ health = 1, position = { x: 0, y: 0 }, speed = { x: 0, y: 0 }, size = { width: 0, height: 0 }, damage = 0, sprites = [] } = {}) {
		this.health = health
		this.position = position
		this.speed = speed
		this.size = size
		this.damage = damage
		this.sprites = sprites
	}
	move() {
	}

	attack() {
	}


}
