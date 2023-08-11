/*
--LevelHandler
--Levels
--Physics

methods
--collides

*/

class LevelHandler {
  constructor({ levels = [] } = {}) {
    this.levels = levels;
    this.currentLevel = 0;
  }

  update() {
    //every frame this is called
    this.show(this.currentLevel); //show the level
    //move the level
  }

  show(level) {
    level.obstacles.forEach((obstacle) => {
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
