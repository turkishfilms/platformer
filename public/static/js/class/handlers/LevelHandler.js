
class LevelHandler {
	constructor({ levels } = {}) {
		this.levels = levels;
		this.currentLevel = 1;
	}

	getLevelData(levelNumber) {
		return this.levels[levelNumber - 1]
	}

	/**
		@param {number} levelNumber - number of level  
	**/
	setCurrentLevel(levelNumber) {
		if (typeof levelNumber != 'number' || isNaN(levelNumber)) return
		const minVal = 1
		const maxVal = this.levels.length - 1
		this.currentLevel = Math.floor(Math.max(minVal, Math.min(maxVal, levelNumber)))
	}

}
