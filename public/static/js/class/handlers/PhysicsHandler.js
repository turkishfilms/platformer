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
    Matter.Engine.update(this.engine)
  }

  addItems(items) {
    items.forEach(item => Matter.Composite.add(this.world, item))
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
