
class LevelHandler {
	constructor({ levels } = {}) {
		this.levels = levels;
		this.currentLevel = 1;
	}

	getLevelData(levelNumber) {
		return this.levels[levelNumber - 1]
	}
getPlayerStartingPosition(level){
return this.levels[level].player[0].position


}

	setCurrentLevel(levelNumber) {
		if (typeof levelNumber != 'number' || isNaN(levelNumber)) return
		this.currentLevel = Math.floor(Math.max(1, Math.min(this.levels.length, levelNumber)))
	}

	getNextLevel() {
		return Math.min(this.levels.length, this.currentLevel + 1)
	}

	getPreviousLevel() {
		return Math.max(1, this.currentLevel - 1)
	}
}
