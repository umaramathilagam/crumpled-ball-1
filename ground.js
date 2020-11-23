class ground{
    constructor(x,y,w,h){
        var option = {
            isStatic: true,
           
        }
        this.body = Bodies.rectangle(x,y,w,h, option);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
        
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y,this.width, this.height);
    }
}