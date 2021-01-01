var car,wall;
var speed,weight ;

function setup()
 {
  createCanvas(1250,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  wall = createSprite(1150,200,60,height/2)
}

function draw() 
{
     if(wall.x-car.x<(wall.width + car.width)/2)
  {
            car.velocityX = 0;
            car.x = wall.x - (wall.width+car.width)/2;
            var deformation = 0.5*weight*speed*speed/25509;
     if(deformation>190)
    {
            car.shapeColor = "red";
    }
     if(deformation<188&&deformation>105)
    {
            car.shapeColor = "blue";
    }
    if(deformation<105)
    {
            car.shapeColor = "pink";
    }
  }

  background(0);  
  drawSprites();
}