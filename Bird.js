class Bird extends BaseClass {
    constructor(x, y) {
      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
      };
      super(x, y, 50, 50, options);
      
      this.image=loadImage("sprites/bird.png")
    }


    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      
      super.display()
    }
  
  }
  