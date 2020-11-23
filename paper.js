class paper{
    constructor(x,y,r){
        var option = {
            isStatic: false,
            restitution:0.4,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,r/2, option);
        this.r = r;
        World.add(world, this.body);
        
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("red");
        ellipse(pos.x, pos.y,this.r, this.r);
    }
}