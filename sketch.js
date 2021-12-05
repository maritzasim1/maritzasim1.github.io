function setup() {
  createCanvas(400, 400);
  noCursor();
}

function draw() {
  background(181, 185, 245);
  
  //line of code to print out mouse location to make layout easier
  console.log(mouseX + ", " + mouseY);
  
  //settings like translations, rotations, stroke, and fill that happen between push() and pop() don't alter any other portions of the code
  translate(mouseX-width/2, mouseY-height/2);
  push(); //first arm of kirby
  translate(156,222); //moves origin (0,0) from the top left corner
  rotate(PI/4); //rotation is centered around the origin and is specified in radians
  ellipse(0,0, 30,50); 
  pop();
    push(); //second arm of kirby
  translate(244,222);
  rotate(-PI/4);
  ellipse(0,0, 30,50); 
  pop();
  //draw body last so that it is on top of first arm of kirby and second arm of kirby
  ellipse(width/2, height/2, 100,100);
  fill(252, 197, 232);
  
  push(); //left leg of kirby 
  fill(219, 9, 9);
  translate(176,250);
  ellipse(0,0, 40, 30);
  pop();
  
  push(); //right leg of kirby
  fill(219, 9, 9)
  translate(220, 250)
  ellipse(0,0, 40, 30)
  pop();
  
  if (!mouseIsPressed){
  push(); //left eye of kirby
  fill(26, 30, 99)
  translate(190,190)
  ellipse(0,0, 10, 30)
  pop();
  push(); // white circle on left eye of kirby
  fill(255,255,255)
  translate(189,180)
  ellipse (0,0, 7, 10)
  pop();
}
  else{
    push();
    translate(180,185)
    strokeWeight(8);
    line(0,0,15,15);
    pop();
  }
 
if (!mouseIsPressed){
  push(); //right eye of kirby 
  fill(26, 30, 99)
  translate(211,190)
  ellipse(0,0, 10, 30)
  pop();
  push(); // white circle on right eye of kirby
  fill(255,255,255)
  translate(210,180)
  ellipse (0,0, 7, 10)
  pop();
}
  else{
    push();
    translate(209,186);
    strokeWeight(8);
    line(15,0,0,15)
    pop();
    push();
    textSize(50);
    fill(255,0,0)
text('!', 190, 120);
    pop();
  }
}

