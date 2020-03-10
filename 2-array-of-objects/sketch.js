
//create an empty array called balls

let balls = [];

function setup() {
  createCanvas(800, 400);

}

function draw(){
	background(random(255),random(255),random(255));
  
//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  let  b = new Ball(random(800), random(400), random(255), random(255), random(255));
  balls.push(b);
  print(balls);
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,red, green, blue, diameter){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.diameter = diameter;
	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.red, this.green, this.blue);
		    ellipse(this.x,this.y,random(70));
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+ random(2)
		this.y = this.y+ random(5)
	}


}
