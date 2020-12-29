const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

function preload()
{
	
}

var roof, r1, r2, r3, r4, r5;
var BO1, BO2, BO3, BO4, BO5;
var BobDiamter;
var world; 

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	BobDiameter = 25;
	//Create the Bodies Here.
	roof = new Roof(430,200,320,30);

	BO1 = new Bob(340,450,25);
	BO2 = new Bob(390,450,25);
	BO3 = new Bob(440,450,25);
	BO4 = new Bob(490,450,25);
	BO5 = new Bob(540,450,25);

	 r1 = new Rope(BO1.body, roof.body, -100, 0);
	World.add(world, r1);

	
	r2 = new Rope(BO2.body, roof.body, -50, 0);
	World.add(world, r2);

	r3 = new Rope(BO3.body, roof.body, 0, 0);
	World.add(world, r3);

	r4 = new Rope(BO4.body, roof.body, 50, 0);
	World.add(world, r4);

	r5 = new Rope(BO5.body, roof.body, 100, 0);
	World.add(world, r5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200,200,200);

 r1.display();
 r2.display();
 r3.display();
 r4.display();
 r5.display();

 BO1.display();
 BO2.display();
 BO3.display();
 BO4.display();
 BO5.display();

 roof.display();

  drawSprites();
 
}

/*function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(BO1.body, BO1.body.posiiton, {x: -730, y: 0})
	}
}
*/

function mouseDragged() {
	Matter.Body.setPosition(BO1.body, { x: mouseX, y: mouseY });
}
  
