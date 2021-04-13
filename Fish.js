class Fish {
    constructor(){
this.body=createSprite(200,200)
this.body.addImage("Flyingfish", fishimg)
this.body.scale=0.3;
this.body.debug = true;
    }
jump(){
    if(keyDown("space")){
        this.body.velocityY=-10
      }  
      //add Gravity
     this.body.velocityY = this.body.velocityY + 0.5
     this.body.collide(ground)
}
}