class Paper {
    constructor(x, y, radius,angle) {
        var options = {
            isStatic : false,
            restitution:0.3,
            friction:0.5,
            density:1.2
          
        }
        this.body = Bodies.circle(x,y,20, options);
        //this.width = 10;
        //this.height = 5;
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        
        
        
        fill("purple");
        
        keyPressed();
        ellipseMode (RADIUS);
        ellipse (pos.x, pos.y,15,15);
        var angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
       
        
        
        pop();
      }
      
    };

    
    
