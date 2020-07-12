class Player{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.polygon(x, y, 6, 20, [options])
        this.x = x;
        this.y = y;
        this.image = loadImage("sprites/hexagon.png");
        World.add(this.body,world);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        image(this.image,this.x, this.y,5,20);
        fill("yellow");
        pop();
    }
}