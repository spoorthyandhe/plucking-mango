class Stone{
    constructor(x, y,radius) {
 
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.x=x;
        this.y=y;
       this.radius=radius;
        this.image = loadImage("stone.png");
        this.body = Bodies.circle(this.x,this.y,this.radius, options);
        World.add(world,this.body);
      }
      display(){
        var stonepos=this.body.position;
        var angle = this.body.angle; 
        push();
        translate(stonepos.x,stonepos.y);
        rotate(angle)
        //rectMode(CENTER);
        rotate(this.body.angle);
        fill(255,0,255)
        imageMode(CENTER);
        ellipseMode(CENTER)
        image(this.image,0,0,60,60)
        pop();
      }
}