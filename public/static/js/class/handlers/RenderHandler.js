class RenderHandler {
	constructor() { }

	renderFrame() {
		const physics = game.physicsHandler
		const pHandler = game.playerHandler
		

		rectMode(CENTER)
		background(0)
		let { x, y, width, height } = pHandler.getPlayerAsOptions()
		let playerAngle = physics.getPlayerBody().angle
		imageMode(CENTER)
		this.showSprite({
			color: pHandler.canJump(pHandler.player) ? pHandler.player.color : { r: 255, g: 0, b: 0 },
			size: { w: width, h: height },
			position: { x: x, y: y },
			angle: playerAngle,
		},bob)
		this.showSprite({
			color: pHandler.canJump(pHandler.player) ? pHandler.player.color : { r: 255, g: 0, b: 0 },
			size: { w: width, h: height },
			position: { x: x, y: y },
			angle: playerAngle,
		},blackSteve)
		//this doesnt belong in renderhandler. have small show function in which the data is sent in
		physics.getObstaclePosition().map(obstacle => this.showRect(obstacle))
		this.showText(pHandler.player.lives, 80, 80)
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

	showText(userText, x, y) {
		text(userText, x, y)
	}

	showSprite(data,sprite) {
		const {
			color: { r, g, b, a } = { r: 255, g: 255, b: 255, a: 255 },
			size: { w, h },
			position: { x, y },
			angle = 0,
		} = data;

		translate(x, y)
		rotate(angle)
		fill(r, g, b, a);
		image(sprite, 0, 0, w, h)
		resetMatrix()
	}
backgroundChanger(userImage){
	const {width:w, height:h} = game.dimensions
	image(userImage,w/2,h/2,w,h)
	
}
deathScreen(){
	this.backgroundChanger(deathScreen)
	this.showText('You Died💀😵', 200,500)
}
}
