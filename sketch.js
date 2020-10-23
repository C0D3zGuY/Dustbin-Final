
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var engine,world;
var ground1;
var dust1,dust2,dust3;
var paper1;

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400,680,800,10);
	dust1 = new Dustbin(720,650,70,10);
	paper1 = new Paper(50,660,10,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  dust1.display();
  paper1.display();
  drawSprites();
  keyPressed();
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:3,y:-2})
	}
	if (keyCode === 16){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-20,y:10})
	}
}



