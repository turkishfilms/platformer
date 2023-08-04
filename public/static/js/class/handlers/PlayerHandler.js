
/**
 * playerhandler manages players staate 
 * methods jump, addPlayer, removePlayer, signalplayerlostlife, signalPLayerGainLife, player physics happens here 
 * properties: physics
 * keyboard handled by game not player handler
 * 
 */


class PlayerHandler{
constructor({physics=new Physics(), currentLevelobstacles = []}={}){
this.players = []
this.physics = physics
this.currentLevelobstacles = this.currentLevelobstacles
}

jump = (player)=>{
    player.speed.y -=this.playerJumpSpeed
}


playerFeelsPhyics
update(){
    //every frame check collisions
}
}
