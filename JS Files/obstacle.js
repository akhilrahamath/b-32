class Obstacle{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height);
        this.image = loadImage("Images/obstacle.png");
     }  
 
    display(){
        var pos=this.body.position;

        if (frameCount % 100 === 0){
            this.body.velocityX = -6;
            pos.x = Math.round(random(600,200));
            this.body.lifetime = 300;
            this.body.depth = monkey.depth;
            monkey.depth = monkey.depth + 1;
            image(this.image,this.x,this.y,this.width,this.height);
          } 
          if(this.body.isTouching(monkey)){
            monkey.scale=0.1;
          }  
          
          if(this.body.isTouching(stone.body)){
            otp=otp+2;
            this.body.destroyEach();
          }
       }   
    }