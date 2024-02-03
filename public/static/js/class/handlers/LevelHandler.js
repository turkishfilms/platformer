
class LevelHandler {
	constructor({ levels } = {}) {
		this.levels = levels;
		this.currentLevel = 1;
	}

	update() {
		//every frame this is called
		this.show(this.currentLevel); //show the level
		//move the level
	}

	show(levelNumber) {
		const level = this.levels[levelNumber - 1]
		level.forEach((obstacle) => {
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
