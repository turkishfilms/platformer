class RenderHandler {
	constructor() { }

	renderFrame() {
		const physics = game.physicsHandler
		const pHandler = game.playerHandler
		//this.backgroundChanger(assets.spiderSheet);
		background(0)
		rectMode(CENTER)
		let { x, y, width, height } = pHandler.getPlayerAsOptions()
		let playerAngle = physics.getPlayerBody().angle
		const data = {
			color: pHandler.canJump(pHandler.player) ? pHandler.player.color : { r: 255, g: 0, b: 0 },
			size: { w: width, h: height },
			position: { x: x, y: y }
,			angle: playerAngle,
		}
		const frameCycle = 2
		if (frameCount % frameCycle < frameCycle / 2) {
			this.showSprite(data, assets.spiderSprite[frameCount%10])
			this.showSprite(data, assets.spiderSprite[frameCount%10])
		} else {
			this.showSprite(data, assets.spiderSprite[frameCount%10])
			this.showSprite(data, assets.spiderSprite[0])
		}
		//this doesnt belong in renderhandler. have small show function in which the data is sent in
		physics.getObstaclePosition().map(obstacle => this.showSprite(obstacle, assets.cryskull))
		this.showText(pHandler.player.lives, 80, 80)
	}
	backgroundChanger(userImage){
		const {width:w, height:h} = game.dimensions
		image(userImage,w/2,h/2,w,h)
		
	}
	showRect(data) {
		const {
			color: {
				r,
				g,
				b,
				a
			} = {
				r: 255,
				g: 255,
				b: 255,
				a: 255
			},
			size: {
				w,
				h
			},
			position: {
				x,
				y
			},
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
	showSprite(data, sprite) {
		const {
			color: {
				r,
				g,
				b,
				a
			} = {
				r: 255,
				g: 255,
				b: 255,
				a: 255
			},
			size: {
				w,
				h
			},
			position: {
				x,
				y
			},
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
}
