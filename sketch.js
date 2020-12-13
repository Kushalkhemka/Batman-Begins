const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;
const MouseConstraint=Matter.MouseConstraint;

var drops,umbrella;
let umbrella_anim;
let maxDrops=100;
var thunderbolt;

var thunderbolt_img1,thunderbolt_img2,thunderbolt_img3,thunderbolt_img4;

function preload(){

    umbrella_anim=loadAnimation("images/WalkingFrame/walking_1.png","images/WalkingFrame/walking_2.png","images/WalkingFrame/walking_3.png"
    ,"images/WalkingFrame/walking_4.png","images/WalkingFrame/walking_5.png","images/WalkingFrame/walking_6.png","images/WalkingFrame/walking_7.png"
    ,"images/WalkingFrame/walking_8.png")

    thunderbolt_img1=loadImage("images/thunderbolt/1.png");
    thunderbolt_img2=loadImage("images/thunderbolt/2.png");
    thunderbolt_img3=loadImage("images/thunderbolt/3.png");
    thunderbolt_img4=loadImage("images/thunderbolt/4.png");
    
}

function setup(){
   //To create canvas
   createCanvas(450,700);

   engine=Engine.create();  
   world=engine.world;

  
   thunderbolt=createSprite(200,300,100,100);
   thunderbolt.addImage(thunderbolt_img1);
    
   umbrella=new Umbrella(200,530,400,400);

   
}

function draw(){
    
    //To assign the background
    background("black");

    console.log(num);
    Engine.update(engine);

     for(i=0;i<maxDrops;i++)
    {
        drops.push(new Drop(random(0,400),random(0,400)));
    }

    var num=Math.round(random(1,4)); 
    switch(num)
    {
        case 1: thunderbolt.addImage(thunderbolt_img1);
            break;
        case 2: thunderbolt.addImage(thunderbolt_img2);
            break;
        case 3: thunderbolt.addImage(thunderbolt_img3);
            break;
        case 4: thunderbolt.addImage(thunderbolt_img4);
            break;
    }

    
  
 //  drops.update();

    umbrella.display();
    
   
}   

