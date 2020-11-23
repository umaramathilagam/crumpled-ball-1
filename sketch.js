
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1, ground1, dustbin1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(width/2,height-30,width, 20);
	paper1 = new paper(100, 300, 40);
	dustbin1 = new dustbin(width-250, height-100, 20, 100);
	dustbin2 = new dustbin(width-150, height-50, 200, 20);
	dustbin3 = new dustbin(width-50, height-100, 20, 100);
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  ground1.display();
  paper1.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
  
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:65,y:-65});
	}
}

