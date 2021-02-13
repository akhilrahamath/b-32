class Banana{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height);
        this.image = loadImage("Images/banana.png");  
    }

    display(){
        var sop=this.body.position;

        if(frameCount % 130===0){
 
            sop.y = Math.round(random(80,120));
            this.body.scale = 0.1;
            this.body.velocityX = -3;
            
            var score=Math.round(random(10,40));
            switch(score){
              case 10:monkey.scale=0.12;
                break;
              case 20:monkey.scale=0.14;
                break;
                case 30:monkey.scale=0.16;
                break;
                case 40:monkey.scale=0.18;
                break;
                default: break;
            }

            image(this.image,this.x,this.y,this.width,this.height);
            
             //assign lifetime to the variable
            this.body.lifetime = 200;
            
            //adjust the depth
            this.body.depth = monkey.depth;
            monkey.depth = monkey.depth + 1;

            if(this.body.isTouching(monkey)){
                score=score+2;
                this.body.destroyEach();
              }  
             
          }   
    }
}