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
    this.currentLevelobstacles = currentLevelobstacles
    this.jumpheight = 20;
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
    // the y will go higher = jump
    player.postion.y -= this.jumpheight

  }

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