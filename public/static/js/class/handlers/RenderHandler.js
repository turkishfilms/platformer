
/**
 * @description Handles Showing Game Using p5.js
 * @class RenderHandler
 * @param {Object} backgroundColor - the background Color
 *
 *
 *
 * **/


class RenderHandler{
    constructor({
                color = {
                    red:50,
                    green:50,
                    blue:180
                }
            }={}){
        this.backgroundColor = color
    }
    show(){
        const {red,green,blue} = this.backgroundColor
        background(red,green,blue)

    }

}
