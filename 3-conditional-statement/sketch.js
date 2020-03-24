//create an empty array called balls
let object = [];

//create a variable to hold your avatar
let me;

let box;

function preload() {
  soundFormats('mp3', 'wav');
  aSound = loadSound('explosion.mp3')
  bSound = loadSound('quickclash.wav')
  cSound = loadSound('vroom.mp3')
}

function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3);
  box = new Goal(5, 100);
}

function draw(){
	background(220);

  me.drawMe();
  me.moveMe();

  box.drawBox();

  if (frameCount % 25 == 0) {
      let  b = new Object(width, random(0,height), -3);
      object.push(b);
      console.log(object); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < object.length; i++) {
	 	      object[i].drawObject();
       	  object[i].moveObject();
          object[i].bounceObject();
	  }

}


//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("black");
        strokeWeight(3);
    		fill("black");
		    ellipse(this.x,this.y,20,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
       cSound.setVolume(0.05);
       cSound.play();
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }

    if (keyIsDown(LEFT_ARROW)) { // if you hold the down arrow, move down by speed
        this.x -= this.speed;
    }

    if (keyIsDown(RIGHT_ARROW)) { // if you hold the down arrow, move down by speed
        this.x += this.speed;
      }
	}

  die(){


  }

}

class Goal {

  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  drawBox(){
    stroke("red");
    fill("red");
    rect(this.x, this.y, 5, 200);
  }
}

//ball class from which to create new balls with similar properties.
class Object {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawObject(){
    	stroke(0);
      strokeWeight(1);
    	fill("yellow");
		  rect(this.x,this.y,15,2);
	}

	//update the location of the ball, so it moves across the screen
	moveObject(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceObject(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
            bSound.setVolume(0.5);
            bSound.play();
    		}
        if (this.x >= box.x-15 && this.x <= box.x+15 && this.y > box.y-200 && this.y < box.y+200){
            this.speed = -this.speed;
            aSound.setVolume(0.01);
            aSound.play();
        }
      }



}
