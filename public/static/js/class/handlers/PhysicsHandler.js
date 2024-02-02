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

	movePlayer(player, position) {
		console.log(player, position, typeof position)
		//THIS IS WHERE WE ARE
		Matter.Body.setPosition(player, position, true)
		//Matter.Body.setposition(body,pos,velocity)
		// Matter.Body.setVelocity(body, velocity)
	}

	simulateWorldByOneFrame() {
		Matter.Engine.update(this.engine)
	}

	addItems(items, typeID) {
		const composites = Matter.Composite.allComposites(this.engine.world)
		const compositeIds = []
		composites.forEach(composite => compositeIds.push(composite.id))
		compositeIds.push(this.engine.world.id)

		if (compositeIds.indexOf(typeID) != -1) {
			const selectedComposite = composites[compositeIds.indexOf(typeID)]
			items.forEach(item => {
				console.log("checking error", item, selectedComposite)
				Matter.Composite.add(selectedComposite, Matter.Body.create(item))
			})
		}
	}

	getPlayer() {
		//get the body of the player
		//ingredients: players body
		//returns player body
		const playercomposite = Matter.Composite.allComposites(this.engine.world)[0]
		if (playercomposite.bodies.length >= 1) {
			const player = playercomposite.bodies[0]
			return player
		}
	}


	/**
 * goal to return body
 * ingredients 
 * matter.js
 * player
 */
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
	clearComposite() {

		Matter.Composite.clear(allComposites, keepStatic, [deep = false])

		// Removes composites from the given composite. 
	}
}
