var dog,sadDog,happyDog;
var milkbottol;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
 milkbottol1.loadImage("Images/Milk.png")
    milkbottol=loadAnimation("Images/milkImage.png")

}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  milkbottol=createSprite(400,200,20,20);
  milkbottol.addAnimation("milkImage.png");

}

function draw() {
  background(46,139,87);
  drawSprites();





}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
