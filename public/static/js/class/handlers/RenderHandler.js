class RenderHandler {
	constructor() { }

	show() {
		const physics = game.physicsHandler
		const pHandler = game.playerHandler

		rectMode(CENTER)
		background(0)
		let { x, y, width, height } = pHandler.getPlayerAsOptions()
		let playerAngle = physics.getPlayerBody().angle

		this.showRect({
			color: pHandler.players[0].color,
			size: { w: width, h: height },
			position: { x: x, y: y },
			angle: playerAngle,
		})
		//this doesnt belong in renderhandler. have small show function in which the data is sent in
		physics.getObstaclePosition().map(obstacle => this.showRect(obstacle))
	}

	showRect(data) {
		const {
			color: { r, g, b, a } = { r: 255, g: 255, b: 255, a: 255 },
			size: { w, h },
			position: { x, y },
			angle = 0,
		} = data;

		translate(x, y)
		rotate(angle)
		fill(r, g, b, a);
		rect(0, 0, w, h);
		resetMatrix()
	}

}
