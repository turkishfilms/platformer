class PhysicsHandler2 {
	constructor({
		physics = new Physics(),
	} = {}) {
		this.engine = Matter.Engine.create({
			...physics,
		});
		this.bounds = Matter.Bounds.create(this.initVertices());
	}

	initVertices() {
		const corners = [
			{ x: 0, y: 0 },
			{ x: windowWidth, y: 0 },
			{ x: windowWidth, y: windowHeight },
			{ x: windowWidth, y: windowHeight },
		];
		return Matter.Vertices.create(corners.map((corner) =>
			Matter.Vector.create(corner.x, corner.y)
		), Matter.Body.create());
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

	translatePlayer(item, { x, y }) {
		Matter.Body.setPosition(item, Matter.Vector.create(x, y));
	}

	simulateWorldByOneFrame() {
		Matter.Engine.update(this.engine);
	}

	addItem(item) {
		Matter.Composite.add(this.world.composites, Matter.Body.rectangle(item.x, item.y, item.width, item.height, {
		}));
	}

	// addObstacles(obstacles, options = {
	// 	isStatic: true,
	// 	restitution: 0,
	//
	// }) {
	//
	// 	obstacles.forEach(obstacle => {
	// 		let {
	// 			position: {
	// 				x,
	// 				y
	// 			},
	// 			size: {
	// 				w: width,
	// 				h: height,
	//
	// 			},
	// 			isDisappearing,
	// 			sprite,
	// 			isEndBlock,
	// 			isKillBlock,
	// 		} = obstacle
	//
	// 		let rect = Matter.Bodies.rectangle(x, y, width, height, {
	// 			isStatic: options.isStatic,
	// 			restitution: options.restitution,
	// 			isDisappearing: isDisappearing,
	// 			sprite: sprite,
	// 			isEndBlock: isEndBlock,
	// 			isKillBlock: isKillBlock
	// 		})
	// 		Matter.Composite.add(this.getObstacleComposite(), rect)
	// 	});
	// }
	//
	// addPlayer(playerOptions) {
	// 	const { x, y, width, height, restitution } = playerOptions;
	// 	const playerRect = Matter.Bodies.rectangle(x, y, width, height, {
	// 		inertia: Infinity,
	// 		restitution: restitution,
	// 	});
	// 	//this is prone to failure, paramaterize the output
	// 	Matter.Composite.add(this.getPlayerComposite(), playerRect);
	// }

	getCollisions(item) {
		//it returns the item and what it colllides with
		//in an array
		return Matter.Query.collides(
			item,
			this.world.bodies
		);
	}

	collisionCheck() {
		return this.getCollisions().length > 0
	}

	isTypeBlock(item, type) {
		return item[type]
	}


	disappearItem(item) {
		//make block desappear by making w and h 0
		// Matter.Body.scale(block, 0.001, 0.001)
		Matter.Composite.remove(this.engine.world.composites, item)
	}

	handleSpecialItems(type, action) {
		if (this.collisionCheck()) {
			this.getCollisions().forEach(collision => {
				if (this.isTypeBlock(collision.bodyB, type)) action()
			})
		}
	}

	//disappear this.disappearBlock(block)
	// end game.nextLevel()
	// kill game.playerHandler.resetPlayer()

	getItem(label) {

	}

	// getPlayerBody() {
	// 	const playercomposite = this.getPlayerComposite()
	// 	if (playercomposite.bodies.length >= 1) return playercomposite.bodies[0]
	// }

	// getObstacleData() {
	// 	//FIXME: fix this to use labels
	// 	return this.engine.world.composites[1].bodies.map((obs) => {
	// 		return {
	// 			size: {
	// 				h: obs.bounds.max.y - obs.bounds.min.y,
	// 				w: obs.bounds.max.x - obs.bounds.min.x,
	// 			},
	// 			position: {
	// 				x: obs.position.x,
	// 				y: obs.position.y,
	// 			},
	// 			sprite: obs.sprite,
	// 		};
	// 	});
	// }

	hasCollided(item) {
		return (
			Matter.Query.collides(
				item,
				this.getObstacleComposite().bodies//?? hmmm
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
