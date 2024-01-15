class PhysicsHandler {
  constructor({
    world = Matter.Composite.create(),
    physics = new Physics()
  } = {}) {
    this.engine = Matter.Engine.create({
      world: world,
      ...physics
    })
  }

  simulateWorldByOneFrame() {
    Matter.Engine.update(this.engine)
  }

  addItems(items, typeID) {
    const composites = Matter.Composite.allComposites(this.engine.world)
    const you = 0
    const types = Array(this.engine.world.id).push(composites.map(composite => composite.id))
    if (types.contains(typeID)) {
      const selectedComposite = composites[types.indexOf(typeID)]
      items.forEach(item => Matter.Composite.add(selectedComposite, item))
    }
  }

  getPlayerPosition() { }

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

  getEnemyPosition() { }

  getPlatformPosition() { }

  updatePlayerProperties() { }

  updateObstacleProperties() { }

  updateEnemyProperties() { }

  updatePlatformProperties() { }

}
