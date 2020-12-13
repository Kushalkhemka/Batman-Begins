class Drop
{
    constructor(x,y,r)
    {
        var options={
            'friction':0.1,
            'restitution':0.3,
            'density':1.0
        }
        this.body=Bodies.circle(x,y,r,options);
        this.x=x;
        this.y=y;
        this.r=r;

        World.add(world,this.body);
    }

    update()
    {
        var pos=this.body.position;
        if(pos.y>height)
        {
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
        push();
        fill("blue");
        pop();
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}