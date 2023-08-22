/**
 * playerhandler manages players staate
 * methods jump, addPlayer, removePlayer, signalplayerlostlife, signalPLayerGainLife, player physics happens here
 * properties: physicsX
 * keyboard handled by game not player handler
 *
 */

class PlayerHandler {
  constructor({ physics = new Physics(), currentLevelobstacles = [] } = {}) {
    this.players = [];
    this.physics = physics;
    this.currentLevelobstacles = currentLevelobstacles;
  }

  updateCurrentLevelObstacles(obstacles) {
    this.currentLevelobstacles = [];
    this.currentLevelobstacles = obstacles;
  }

  didPlayerHitLevelBoundary({ position, size }, levelBoundaries) {
    if (position.x + size.width >= levelBoundaries.RIGHTSIDE) return true; //left side
    //bottom
    //top
  }

  jump(player) {
    player.speed.y -= this.playerJumpSpeed;
  }
movePlayer(direction){
  // this.players[0].x += direction
const player =Composite.allBodies(engine.world).filter(body=> body.id==1)
player[0].position.x += direction

}
addPlayer(player){
  this.players.push(player) 
}
  // playerFeelsPhyics;
  update() {
    //every frame check collisions
  }
  show(){
    ellipse(this.players[0].position.x,this.players[0].position.y,this.players[0].size.width)
  }
}
