
/**- EnemyHandler.js Class
- (Methods) Add Enemies, Get Enemy Health/Position/Damage
- AI/ player Tracking/ When to Attack?
**/
class EnemyHandler {
	constructor({ enemies = [] } = {}) {
		this.enemies = enemies
	}

	addEnemies(enemies) {
		enemies.forEach(enemy => this.enemies.push(enemy))
	}

	getEnemyData() {
		return this.enemies.map(enemy => {
			health: enemy.health,
				position: enemy.position,
					damage: enemy.damage
		})
	}

}
