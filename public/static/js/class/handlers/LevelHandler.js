/*
--LevelHandler
--Levels
--Physics

methods
--collides

*/



/**
 *]

let level = levelData.level1Obstacles

let l1Spikes = []
const FLOOR_OFFSET = 10
const FLOOR_DEPTH = 50
const NUMBER_OF_SPIKES = 36

function drawRectBody(body) {
  const w = body.width;
  const h = body.height;
  const y = body.position.y;
  const x = body.position.x - w / 2;

  rect(x, y, w, h);
}

 * **/
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
showLevel1(){
this.show(this.levels[0])
  }
  show(level) {
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
