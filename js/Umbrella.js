class Umbrella
{
    constructor(x,y,width,height)
    {
       var options={
        isStatic:true
       } 

       this.body=Bodies.rectangle(x,y,width,height,options);
       this.x=x;
       this.y=y;
       this.width=width;
       this.height=height;

      this.image=loadImage("images/WalkingFrame/walking_1.png");
       World.add(world,this.body);
    }

    display()
    {
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
      //fill("white");
      //rect(this.x,this.y,this.width,this.height)
    }
}