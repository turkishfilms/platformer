class PhysicsHandler {
	constructor({
		// world = Matter.Composite.create(),
		physics = new Physics()
		, sub = ['player', 'obstacles']
	} = {}) {

		this.engine = Matter.Engine.create({
			// world: world,
			...physics
		})
		for (let i = 0; i < sub.length; i++) {
			Matter.Composite.add(this.engine.world, Matter.Composite.create({ label: sub[i] }))

		}

	}

	movePlayer(position) {
		const player = this.getPlayerBody()
		const vector = Matter.Vector.create(position.x, position.y)
		Matter.Body.setPosition(player, vector, true)
		// Matter.Body.setPosition(player, vector, true) try velocity
	}

	simulateWorldByOneFrame() {
		Matter.Engine.update(this.engine)
	}

	addPlayer(playerOptions) {
		const { x, y, width, height } = playerOptions
		const playerRect = Matter.Bodies.rectangle(x, y, width, height)
		//this is prone to failure, paramaterize the output
		Matter.Composite.add(this.engine.world.composites[0], playerRect)
	}

	addItems(items, typeID, staticObj = true) {
		const targetComposite = Matter.Composite.allComposites(this.engine.world)
			.filter(composite => composite.label == typeID)[0]
		items.forEach(item => {
			let { position: { x, y }, size: { w: width, h: height } } = item
			let rect = Matter.Bodies.rectangle(x, y, width, height, { isStatic: staticObj, restitution: 0 })
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
		return this.engine.world.composites[1].bodies.map(obs => {
			return {
				size: {
					h: obs.bounds.max.y - obs.bounds.min.y,
					w: obs.bounds.max.x - obs.bounds.min.x
				},
				position: { x: obs.position.x, y: obs.position.y }
			}
		})
	}

	clearComposite() {
		Matter.Composite.clear(allComposites, keepStatic, [deep = false])
		// Removes composites from the given composite. 
	}
}
