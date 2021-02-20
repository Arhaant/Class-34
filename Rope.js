class Rope{
    constructor(body1,point2) {
        var options = {
            bodyA : body1,
            pointB : point2,
            stiffness : 1,
            length : 600
        }
        
        this.rope = Constraint.create(options)
        this.pointB = point2
        World.add(world,this.rope)
      }
      display(){

        if(this.rope.bodyA){
        var pointA =this.rope.bodyA.position
        var pointB =this.rope.pointB
        push()
      

        stroke("green")
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        pop()
      }
    }
}