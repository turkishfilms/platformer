class PhysicsHandler2 {
  constructor({ physics = new Physics() } = {}) {
    this.engine = Matter.Engine.create({
      ...physics,
    });
    this.bounds = Matter.Bounds.create(this.initVertices());
  }

  nextFrame({ types, actions }) {
    this.simulateWorldByOneFrame();
    types.forEach((type, index) =>
      this.handleSpecialItems(type, actions[index])
    );
  }

  initVertices() {
    const corners = [
      { x: 0, y: 0 },
      { x: windowWidth, y: 0 },
      { x: windowWidth, y: windowHeight },
      { x: windowWidth, y: windowHeight },
    ];
    return Matter.Vertices.create(
      corners.map((corner) => Matter.Vector.create(corner.x, corner.y)),
      Matter.Body.create()
    );
  }

  isItemOffScreen(item) {
    return (
      Matter.Query.region([item], this.bounds, {
        outside: true,
      }).length >= 1
    );
  }

  moveItem(item, { x, y }) {
    Matter.Body.setVelocity(
      item,
      Matter.Vector.add(Matter.Vector.create(x, y), item.velocity)
    );
  }

  translateItem(item, { x, y }) {
    Matter.Body.setPosition(item, Matter.Vector.create(x, y));
  }

  simulateWorldByOneFrame() {
    Matter.Engine.update(this.engine);
  }

  addItem(item) {
    Matter.Composite.add(
      this.engine.world,
      Matter.Body.rectangle(
        item.x,
        item.y,
        item.width,
        item.height,
        item.options
      )
    );
  }


  getCollisions(item) {
    return Matter.Query.collides(item, this.world.bodies);
  }

  collisionCheck() {
    return this.getCollisions().length > 0;
  }

  isTypeBlock(item, type) {
    return item[type];
  }

  disappearItem(item) {
    Matter.Composite.remove(this.engine.world, item);
  }

  handleSpecialItems(type, action) {
    if (this.collisionCheck()) {
      this.getCollisions().forEach((collision) => {
        if (this.isTypeBlock(collision.bodyB, type)) action();
      });
    }
  }

  getItem(label) {
    return Matter.Composite.allBodies(this.engine.world).map(
      (body) => body.label == label
    );
  }

  getSizeFromBody(body) {
    return {
      height: body.bounds.max.y - body.bounds.min.y,
      width: body.bounds.max.x - body.bounds.min.x,
    };
  }

  getPositionFromBody(body){
	return {x:body.position.x, y:body.position.y}
  }

  getSpriteFromBody(body){
	return body.sprite
  }

  hasCollided(item,label) {
    return (
      Matter.Query.collides(
        item,
        this.getItem(label)
      ).length > 0
    );
  }

  clearComposite() {
    Matter.Composite.clear(this.engine.world);
    // Reoves composites from the given composite.
  }

  itemFreeze(item) {
    Matter.Body.setAngularSpeed(item, 0);
    Matter.Body.setAngle(item, 0);
    Matter.Body.setVelocity(item, Matter.Vector.create(0, 0));
  }
}
