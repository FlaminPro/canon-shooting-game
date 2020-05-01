


class EnemyFire{
  constructor(_x){
    this.x  =_x||0;
    this.y = random(-height/2,-10);
    this.yspeed=.01;
    this.z  = random(0, 20);
    this.dropLen = 20;
    this.thick = 1;
    this.gravity=0.1;
  }

  reset (){
    this.x = random(600,width);
    this.y = random(-height/2,-10);
    this.yspeed = random(2,4);
    this.z  = random(0, 20); 
    this.dropLen = map(this.z, 4,20,3,10);
    this.thick = map(this.dropLen,0,20,4,8);
  }

  fall() { 
    this.y = this.y + this.yspeed; 
    this.gravity=map(this.z,0,20,0,0.5);
    this.yspeed += 0.01;
    this.yspeed = this.yspeed + this.gravity; 
    
    if (this.y > height) { 
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 2, 4);
    }
  }

  show() { 
    push();
    strokeWeight(this.thick); 
    
    stroke(200,0,40);
    
    
    line(this.x, this.y, this.x, this.y+this.dropLen); 
    pop();
  }
}
