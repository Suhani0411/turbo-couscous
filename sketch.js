var b1,b8,b9,b10,b11,b12,b13,b14,b15,b16,gr,poly,sling,backgroundImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score=0;




/*function preload(){
  polyimg=loadImage("sprites/polygon.png");
}*/

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
 // createSprite(400, 200, 50, 50);
gr=new Ground(400,390,800,20);


poly = new Polygon(400, 665, 30, 30 );



sling=new SlingShot(poly.body,{x:100,y:200});


b1=new Ground(375,340,190,80)

b8=new Box(330,235,30,40);
b9=new Box(360,235,30,40);
b10=new Box(390,235,30,40);
b11=new Box(420,235,30,40);
b12=new Box(450,235,30,40);

b13=new Box(360,195,30,40);
b14=new Box(390,195,30,40);
b15=new Box(420,195,30,40);

b16=new Box(390,155,30,40);



  Engine.run(engine);

}

function draw() {
  Engine.update(engine);
  if(backgroundImg){
    background(backgroundImg);
    }
    
  gr.display();
  noStroke();
    textSize(35);
    fill("white");
    text("Score " + score,width-300,50);

  //console.log(polygon.x,polygon.y);

  //polysprite.x= polygon.position.x ;
  //polysprite.y= polygon.position.y ;

  //image(polyimg,polygon.position.x,polygon.position.y,40,40);


 b1.display();
 b8.display();
 b9.display();
 b10.display();
 b11.display();
 b12.display();
 b13.display();
 b14.display();
 b15.display();
 b16.display();
 poly.display(); 
sling.display();

b8.score();
b9.score();
b10.score();
b11.score();
b12.score();
b13.score();
b14.score();
b15.score();
b16.score();



  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}



function keyPressed(){
  if(keyCode === 32){
      sling.attach(poly.body);
  }
}

async function getbackgroundimg()
{
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13);

    if(hour>=06 && hour<=18){
        bg=color("pink");

    }
    else{
        bg=color("black");
    }
    backgroundImg=(bg);


}
