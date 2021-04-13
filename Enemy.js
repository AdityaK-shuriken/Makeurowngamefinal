class Enemy{
constructor(){
this.body=createSprite(800, random(200,700), 20,20)

}
move() {
this.body.velocityX = (-3,-6)
this.body.velocityY = (-3,3)
}
}