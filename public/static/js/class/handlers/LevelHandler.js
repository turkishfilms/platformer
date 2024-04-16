class LevelHandler {
  constructor({ levels } = {}) {
    this.levels = levels;
    this.currentLevel = 1;
  }

  getLevelData(levelNumber) {
    return this.levels[levelNumber - 1];
  }
  getPlayerStartingPosition() {
    return this.levels[this.currentLevel - 1].player[0].position;
  }

  getLevelBackdrop() {
    return {
      redraw: this.levels[this.currentLevel - 1].redraw,
      backdrop: this.levels[this.currentLevel - 1].backdrop,
    };
  }
  setCurrentLevel(levelNumber) {
    if (typeof levelNumber != "number" || isNaN(levelNumber)) return;
    this.currentLevel = Math.floor(
      Math.max(1, Math.min(this.levels.length, levelNumber))
    );
  }

  getNextLevel() {
    return Math.min(this.levels.length, this.currentLevel + 1);
  }

  getPreviousLevel() {
    return Math.max(1, this.currentLevel - 1);
  }
}
