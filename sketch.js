const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hr = hour();
var mn = minute();
var sc = second();

var engine, world;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES); 
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  text('Current hour:\n' + h, 5, 50);
  text('Current minute: \n' + m, 5, 50);
  text('Current second: \n' + s, 5, 50);

    scAngle = map(sc, 0, 60, 0, 360);
    fill(255, scAngle, 0);
    ellipse(width/2, height/2, d);

    push();
    rotate(scAngle);
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop();

  drawSprites();
}