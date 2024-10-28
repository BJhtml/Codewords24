let drops = [];
let yOffset = 0;
let speed = 0.2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    drops.push(new Drop());
  }
  noStroke();
   noCursor(); // Hide the default cursor
  textAlign(CENTER, CENTER);
  textSize(24);

}

function draw() {
  
  background(0);
 
  // Draw blood rain
  for (let drop of drops) {
    drop.fall();
    drop.display();
  }
  
  // Draw wiggly red shape
  fill(255, 0, 0);
  noStroke();
  beginShape();
  let xOffset = 0;
  for (let x = 0; x <= width; x += 10) {
    let y = height - yOffset + map(noise(xOffset, yOffset * 0.05), 0, 1, -50, 50);
    vertex(x, y);
    xOffset += 0.1;
  }
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  yOffset += speed;
  if (yOffset > height + 50) { // Adjusted to go off the screen
    yOffset = height + 50;
  }

  // Draw menu
  let buttons = ["Acclimating", "The Paper Prototype", "The Organism", "Debrief"];
  let buttonHeight = 60;
  let buttonWidth = 270;
  let spacing = 10;
  let startY = (height - (buttons.length * (buttonHeight + spacing) - spacing)) / 2;

  for (let i = 0; i < buttons.length; i++) {
    let x = width / 2 - buttonWidth / 2;
    let y = startY + i * (buttonHeight + spacing);
    drawButton(x, y, buttonWidth, buttonHeight, buttons[i]);
  }

  // Draw custom cursor
  
}

function drawButton(x, y, w, h, label) {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    fill(255);
    stroke(100,100,100);
    rect(x, y, w, h);
    fill(255, 0, 0);
  } else {
    stroke(100,100,100);
    fill(0, 0, 0, 0);
    rect(x, y, w, h);
    fill(255);
  }
  noStroke();
  text(label, x + w / 2, y + h / 2);
}

function mousePressed() {
  let buttons = ["Acclimating", "The Paper Prototype", "The Organism", "Debrief"];
  let buttonHeight = 50;
  let buttonWidth = 255;
  let spacing = 20;
  let startY = (height - (buttons.length * (buttonHeight + spacing) - spacing)) / 2;

  for (let i = 0; i < buttons.length; i++) {
    let x = width / 2 - buttonWidth / 2;
    let y = startY + i * (buttonHeight + spacing);
    if (mouseX > x && mouseX < x + buttonWidth && mouseY > y && mouseY < y + buttonHeight) {
      console.log(buttons[i] + " clicked");
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Drop {
  constructor() {
    this.x = random(width);
    this.y = random(-500, -50);
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 10, 20);
    this.yspeed = map(this.z, 0, 20, 1, 20);
  }

  fall() {
    this.y = this.y + this.yspeed;
    let grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }

  display() {
    let thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(255, 0, 0); // Dark red color for blood
    line(this.x, this.y, this.x, this.y + this.len);
  }
}
