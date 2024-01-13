class PhysicsHandler {
  constructor({ engine = Matter.Engine.create(),
    world = Matter.Composite.create(),
    physics = {}
  } = {}) {
    this.engine = engine
    this.world = world
    this.physics = physics
  }

  simulateWorldByOneFrame() {
    /**use the matter.js engine
     */
    Matter.Engine.update(this.engine)
  }

  getPlayerPosition() { console.log("heres player pos") }

  getObstaclePosition() {
    //goal to make gravity and when the player jumps it will slowly fall down 
    //ingredinets have a player have controls and have matter.js physics
    //english
    //translate code

    /**
     * levelData = [[1stv level obstacle],[2nd level obstacel]]
     * -> Matter.js ->composite-> bodies 
     * matter.js simulate the world
     * 
     * let allBodies = this.world.allBodies()
     * let bodyPositions = []
     * allBodies.forEach(body=>bodyPosition.push(body.position)) 
     * return bodyPositions
     */
  }

  getEnemiePosition() { }
  getPlatformPosition() { }
  updatePlayerProperties() { }
  updateObstacleProperties() { }
  updateEnemyProperties() { }
  updatePlatformProperties() { }

}
