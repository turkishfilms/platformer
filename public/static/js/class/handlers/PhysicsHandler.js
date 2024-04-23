class PhysicsHandler {
	constructor({
		physics = new Physics(),
		compositeStructure = {
			player: "player",
			obstacle: "obstacle",
		},
	} = {}) {
		this.engine = Matter.Engine.create({
			...physics,
		});
		Object.keys(compositeStructure).forEach((comp) => {
			Matter.Composite.add(
				this.engine.world,
				Matter.Composite.create({
					label: compositeStructure[comp],
				})
			);
		});
		this.compositeStructure = compositeStructure;
		this.bounds = Matter.Bounds.create(this.initVertices());
	}

	initVertices() {
		const corners = [
			{ x: 0, y: 0 },
			{ x: windowWidth, y: 0 },
			{ x: windowWidth, y: windowHeight },
			{ x: windowWidth, y: windowHeight },
		];
		const points = corners.map((corner) =>
			Matter.Vector.create(corner.x, corner.y)
		);
		return Matter.Vertices.create(points, Matter.Body.create());
	}

	isPlayerOffScreen() {
		return (
			Matter.Query.region([this.getPlayerBody()], this.bounds, {
				outside: true,
			}).length >= 1
		);
	}

	movePlayer(velocity) {
		const { x, y } = velocity;
		const player = this.getPlayerBody();
		const playerVelocity = player.velocity;
		const movementVelocity = Matter.Vector.create(x, y);
		Matter.Body.setVelocity(
			player,
			Matter.Vector.add(movementVelocity, playerVelocity)
		);
	}

	translatePlayer(position) {
		const { x, y } = position;
		Matter.Body.setPosition(this.getPlayerBody(), Matter.Vector.create(x, y));
	}

	simulateWorldByOneFrame() {
		Matter.Engine.update(this.engine);
	}

	addPlayer(playerOptions) {
		const { x, y, width, height, restitution } = playerOptions;
		const playerRect = Matter.Bodies.rectangle(x, y, width, height, {
			inertia: Infinity,
			restitution: restitution,
		});
		//this is prone to failure, paramaterize the output
		Matter.Composite.add(this.getPlayerComposite(), playerRect);
	}

	getCollisions() {
		//it returns the player and what it colllides with
		//in an array
		return Matter.Query.collides(
			this.getPlayerBody(),
			game.physicsHandler.getObstacleComposite().bodies
		);
	}

	disappearCollisionCheck() {
		return this.getCollisions().length > 0
	}

	isDisappearBlock(block) {
		return block.isDisappearing
	}

	disappearBlock(block) {
		//make block desappear by making w and h 0
		// Matter.Body.scale(block, 0.001, 0.001)
		Matter.Composite.remove(this.engine.world.composites[1], block)
	}

	handleDisappear() {
		if (this.disappearCollisionCheck()) {

			const collisions = this.getCollisions()
			collisions.forEach(collision => {
				const block = collision.bodyB
				if (this.isDisappearBlock(block)) {
					this.disappearBlock(block)
				}
			})
		}
	}

	addObstacles(obstacles, options = {
		isStatic: true,
		restitution: 0
	}) {
		obstacles.forEach(obstacle => {
			console.log("PH,aO,obstacle", obstacle)
			let {
				position: {
					x,
					y
				},
				size: {
					w: width,
					h: height,

				},
				isDisappearing,
				sprite,
			} = obstacle

			console.log(isDisappearing, sprite)
			let rect = Matter.Bodies.rectangle(x, y, width, height, {
				isStatic: options.isStatic,
				restitution: options.restitution,
				isDisappearing: isDisappearing,
				sprite: sprite,
			})
			Matter.Composite.add(this.getObstacleComposite(), rect)
		});
	}

	getPlayerComposite() {
		return Matter.Composite.allComposites(this.engine.world).filter(
			(composite) => composite.label == this.compositeStructure.player
		)[0];
	}

	getObstacleComposite() {
		return Matter.Composite.allComposites(this.engine.world).filter(
			(composite) => composite.label == this.compositeStructure.obstacle
		)[0];
	}

	getPlayerBody() {
		const playercomposite = this.getPlayerComposite()
		if (playercomposite.bodies.length >= 1) return playercomposite.bodies[0]
	}

	getObstacleData() {
		//FIXME: fix this to use labels
		return this.engine.world.composites[1].bodies.map((obs) => {
			return {
				size: {
					h: obs.bounds.max.y - obs.bounds.min.y,
					w: obs.bounds.max.x - obs.bounds.min.x,
				},
				position: {
					x: obs.position.x,
					y: obs.position.y,
				},
				sprite: obs.sprite,
			};
		});
	}

	hasCollided() {
		return (
			Matter.Query.collides(
				this.getPlayerBody(),
				this.getObstacleComposite().bodies
			).length > 0
		);
	}

	getObstaclePosition() {
		//fix this to use labels
		return this.engine.world.composites[1].bodies.map((obs) => {
			return {
				size: {
					h: obs.bounds.max.y - obs.bounds.min.y,
					w: obs.bounds.max.x - obs.bounds.min.x,
				},
				position: {
					x: obs.position.x,
					y: obs.position.y,
				},
			};
		});
	}

	clearComposite() {
		Matter.Composite.clear(this.engine.world);
		// Reoves composites from the given composite.
	}

	playerStill() {
		Matter.Body.setAngularSpeed(this.getPlayerBody(), 0);
		Matter.Body.setAngle(this.getPlayerBody(), 0);
		Matter.Body.setVelocity(this.getPlayerBody(), Matter.Vector.create(0, 0));
	}
}
