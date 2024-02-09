class RenderHandler {
	constructor() { }

	show() {
		rectMode(CENTER)
		background(0)
		const pHandler = game.playerHandler
		let { x, y, width, height } = pHandler.getPlayerAsOptions()
		this.showRect({
			color: pHandler.players[0].color,
			size: { w: width, h: height }, position: { x: x, y: y }
		})
		//this doesnt belong in renderhandler. have small show function in which the data is sent in
		// let obstacles = game.levelHandler.getObstacles(game.getCurrentLevel())
		const physics = game.physicsHandler
		physics.getObstaclePosition().map(obstacle => this.showRect(obstacle))
	}

	showRect(data) {
		const {
			color: { r, g, b, a } = { r: 255, g: 255, b: 255, a: 255 },
			size: { w, h },
			position: { x, y },
		} = data;
		fill(r, g, b, a);
		rect(x, y, w, h);
	}

}
