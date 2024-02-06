class RenderHandler {
	constructor(
		{ } = {}) {

	}
	show() {
		// show player 
		let { x, y, width, height } = game.playerHandler.getPlayerAsOptions()

		rect(x, y, width, height)

		let obstacles = game.levelHandler.getObstacles(game.getCurrentLevel())
		obstacles.forEach((obstacle) => {
			const {
				color: { r, g, b, a },
				size: { w, h },
				position: { x, y },
			} = obstacle;
			fill(r, g, b, a);
			rect(x, y, w, h);
		});
	}

}
