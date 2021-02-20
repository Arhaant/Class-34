const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,550,1200,100)

    box1 = new Box(400,450,100,100)
    box2 = new Box(400,350,100,100)
    box3 = new Box(400,250,100,100)
    box4 = new Box(400,150,100,100)


    ball = new Ball(1200,300,75,75)
    //ball.ballBody.velocity.x = -5

    rope = new Rope(ball.ballBody, {x: 500, y: -150})


}

function draw(){
    background("black");

    Engine.update(engine)

    







    ground.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    ball.display()
    rope.display()
}