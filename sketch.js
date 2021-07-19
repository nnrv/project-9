
function setup() {
  createCanvas(400,400);
}

function draw() {
  background("black");
  
if (keyIsDown(DOWN_ARROW))
{
  background("darkred");
  
  }
if (keyIsDown(UP_ARROW))
{
  background("red");
   
}
if (keyIsDown(LEFT_ARROW))
{
  background("orange");
  
}
if (keyIsDown(RIGHT_ARROW))
{
  background("yellow");
       
}
drawSprites();
}


