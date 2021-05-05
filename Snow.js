class Snow {
    constructor(x, y,c) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.r = 10;
        this.image=loadImage("snow4.webp")
        this.body = Bodies.circle(x, y, this.r, options);
        this.c=color(random(0,255), random(0,255),random(0,255))
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,10,400,20,20)
        noStroke();
        fill(this.c);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};