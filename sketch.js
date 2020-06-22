const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;

var projectile, sling;
var engine, world;
var ground, ground2;
var box1, box2, box3, box4, box5; 
var box6, box7, box8, box9, box10; 
var box11, box12, box13, box14, box15;
var box16, box17, box18, box19, box20;
var box21, box22, box23, box24, box25;
var gameState;

function setup(){
  var canvas = createCanvas(1000,400);

  gameState = "onSling";

  engine = Engine.create();
  world = engine.world;

  projectile = new Polygon(200,100,45,45);
  //1st tower:
    //ground
    ground = new Ground(480,380,230,10);

    //bottom layer
    box1 = new Box(390,355,30,40,"green");
    box2 = new Box(420,355,30,40,"green");
    box3 = new Box(450,355,30,40,"green");
    box4 = new Box(480,355,30,40,"green");
    box5 = new Box(510,355,30,40,"green");
    box6 = new Box(540,355,30,40,"green");
    box7 = new Box(570,355,30,40,"green");

    //second-from-bottom layer
    box8 = new Box(420,315,30,40,"blue");
    box9 = new Box(450,315,30,40,"blue");
    box10 = new Box(480,315,30,40,"blue");
    box11 = new Box(510,315,30,40,"blue");
    box12 = new Box(540,315,30,40,"blue");

    //second-from-top layer
    box13 = new Box(450,275,30,40,"pink");
    box14 = new Box(480,275,30,40,"pink");
    box15 = new Box(510,275,30,40,"pink");

    //top layer
    box16 = new Box(480,235,30,40,"brown");

  //2nd tower:
    //ground
    ground2 = new Ground(780,210,170,10);

    //bottom layer
    box17 = new Box(720,185,30,40,"blue");
    box18 = new Box(750,185,30,40,"blue");
    box19 = new Box(780,185,30,40,"blue");
    box20 = new Box(810,185,30,40,"blue");
    box21 = new Box(840,185,30,40,"blue");

    //middle layer
    box22 = new Box(750,145,30,40,"green");
    box23 = new Box(780,145,30,40,"green");
    box24 = new Box(810,145,30,40,"green");

    //top layer
    box25 = new Box(780,105,30,40,"pink");

  sling = new Sling(projectile.body,{x:200,y:190});
}

function draw() {
  background(160);
  Engine.update(engine);

  ground.display();
  ground2.display();
  sling.display();
  projectile.display();

  //1st tower:
    //bottom layer display
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    //second-from-bottom layer display
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    //second-from-top layer display
    box13.display();
    box14.display()
    box15.display();

    //top layer display
    box16.display();

  //2nd tower:
    //bottom layer
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    //middle layer
    box22.display();
    box23.display();
    box24.display();

    //top layer
    box25.display();

  fill(0);
  text("Press space for another chance if the hexagon goes out of the screen or stops.",20,20);
}

function mouseDragged(){
  if (gameState != "launched"){
    Body.setPosition(projectile.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  sling.fly();
  gameState = "launched";
}
function keyPressed(){
  if ((keyCode === 32 && projectile.body.speed <= 1) || (keyCode === 32 && projectile.body.position.y > 400) || (keyCode === 32 && projectile.body.position.x > 1000) || (keyCode === 32 && projectile.body.position.y < 0) || (keyCode === 32 && projectile.body.position.x < 0)){
    Body.setPosition(projectile.body, {x: 200, y: 100});
    sling.attach(projectile.body);
    gameState = "onSling";
  }
}