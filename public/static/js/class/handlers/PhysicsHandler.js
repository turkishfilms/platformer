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
    //goal
    //ingredinets
    //english
    //translate code

  }

  getEnemiePosition() { }
  getPlatformPosition() { }
  updatePlayerProperties() { }
  updateObstacleProperties() { }
  updateEnemyProperties() { }
  updatePlatformProperties() { }

}
