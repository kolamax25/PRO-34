const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hero, monster, bg, platform, slingshot;
var b1, b2, b3, b4, b4, b5, b6, b7, b8, b9;

function preload() {
//preload the images here
bg = loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(1920, 800);
  // create sprites here
  engine = Engine.create();
    world = engine.world;
  hero = new Hero(350, 350, 400, 200);

  monster = new Monster(1550, 200, 300, 400)

  platform = new Ground(960, 600, 1500, 50);

  b1 = new Block(800, 100, 150, 150);
  b2 = new Block(800, 300, 150, 150);
  b3 = new Block(800, 400, 150, 150);

  b4 = new Block(950, 100, 150, 150);
  b5 = new Block(950, 300, 150, 150);
  b6 = new Block(950, 400, 150, 150);
  
  b7 = new Block(1100, 100, 150, 150);
  b8 = new Block(1100, 300, 150, 150);
  b9 = new Block(1100, 400, 150, 150);
  
  slingshot = new Slingshot(hero.body,{x:350,y:350});
  
}

function draw() {
  Engine.update(engine);
  background(bg);

  hero.display();

  platform.display();

  monster.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y:mouseY });
}
function mouseReleased(){
  slingshot.fly();
}
