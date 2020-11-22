class Ground
{
    //We send arguments in constructor
    constructor(x,y,width,height)
    {
      var options={
        isStatic:true
      }
         
       this.body=Bodies.rectangle(x,y,width,height,options);
       this.width=width;
       this.height=height;
       World.add(world,this.body);
       
        
    }
    
   display()
   {
     //pos is a variable used to save the body position fetch from computer memory
     var pos=this.body.position;
     rectMode(CENTER);
     fill("brown");
     stroke("brown");
     rect(pos.x,pos.y,this.width,this.height);
    

   }



}

