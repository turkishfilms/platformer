
class LevelHandler {
	constructor({ levels } = {}) {
		this.levels = levels;
		this.currentLevel = 2;
	}

	getLevelData(levelNumber) {
		return this.levels[levelNumber - 1]
	}

	setCurrentLevel(levelNumber) {
		this.currentLevel = levelNumber
	}

}
