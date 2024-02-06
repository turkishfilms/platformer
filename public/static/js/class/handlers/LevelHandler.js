
class LevelHandler {
	constructor({ levels } = {}) {
		this.levels = levels;
		this.currentLevel = 1;
	}

	update() {
		//every frame this is called
		this.show(this.currentLevel); //show the level
		//move the level
	}

	getObstacles(levelNumber) {
		return this.levels[levelNumber - 1]
	}


}
