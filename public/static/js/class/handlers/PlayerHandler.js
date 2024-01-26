/**
 * playerhandler manages players staate
 * methods jump, addPlayer, removePlayer, signalplayerlostlife, signalPLayerGainLife, player physics happens here
 * properties: physicsX
 * keyboard handled by game not player handler
 *
 */

class PlayerHandler {
  constructor({
		player= new Player(),
    currentLevelobstacles = []
  } = {}) {
    this.players = [player];
    this.currentLevelobstacles = currentLevelobstacles;
   
  }

  showPlayer() {
    const { color: { r, g, b, a }, size: { width: w, height: h }, position: { x, y } } = this.players[0]
    fill(r, g, b, a)
    ellipse(x, y, w, h)


  }

  updateCurrentLevelObstacles(obstacles) {
    this.currentLevelobstacles = [];
    this.currentLevelobstacles = obstacles;
  }

  didPlayerHitLevelBoundary({
    position,
    size
  }, levelBoundaries) {
    if (position.x + size.width >= levelBoundaries.RIGHTSIDE) return true; //left side
    //bottom
    //top
  }

  jump(jumpSpeed) {
    this.players[0].speed.ySpeed -= jumpSpeed
  }

  movePlayer2(direction) {
    this.players[0].position.x += direction
  }

  movePlayer(direction) {
    // this.players[0].x += direction
    const player = Composite.allBodies(engine.world).filter(
      (body) => body.id == 1
    )[0];
    console.log(player);
    // player.position.x += direction
    Matter.Body.applyForce(
      player,
      Matter.Vector.create(direction > 0 ? 0 : 10000, player.position.y),
      direction
    );
  }
  movePlayer(direction) {
    // this.players[0].x += direction
    const player = Composite.allBodies(engine.world).filter(body => body.id == 1)
    player[0].position.x += direction

  }

  addPlayer(player) {
    this.players.push(player)
  }

  // playerFeelsPhyics;
  update() {
    //every frame check collisions

  }
  playercollision(player, obstacle) {
    //code for make the player doesn't phase through walls
    /**

   */
    if (typeof obstacle == Spike) {
      this.reset()
    } else if (typeof obstacle == Obstacle) {

    } else if (typeof obstacle == Disappear) {
      obstacle.Disappear()
    }
  }

  /**
   * returns true if colliding false otherwise
   * @param {number} x1 player x 
   * @param {number} y1 player y 
   * @param {number} w1 player width
   * @param {number} h1 player height
   * @param {number} x2 obstacle x 
   * @param {number} y2 obstacle y 
   * @param {number} w2 obstacle width
   * @param {number} h2 obstacle height
   * @returns {bool}
   */
  checkCollided(x1, y1, w1, h1, x2, y2, w2, h2) {
    return !(x1 + w1 < x2 || y1 + h1 < y2 || x1 > x2 + w2 || y2 + h2 < y1)

  }
  gravityForce(player) {
    this.player.position

  }


  show() {
    ellipse(
      this.players[0].position.x,
      this.players[0].position.y,
      this.players[0].size.width
    );
  }

  losesLife(player = this.players[0], numberOfLives) {
    for (let index = 0; index < numberOfLives; index++) {
      if (this.lives == 0) {
        this.die(player)
        break
      }
      player.livesminus()
    }
  }

  die() {
    console.log("you are really dead")
  }
}
