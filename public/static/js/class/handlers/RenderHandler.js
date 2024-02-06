class RenderHandler {
	constructor(
		{ } = {}) {
	}

	show() {
		let { x, y, width, height } = game.playerHandler.getPlayerAsOptions()
		this.showRect({ color: game.playerHandler.players[0].color, size: { w: width, h: height }, position: { x: x, y: y } })

		let obstacles = game.levelHandler.getObstacles(game.getCurrentLevel())
		obstacles.forEach(obstacle => this.showRect(obstacle))
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
