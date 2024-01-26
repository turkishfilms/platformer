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
	}

	gameInit() {
		this.physicsHandler.addItems(this.playerHandler.players[0], 0) //adding player to physics handler
		this.physicsHandler.addItems(this.levelHandler.levels[this.getCurrentLevel()], 1) //adding current level obtacles to physics handler
	}

	gameStart() {
		this.physicsHandler.clear()//clears obstacles
		this.physicsHandler.addItems(this.levelHandler.levels[this.getCurrentLevel()], 1)
	}

	nextFrame() {
		/**
		 * each frame this gets called
		 * sometimes game will be in a level
		 * sometimes it will be on a death screen
		 *
		* **/
		this.show()
		// this.physicsHandler.simulateWorldByOneFrame()
	}

	levelShow(level) {
		level.forEach(obstacle => {
			rect(obstacle.x, obstacle.y, obstacle.w, obstacle.h)
		})
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
		this.levelShow(this.levelHandler.getLevelObstacles())
		this.playerShow2(this.playerHandler.players[0])
		this.renderHandler.show(this.physicsHandler.getObstaclePosition())
	}

	movePlayerRight() {
		this.playerHandler.movePlayer(1)
	}
movePlayerUp(){
	this.playerHandler.jump(player)
}
	movePlayerLeft() {

		this.playerHandler.movePlayer(-1)
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
