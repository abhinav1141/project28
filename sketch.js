
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground,tree,treeimg;
var boy,boyimg;
var stone;
var mango1,mango2,mango3,mango4,mango5;
var attach;

function preload()
{
	treeimg=loadImage("tree.png");
	boyimg=loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(500,625,1000,20);
	stone=new Stone(100,460,20);
	mango1=new Mango(600,200,60);
	mango2=new Mango(855,325,60);
	mango3=new Mango(670,260,60);
	mango4=new Mango(730,200,60);
	mango5=new Mango(710,320,60)

attach=new Throw(stone.body,{x:100,y:465});

tree=createSprite(775,368);
tree.addImage(treeimg);
tree.scale=0.4;

boy=createSprite(160,550);
boy.addImage(boyimg);
boy.scale=0.1;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill("black");
  textSize(10);

 
  
   drawSprites();
   stone.display();
   ground.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();

   detectCollision(stone,mango1);
   detectCollision(stone,mango2);
   detectCollision(stone,mango3);
   detectCollision(stone,mango4);
   detectCollision(stone,mango5);
 
}


function mouseDragged()
{
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased()
{
	attach.fly();
}

function detectCollision(stone,mango)
{
mangoBodyPosition=mango.body.position;
stoneBodyPosition=stone.body.position;
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.radius+stone.radius){
	Matter.Body.setStatic(mango.body,false)
}
}

function keyPressed() 
{
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:460})
		attach.attach();
	}
}
