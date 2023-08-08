import ScoreHandler from './ScoreHandler'

export class GameHandler {
  constructor({
    scoreHandler = new ScoreHandler(),
    playerHandler = new PlayerHandler(),
    levelHandler = new LevelHandler(),
    physics = new physics()
  } = {}) {
    this.scoreHandler = scoreHandler;
    this.playerHandler = playerHandler;
    this.levelHandler = levelHandler;
    this.physics = physics
  }
  nextFrame =()=>{
    //players to feel physics -
    //health to change
    
    // levels should be updated - 
    //score shoul be updated -
    this.playerHandler.update(physics)
    this.levelHandler.update(physics)
    this.scoreHandler.update()

  }


}
