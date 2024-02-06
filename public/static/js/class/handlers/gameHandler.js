class GameHandler {
	constructor({

		levels = [],
		worldStructure = {},
		physics = new Physics(),
		player = new Player(),
		scoreHandler = new ScoreHandler(),
		playerHandler = new PlayerHandler({ player: player }),
		levelHandler = new LevelHandler({ levels: levels }),
		physicsHandler = new PhysicsHandler({ world: worldStructure, physics: physics }),
		renderHandler = new RenderHandler()
	} = {}) {
		this.scoreHandler = scoreHandler;
		this.playerHandler = playerHandler;
		this.levelHandler = levelHandler;
		this.physicsHandler = physicsHandler
		this.renderHandler = renderHandler
		this.gamePaused = true
		this.gameInit()

	}

	gameInit() {// start the game 
		this.physicsHandler.addPlayer(this.playerHandler.getPlayerAsOptions()) //adding player to physics handler
	let LevelObstacles = this.levelHandler.levels[this.getCurrentLevel()]
	console.log (LevelObstacles)
		this.physicsHandler.addItems(LevelObstacles, 1) //adding current level obtacles to physics handler
	
	}

	nextFrame() {
		this.physicsHandler.simulateWorldByOneFrame()
		this.playerHandler.updatePlayer()
		this.show()
	}

	playerShow(player) {
		let x = player.position.x
		let y = player.position.y
		let width = player.bounds.width
		let height = player.bounds.height
		rect(x, y, width, height)
	}

	playerShow2(player) {
		const { position: { x, y }, bounds: { width, height } } = player
		rect(x, y, width, height)
	}

	show() {
		this.renderHandler.show()
	}

	movePlayerRight(speed) {
		this.playerHandler.movePlayer(-speed, 0)
	}

	movePlayerLeft(speed) {
		this.playerHandler.movePlayer(speed, 0)
	}

	movePlayerUp(jumpSpeed) {
		this.playerHandler.movePlayer(0, jumpSpeed)
	}

	getCurrentLevel() {
		return this.levelHandler.currentLevel
	}

	setCurrentLevel(levelNumber) {
		this.levelHandler.currentLevel = levelNumber
	}

	getPreviousLevel() {
		return Math.max(this.levelHandler.currentLevel - 1, 1) //Ensure previous level always picks a positive levelNumber
	}

	getNextLevel() {
		return this.levelHandler.currentLevel + 1
	}
}
