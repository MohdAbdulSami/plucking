class slingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    fly(){
this.slingshot.bodyA=null;
    }

    launch(bodyA){
        this.slingshot.bodyA=bodyA;
    
    }
    display(){
      
    }
}





