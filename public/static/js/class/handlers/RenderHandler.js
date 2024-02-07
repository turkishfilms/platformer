class RenderHandler {
	constructor() { }

	show() {
		let { x, y, width, height } = game.playerHandler.getPlayerAsOptions()
		this.showRect({ color: game.playerHandler.players[0].color, size: { w: width, h: height }, position: { x: x, y: y } })
		//this doesnt belong in renderhandler. have small show function in which the data is sent in
		// let obstacles = game.levelHandler.getObstacles(game.getCurrentLevel())
		let obstacles2 = game.physicsHandler.getObstaclePosition()
		let obstacles3 = obstacles2.map(obs => {
			return { size: { w: obs.bounds.max.y - obs.bounds.min.y, h: obs.bounds.max.x - obs.bounds.min.x }, position: { x: obs.position.x, y: obs.position.y } }
		})
		obstacles3.forEach(obstacle => this.showRect(obstacle))
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
