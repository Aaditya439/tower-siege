class Block{
   constructor(x, y, width, height) {
    var options = {          
      restitution :0.4,
      friction :0.0,

       }
       this.body = Bodies.rectangle(x, y, width, height, options);
       this.visiblity = 255
       this.width = width;
       this.height = height;
       World.add(world, this.body);
     }
display(){

  var angle = this.body.angle;
  var pos= this.body.position;

  if(this.body.speed<4){
  push();
  strokeWeight(3);
  stroke("black");
  translate(pos.x, pos.y);
  rotate(angle);
  rectMode(CENTER);
  rect(0,0,this.width, this.height);
  pop();}
      
  else{
   World.remove(world,this.body)
   push();
   this.Visiblity=this.Visiblity-5;
   tint(255,this.Visiblity)
   pop();
  }          
 }
}


 