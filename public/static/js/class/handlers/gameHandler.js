
class GameHandler {
  constructor({
    levels = [],
    scoreHandler = new ScoreHandler(),
    playerHandler = new PlayerHandler(),
    levelHandler = new LevelHandler({ levels: levels }),
    physicsHandler = new PhysicsHandler(),
    renderHandler = { show: () => console.log("rendering") }

  } = {}) {
    //this.scoreHandler = scoreHandler;
    this.playerHandler = playerHandler;
    this.levelHandler = levelHandler;
    this.physicsHandler = physicsHandler
    this.renderHandler = renderHandler
  }

  gameStart() {
<<<<<<< HEAD
    /**
     * Wipe screen, 
     * display next level screen
     *
      * **/
    this.physicsHandler.addItems(this.levelHandler.levels[this.getCurrentLevel()])

=======
    this.physicsHandler.addItems(this.levelHandler.levels[this.getCurrentLevel()])
>>>>>>> 64512f54383552632dbc71069c69c2633ba4f479
  }

  nextFrame() {
    // this.renderHandler.show()
    this.levelHandler.show(this.levelHandler.currentLevel)
    this.physicsHandler.simulateWorldByOneFrame()
  }

  movePlayerRight() {
    this.playerHandler.movePlayer(1)
  }

  movePlayerLeft() {
    this.playerHandler.movePlayer(-1)
  }

  getCurrentLevel() {
    return this.levelHandler.currentLevel
  }

  setCurrentLevel(levelNumber) {
    this.levelHandler.currentLevel = levelNumber
  }

  getPreviousLevel() {
    return Math.max(this.levelHandler.currentLevel - 1, 1)
  }

  getNextLevel() {
    return this.levelHandler.currentLevel + 1
  }

}
