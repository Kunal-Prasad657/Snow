const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snow = [];

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
   world = engine.world;
}

function preload(){
  
  bg = loadImage("snow3.jpg");
  snow=loadImage("snow4.jpg");
}

function draw() {
  background(bg);  
  drawSprites();
  
        }
for(var i = 0; i < maxsnow; i++){
      snow[i].display();
      snow[i].update();
  }