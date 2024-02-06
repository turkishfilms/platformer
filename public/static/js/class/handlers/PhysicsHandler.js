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

	addPlayer(player) {
		Matter.Composite.add(this.engine.world.composites[0], player)
	}

	addItems(items, typeID) {
		const composites = Matter.Composite.allComposites(this.engine.world)
		const compositeIds = []
		composites.forEach(composite => compositeIds.push(composite.id))
		compositeIds.push(this.engine.world.id)

		if (compositeIds.indexOf(typeID) != -1) {
			const selectedComposite = composites[compositeIds.indexOf(typeID)]
			items.forEach(item => {
				Matter.Composite.add(selectedComposite, Matter.Body.create(item))
			})
		}
	}
	addPlayers(player) {
		let composites = this.engine.world.com

		Matter.Composite.add(playercomposite, player)
	}
	addItems2(items, typeID) {
		const targetComposite = Matter.Composite.allComposites(this.engine.world).filter(composite => composite.id == typeID)
		items.forEach(item => {
			Matter.Composite.add(targetComposite, item)
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
