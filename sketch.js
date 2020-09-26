const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies

var myengine,myworld;
var object, ball, ground;

function setup(){
  createCanvas(400,400)
  myengine = Engine.create();
  myworld = myengine.world;

  object= Bodies.rectangle(100,200,40,40,{restitution:0.7})
  World.add(myworld,object)
  var g1={
    isStatic:true
  }
ground=Bodies.rectangle(200,390,200,20,g1)
World.add(myworld,ground)
var b1={
restitution:0.7

}
ball=Bodies.circle(200,100,40,b1)
World.add(myworld,ball)

  console.log(ball)
  console.log(object.position.x)
  console.log(object.position.y)
}


function draw(){

background(30);

Engine.update(myengine)

ellipseMode(CENTER)
ellipse(ball.position.x,ball.position.y,40,40)

rectMode(CENTER)
rect(object.position.x, object.position.y,40,40)

rectMode(CENTER)
rect(ground.position.x, ground.position.y,400,20)

}
