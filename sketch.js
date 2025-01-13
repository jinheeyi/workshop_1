function setup() {
  createCanvas(800, 600);
  noStroke();
}

function draw() {
  
  fill(0,10);
  rect(0,4, width, height);

  
  let size = random(20,100);
  let x = random(width); // Random X position
  let y = random(height); // Random y position


  fill(random(255), random(255), random(255), 150); //Semi-transparent randon color
  if (random() < 0.5) {
    ellipse (x,y,size,size);
  }else {
    rect(x,y,size,size);
  }


  stroke(255,random(200));
  line(mouseX,mouseY, random(width), random(height));


  if (mouseIsPressed){
    fill(random(255), random(255), random(255), 200);
    ellipse(mouseX+random (-10,10), mouseY + random(-10,10), 10, 10);
  }
}