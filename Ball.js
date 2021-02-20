class Ball{
    constructor(x,y,width,height){
        var options
        options = {frictionAir: 0.005, density: 2}
         this.ballBody = Bodies.rectangle(x,y,width,height,options)
         this.width = width
         this.height = height
         World.add(world,this.ballBody)
    }    
  
    display(){
       var pos = this.ballBody.position;
       var angle = this.ballBody.angle;
       push()
       translate(pos.x, pos.y)
       rotate(angle)
       stroke("brown");
       fill("silver")
       strokeWeight(5)
       ellipse(0,0,this.width,this.height);
       pop()
    }
  }
  