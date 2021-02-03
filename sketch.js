var object1, object2,object3,object4,object5;

function setup() {
  createCanvas(1200,800);
  object1 = createSprite(600, 400, 50, 80);
  object1.shapeColor = "green";
  object1.debug = true;
  object2 = createSprite(400,200,80,30);
  object2.shapeColor = "green";
  object2.debug = true;
  object3=createSprite(200,100,40,50);
  object3.shapeColor="orange";
  object4=createSprite(100,250,20,20);
  object4.shapeColor="green";
  object4.velocityY=-2;
  object5=createSprite(100,70,20,20);
  object5.shapeColor="yellow";
  object5.velocityY=2;

}

function draw() {
  background(0,0,0);  
  object2.x = World.mouseX;
  object2.y = World.mouseY;
if(isTouching(object3,object2)){
object3.shapeColor="red";
object2.shapeColor="pink";

}
else{
object3.shapeColor="green";
object2.shapeColor="green";
}
 bounceOff(object4,object5);
  drawSprites();
}

