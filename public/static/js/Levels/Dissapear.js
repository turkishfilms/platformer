/**when the player has contact with the dissapear block, the block will hide and 
 * the player will fall through to their death
 */
class Dissapear {
    constructor(x=23, y=23, w=50, h=10, color=[r=150, g=150, b=150], hide = false) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.hide = hide;
    }
makeBLockDissapear(){
 this.w = 0
 this.h = 0
 this.x = 0
 this.y = 0
}
}

let obstacle1 = new Dissapear()