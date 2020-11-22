class Box{

     //constructor are used to declare the properties of object 
   constructor(x,y,width,height){
  
   
     var options={
       'density':1.0,
       'friction':0.3,
       'restitution':0.8 
     }    
   
     //create object
      this.body =Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      this.Visiblity = 255;

      World.add(world,this.body);
     
     
   
   }      
   score(){
     if(this.Visiblity<0 && this.Visiblity>=105){
       score++;
     }
   }                             
   //shape to object-initializing the property
   display(){
   
    if(this.body.speed < 6){
      var pos=this.body.position;
     // var angle=this.body.angle;

    push();
    //translate(angle);
    //rotate in the angle
    //rotate(angle);
    rectMode(CENTER);
    
     //fill inside
    fill("blue");
    stroke("yellow");
    strokeWeight(4) ;
    rect(pos.x,pos.y,this.width,this.height);
    // old changes to be retrived
    pop();
    }
    
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      rect( this.body.x, this.body.y, 50, 50);
      pop();
    
    }
    
     
   }
   

  



}