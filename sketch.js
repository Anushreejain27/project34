const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var bg
function preload() {
//preload the images here
bg= loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(2000, 800);
  // create sprites here
 
  engine = Engine.create();
  world = engine.world;

  g1=new Ground(550,770,2000,50)


  block1= new block(1500,700,80,80)
  block2=new block(1500,700-80,80,80)
  block3=new block(1500,700-80-80,80,80)
  block4= new block(1500,700-80-80-80,80,80)
  block5=new block(1500,700-80-80-80-80,80,80)
  block6=new block(1500,700-80-80-80-80-80,80,80)
  //other line
  block7= new block(1400,700,80,80)
  block8= new block(1400,700-80,80,80)
  block9= new block(1400,700-80-80,80,80)
  block10= new block(1400,700-80-80-80,80,80)
  block11= new block(1400,700-80-80-80-80,80,80)

  block12= new block(1300,700,80,80)
  block13= new block(1300,700-80,80,80)
  block14= new block(1300,700-80-80,80,80)
  block15= new block(1300,700-80-80-80,80,80)
  block16= new block(1300,700-80-80-80-80,80,80)
  block17= new block(1300,700-80-80-80-80-80,80,80)
  block18= new block(1300,700-80-80-80-80-80-80,80,80)
   
  
  blocka= new block(1200,700,80,80)
  blocks=new block(1200,700-80,80,80)
  blockd=new block(1200,700-80-80,80,80)
  blockf= new block(1200,700-80-80-80,80,80)
  blockg=new block(1200,700-80-80-80-80,80,80)
  blockh=new block(1200,700-80-80-80-80-80,80,80)


 m1= new Monster(1680,150,300,300)



h1= new Hero(600,300,600,200)


s1= new slingshot(h1.body,{x:600,y:300})




}

function draw() {
  background(bg);
  background(0)

  Engine.update(engine);
g1.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()

  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()

  block18.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()

  blocka.display()
  blocks.display()
  blockd.display()
  blockf.display()
  blockg.display()
  blockh.display()

m1.display()
h1.display()
s1.display()

}
function mouseDragged(){
Matter.Body.setPosition(h1.body,{x:mouseX,y:mouseY})

}




















