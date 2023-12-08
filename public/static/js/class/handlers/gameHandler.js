// import ScoreHandler from './ScoreHandler'
// import LevelHandler from './LevelHandler'
/* export default */ class GameHandler {
  constructor({
    scoreHandler = new ScoreHandler(),
    playerHandler = new PlayerHandler(),
    levelHandler = new LevelHandler({levels:levelDataArr}),
    physics = new Physics()
  } = {}) {
    this.scoreHandler = scoreHandler;
    this.playerHandler = playerHandler;
    this.levelHandler = levelHandler;
    this.physics = physics
  }
  nextFrame() {
    this.show()
    //players to feel physics -
    //health to change

    // levels should be updated - 
    //score shoul be updated -
    // this.playerHandler.update(physics)
    // this.levelHandler.update(physics)
    this.scoreHandler.update(1)
  }
  movePlayerRight(){
    this.playerHandler.movePlayer2(1)
  }

  movePlayerLeft(){
    this.playerHandler.movePlayer2(-1)
  }

  show(){
    this.levelHandler.showLevel1()
    this.playerHandler.showPlayer()
  }

}
