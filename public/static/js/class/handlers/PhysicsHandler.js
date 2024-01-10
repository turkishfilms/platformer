class PhysicsHandler {
  constructor({ engine = Matter.Engine.create(),
    world = Matter.Composite.create(),
    physics = new Physics()
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
  getObstaclePosition() { }
  getEnemiePosition() { }
  getPlatformPosition() { }
  updatePlayerProperties() { }
  updateObstacleProperties() { }
  updateEnemyProperties() { }
  updatePlatformProperties() { }

}
