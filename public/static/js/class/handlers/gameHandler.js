class GameHandler {
	constructor({
		levels = [],
		physics = new Physics(),
		player = new Player(),
		playerHandler = new PlayerHandler({
			player: player
		}),
		levelHandler = new LevelHandler({
			levels: levels
		}),
		physicsHandler = new PhysicsHandler({
			physics: physics
		}),
		renderHandler = new RenderHandler(),
		dimensions = {
			width: 100,
			height: 100
		}
	} = {}) {
		this.playerHandler = playerHandler;
		this.levelHandler = levelHandler;
		this.physicsHandler = physicsHandler
		this.renderHandler = renderHandler
		this.dimensions = dimensions
		this.isPaused = true
	this.gameStart()
		
	}
gameStart(){
	image(assets.creeper)
	text("start here", 50 ,50 )
	this.startGameButton("start LEVEL!!! >:)")
	this.isPaused = true
}
	nextFrame() {
		if (this.isPaused) return
		this.physicsHandler.simulateWorldByOneFrame()
		this.renderHandler.renderFrame()
		if (this.physicsHandler.isPlayerOffScreen()) this.playerHandler.resetPlayer()
		this.playerHandler.updatePlayer()
	}

	levelInit() {
		const currentLevelNumber = this.getCurrentLevel()
		const currrentLevel = this.levelHandler.getLevelData(currentLevelNumber)
		const physicsHandler = new PhysicsHandler({
			physics: currrentLevel.physics
		}) //FIXME physics is beng added in a wierd way fix it
		this.playerHandler.addPlayer(currrentLevel.player[0])
		physicsHandler.addPlayer(this.playerHandler.getPlayerAsOptions())
		physicsHandler.addObstacles(currrentLevel.obstacles, {
			isStatic: true
		})
		this.physicsHandler = physicsHandler
	}

	movePlayerRight() {
		this.playerHandler.movePlayer({
			x: 1,
			y: 0
		})
	}

	movePlayerLeft() {
		this.playerHandler.movePlayer({
			x: -1,
			y: 0
		})
	}

	movePlayerUp() {
		this.playerHandler.movePlayer({
			x: 0,
			y: -1
		})
	}

	movePlayerDown() {
		this.playerHandler.movePlayer({
			x: 0,
			y: 1
		})
	}

	getCurrentLevel() {
		return this.levelHandler.currentLevel
	}

	resetLevel() {
		this.levelInit()
	}

	setCurrentLevel(levelNumber) {
		this.levelHandler.setCurrentLevel(levelNumber)
	}

	getPreviousLevel() {
		return this.levelHandler.getPreviousLevel()
	}

	getNextLevel() {
		const nextLevel = this.levelHandler.getNextLevel()
		return nextLevel
	}

	nextLevel() {
		this.setCurrentLevel(this.getNextLevel())
		this.levelInit()
	}

	previousLevel() {
		this.setCurrentLevel(this.getPreviousLevel())
		this.levelInit()
	}

	togglePaused() {
		this.isPaused = this.isPaused ? false : true
	}

	pauseDeath() {
		this.isPaused = true
		this.renderHandler.deathScreen()
	}

	addLives() {
		game.playerHandler.player.lives++
	}
deathButton(name){
  let button = createButton(name);
  button.position(windowWidth-100, windowHeight/2);
  button.mousePressed(this.startOver)
  
}

	startOver(){
		game.setCurrentLevel(1)
		game.togglePaused()
    game.startGameButton.hide() 
	}
	startButton(name) {
		let button = createButton(name);
		button.position(windowWidth-100, windowHeight/2);
		button.mousePressed(this.startOver)
	}
	startGame(){
		game.levelInit()
		game.togglePaused()
		game.startGameButton.hide() 
	}
	startGameButton(name){
		 this.startGameButton = createButton(name);
		this.startGameButton.position(windowWidth-100, windowHeight/2);
		this.startGameButton.mousePressed(this.startGame)
	
	}
}