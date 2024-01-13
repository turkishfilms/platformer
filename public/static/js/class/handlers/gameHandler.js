
class GameHandler {
  constructor({
levels=[],
    scoreHandler = new ScoreHandler(),
    playerHandler = new PlayerHandler(),
    levelHandler = new LevelHandler({levels:levels}),
    physicsHandler = new PhysicsHandler(),
    renderHandler = {show:()=>console.log("rendering")}

  } = {}) {
    //this.scoreHandler = scoreHandler;
    this.playerHandler = playerHandler;
    this.levelHandler = levelHandler;
    this.physicsHandler = physicsHandler
    this.renderHandler = renderHandler
  }
  nextFrame() {
    // this.renderHandler.show()
    this.levelHandler.show(this.levelHandler.currentLevel)
    this.physicsHandler.simulateWorldByOneFrame()
  }

  movePlayerRight(){
    this.playerHandler.movePlayer2(1)
  }

  movePlayerLeft(){
    this.playerHandler.movePlayer2(-1)
  }
  
setCurrentLevel(levelNumber){
  this.levelHandler.currentLevel = levelNumber
}

getPreviousLevel(){ //return a number 1 less than current level unless current level is 1 or less then return 1
  const currentLevel = this.levelHandler.currentLevel 
  
  return currentLevel <= 1 ? 1 : currentLevel - 1
}

getNextLevel(){ 
  return this.levelHandler.currentLevel + 1
}

}
