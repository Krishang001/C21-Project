
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftside;
var rightside;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_option={
		restitution:0.3,
		friction:0,
		density:1.2,
		render:{
		}
	}

	ball = Bodies.circle(400,100,20,ball_option);

    World.add(world,ball);

  ground = new Ground(width/2,380,width,10);
  leftside = new Ground(1100,330,10,90);
  rightside = new Ground(1300,330,10,90);
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("White");
  ellipse(ball.position.x,ball.position.y,30,30);
  ground.display();
  leftside.display();
  rightside.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode ===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-60})
	}
}



