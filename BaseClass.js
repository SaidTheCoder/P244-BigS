class BaseClass {
    constructor(x, y,width,height) {
        var options = {
          'density':1.2,
          'friction': 0.5,
          'restitution':0.3
        };
        this.body = Bodies.rectangle(x, y, 20,20, options);
        this.width = 20;
        this.height = 20;
        World.add(world, this.body);
      };
      display(){
    
        push();
        translate(this.body.position.x,this.body.position.y);
        pop();
      };
    };
    