
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	dustbin1 = new Dustbin (450,500,200,10);
	dustbin2 = new Dustbin (550,450,10,50);
	dustbin3 = new Dustbin (350,450,10,50);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
	}
}


