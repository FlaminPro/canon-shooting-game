class CannonBall extends BaseBall{
    constructor(_x,_y,_radius){
      super(_x,_y,_radius);
      var options = {
      isStatic:false   
      }
      this.radius=_radius;
      this.body=Bodies.circle(_x,_y,this.radius,options);

      World.add(world,this.body);  
    };
    
    display() {
      var pos=this.body.position;
    
      fill ("red");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,this.radius);
      
    }
}
