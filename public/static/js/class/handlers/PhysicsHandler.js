class PhysicsHandler{
  constructor({engine = Matter.Engine, world = Matter.Composite, physics = new Physics()}={}){
    //properties
    this.engine = engine 
    this.world = world
    this.physics= physics
  }
  //method
  simulateWorldByOneFrame(){console.log("simulating one frame of the world")}
  getPlayerPosition(){console.log("heres player pos")}
  getObstaclePosition(){}
  getEnemiePosition(){}
  getPlatformPosition(){}
  updatePlayerProperties(){}  
  updateObstacleProperties(){}  
  updateEnemyProperties(){}
  updatePlatformProperties(){} 

}














