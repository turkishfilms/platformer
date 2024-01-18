class GameHandler {
  constructor({
    levels = [],
    scoreHandler = new ScoreHandler(),
    playerHandler = new PlayerHandler(),
    levelHandler = new LevelHandler(
      { levels: levels }),
    physicsHandler = new PhysicsHandler(),
    renderHandler = { show: () => console.log("rendering") }

  } = {}) {
    this.scoreHandler = scoreHandler;
    this.playerHandler = playerHandler;
    this.levelHandler = levelHandler;
    this.physicsHandler = physicsHandler
    this.renderHandler = renderHandler
    this.gamePaused = true
  }

  gameInit() {
    this.physicsHandler.addItems(this.playerHandler.players[0], 0) //adding player to physics handler
    this.physicsHandler.addItems(this.levelHandler.levels[this.getCurrentLevel()], 1) //adding current level obtacles to physics handler
  }

  gameStart() {
    /**
     * Wipe screen, 
     * display next level screen
     *
      * **/
    this.physicsHandler.clear(2)//clears obstacles
    this.physicsHandler.addItems(this.levelHandler.levels[this.getCurrentLevel()])

  }

  nextFrame() {
    /**
     * each frame this gets called
     * sometimes game will be in a level
     * sometimes it will be on a death screen
     *
     * **/
    this.show()
    // this.physicsHandler.simulateWorldByOneFrame()
  }

  show() {

    this.renderHandler.show(this.physicsHandler.getObstaclePosition())
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
