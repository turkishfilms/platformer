
class GameHandler {
  constructor({
    scoreHandler = new ScoreHandler(),
    playerHandler = new PlayerHandler(),
    levelHandler = new LevelHandler({levels:levelDataArr}),
    physicsHandler = new PhysicsHandler(),
    renderHandler = {show:()=>console.log("rendering")}

  } = {}) {
    this.scoreHandler = scoreHandler;
    this.playerHandler = playerHandler;
    this.levelHandler = levelHandler;
    this.physicsHandler = physicsHandler
    this.renderHandler = renderHandler
  }
  nextFrame() {
    // this.renderHandler.show()
    this.physicsHandler.simulateWorldByOneFrame()
  }

  movePlayerRight(){
    this.playerHandler.movePlayer2(1)
  }

  movePlayerLeft(){
    this.playerHandler.movePlayer2(-1)
  }
  

}
