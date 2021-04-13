class Obstacles {
constructor(y, size){
this.body=createSprite(1200,y,10,80)
this.body.addImage("Obstaclesimg", pillarimg)
this.body.debug = true;
this.body.scale = size
this.body.setCollider("rectangle", 0,0,80,150)
this.body.lifetime = 1200/3
    }
spawn(){
    this.body.velocityX = -3
} 
}