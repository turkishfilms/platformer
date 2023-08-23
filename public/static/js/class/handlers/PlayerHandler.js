/**
 * playerhandler manages players staate
 * methods jump, addPlayer, removePlayer, signalplayerlostlife, signalPLayerGainLife, player physics happens here
 * properties: physicsX
 * keyboard handled by game not player handler
 *
 */

class PlayerHandler {
  constructor({
    physics = new Physics(),
    currentLevelobstacles = []
  } = {}) {
    this.players = [];
    this.physics = physics;
    this.currentLevelobstacles = currentLevelobstacles;
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

  jump(player) {
<<<<<<< HEAD
    // the y will go higher = jump
    player.postion.y -= this.jumpheight

=======
    player.speed.y -= this.playerJumpSpeed;
>>>>>>> 29e93f42df313f7901538cfa2a6b23c321d1123d
  }
<<<<<<< HEAD
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
=======
movePlayer(direction){
  // this.players[0].x += direction
const player =Composite.allBodies(engine.world).filter(body=> body.id==1)
player[0].position.x += direction

<<<<<<< HEAD
=======
}
addPlayer(player){
  this.players.push(player) 
}
>>>>>>> 290fafd8a3730a7a18c4f15ca5363a2965e4b91d
  // playerFeelsPhyics;
>>>>>>> 29e93f42df313f7901538cfa2a6b23c321d1123d
  update() {
    //every frame check collisions
    
  }
playercollision(player, obstacle){
  //code for make the player doesn't phase through walls
  /**
 
   */
  if ( typeof obstacle == Spike) { 
this.reset()
  }
  else if (typeof obstacle == Obstacle){

  }
  else if (typeof obstacle == Disappear ){
obstacle.Disappear()
  }
<<<<<<< HEAD
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
checkCollided(x1,y1,w1,h1,x2,y2,w2,h2){
  return !(x1 + w1< x2 || y1 + h1 < y2|| x1> x2 + w2 || y2 + h2 < y1)

}
  gravityForce(player){
this.player.position

}

  moveplayer(player, direction) {
    //directioin will be negative when we want to go to the left
    //posiitve if to the right
  
    player.x += direction
  }
}
=======
  show() {
    ellipse(
      this.players[0].position.x,
      this.players[0].position.y,
      this.players[0].size.width
    );
  }
}
>>>>>>> 29e93f42df313f7901538cfa2a6b23c321d1123d
