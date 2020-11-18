class Throw{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10,
            thickness:0.4
        }
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }
    attach()
    {
        this.throw.bodyA=stone.body;
        
    }

    display(){
        if(this.throw.bodyA){
            var pointA = this.throw.bodyA.position;
            var pointB = this.throw.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
      
    }
    
    fly(){
        this.throw.bodyA=null;
    }

    }
   
    
    