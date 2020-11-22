
class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 8
        }
        this.pointB=pointB;
        this.slingshot = Constraint.create(options);
        
        World.add(world, this.slingshot);
    }
    attach(body){
        this.slingshot.bodyA = body;
    }

fly()
{
    this.slingshot.bodyA=null;    
}

    display(){
        if(this.slingshot.bodyA){
        
        var pointA = this.slingshot.bodyA.position;
        var pointB= this.pointB;
        strokeWeight(4);

        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
    
}