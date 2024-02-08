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

	movePlayer(position) {
		const player = this.getPlayerBody()
		const vector = Matter.Vector.create(position.x, position.y)
		Matter.Body.setPosition(player, vector, true)
	}

	simulateWorldByOneFrame() {
		Matter.Engine.update(this.engine)
	}

	addPlayer(playerOptions) {
		const { x, y, width, height } = playerOptions
		const playerRect = Matter.Bodies.rectangle(x, y, width, height)
		Matter.Composite.add(this.engine.world.composites[0], playerRect)
	}

	addItems(items, typeID) {
		const targetComposite = Matter.Composite.allComposites(this.engine.world)
			.filter(composite => composite.id == typeID)[0]
		items.forEach(item => {
			let { position: { x, y }, size: { w: width, h: height } } = item
			let rect = Matter.Bodies.rectangle(x, y, height, width, { isStatic: true })
			Matter.Composite.add(targetComposite, rect)
		});
	}

	getPlayerBody() {
		//get the body of the player
		//ingredients: players body
		//returns player body
		const playercomposite = Matter.Composite.allComposites(this.engine.world)[0]
		if (playercomposite.bodies.length >= 1) {
			const player = playercomposite.bodies[0]
			return player
		}
	}

	getObstaclePosition() {
		return this.engine.world.composites[1].bodies;
	}

	clearComposite() {
		Matter.Composite.clear(allComposites, keepStatic, [deep = false])
		// Removes composites from the given composite. 
	}
}
