
class LevelHandler {
	constructor({ levels } = {}) {
		this.levels = levels;
		this.currentLevel = 1;
	}

	getLevelData(levelNumber) {
		return this.levels[levelNumber - 1]
	}

	setCurrentLevel(levelNumber) {
		this.currentLevel = levelNumber
	}

}
