class BaseBall {
  constructor(_x,_y,_radius) {
    var options ={
        inertia: 5,
   
        isStatic :true
    }
     
    this.body=Bodies.circle(_x,_y,_radius,options);
    this.radius=_radius;
    World.add(world,this.body);
  }

  display() {
    var pos=this.body.position;
    
    push();
    fill ("black");
    push();
    translate(pos.x,pos.y);
    // rotate(angle);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius);
    pop();
  }
}
