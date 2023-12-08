class PhysicsHandler{
  constructor({engine = Matter.Engine, world = Matter.Composite, physics = new Physics()}={}){
    //properties
    this.engine = engine 
    this.world = world
    this.physics= physics
  }
  //method
  simulateWorldByOneFrame(){}
  getPlayerPosition(){}
  getObstaclePosition(){}
  getEnemiePosition(){}
  getPlatformPosition(){}
  updatePlayerProperties(){}  
  updateObstacleProperties(){}  
  updateEnemyProperties(){}
  updatePlatformProperties(){} 

}
