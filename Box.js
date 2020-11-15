class Box {
    constructor(x,y,width,height) {
      var options = {
          'isStatic': false,
          'friction': 0.2,
          'density': 1

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 20;
      this.height = 50;
      this.Visibility = 2;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("skyblue");
      rect(pos.x, pos.y, this.width, this.height);
//console.log(this.body.speed);

if(this.body.speed>1){
  
    
    push();
    this.Visibility-=15;
    tint(2,this.Visibility);
    rectMode(CENTER);
    
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    pop();

    if(this.Visibility<0){
      
      fill("black");
      //World.remove(world,this.body);
      
    }
  
  }

  
  else{
    var pos =this.body.position;
    rectMode(CENTER);
    fill("skyblue");
    rect(pos.x, pos.y, this.width, this.height); 

    

  }

  /*if(this.body.speed < 3){
    display(Box);
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     rect(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }*/
     
    }

    score(){
      //console.log(score);
        //if(this.Visiblity<255 && this.Visiblity>-1000){
          //console.log(this.body.speed);
          if(this.body.speed>1.8){
          //score is increased by 1
          score++;
        }
      
      }
    
  };





  
  
  
  
  