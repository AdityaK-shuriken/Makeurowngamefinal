class Bubble {
    constructor(x,y){
    this.body=createSprite(10,10)
    this.body.addImage("Bubbleok.png", bubbleimg)
    //this.body.debug = true;
    //this.body.scale = size
    //this.body.setCollider("rectangle", 0,0,80,150)
    this.body.lifetime = 1200/3
        }
    blow(){
        this.body.velocityX = random(-3,3)
        this.body.velocityY = random(-3,3)
    } 
    }