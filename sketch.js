const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint




function setup() {

  engine = Engine.create();
  world = engine.world;


  createCanvas(800,400);
  

  box1 = new Box(230,225,30,40)
  box2 = new Box(260,235,30,40)
  box3 = new Box(290,235,30,40)
  box4 = new Box(320,235,30,40)
  box5 = new Box(350,235,30,40)
  box6 = new Box(260,195,30,40)
  box7 = new Box(290,195,30,40)
  box8 = new Box(320,155,30,40)
  //topist
  box9 = new Box(290,155,30,40)
 
  ground = new Ground(290,280,200,20)

  ground1 = new Ground(610,350,200,20)
  box11 = new Box(540,225,30,40)
  box22 = new Box(570,235,30,40)
  box33 = new Box(600,235,30,40)
  box44= new Box(630,235,30,40)
  box55= new Box(660,235,30,40)
  box66= new Box(570,195,30,40)
  box77= new Box(600,195,30,40)
  box88 = new Box(630,155,30,40)
  //topist123
  box99 = new Box(600,155,30,40)

  circle = new Hey(500,100,500,500)

  chain = new Chain(circle.body ,{x:500,y:100} , 10, 0.04)
  
}

function draw() {
  background("yellow");  
Engine.update(engine);
 
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box11.display();
  box22.display();
  box33.display();
  box44.display();
  box55.display();
  box66.display();
  box77.display();
  box88.display();
  box99.display();
  ground.display();
  ground1.display();
 circle.display();
 chain.display();
  
}
function mouseDragged(){

  Matter.Body.setPosition(circle.body,{x:mouseX , y:mouseY})
  
      
  }
  
  function mouseReleased(){
  chain.fly();
  mouseDragged=false
  
  
  }