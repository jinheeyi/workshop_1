function setup() {
    createCanvas(800, 600);
    noStroke();
  }
  
  function draw() {
  
    fill(0, 10); 
    rect(0, 0, width, height);
  
    let size = random(20, 100); 
    let x = random(width); 
    let y = random(height);

    fill(random(255), random(255), random(255), 150); 
    if (random() < 0.5) {
      ellipse(x, y, size, size);
    } else {
      rect(x, y, size, size);
    }
  
   
    if (mouseIsPressed) {
      fill(random(255), random(255), random(255), 200);
      ellipse(mouseX + random(-10, 10), mouseY + random(-10, 10), 10, 10);
    }
}  
