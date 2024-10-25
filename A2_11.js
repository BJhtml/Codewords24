let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10;
let successImg1, successImg2, successImg3, successImg4, successImg5, successImg6, successImg7, successImg8, successImg9, successImg10;
let success1 = false;
let success2 = false;
let success3 = false;
let success4 = false;
let success5 = false;
let success6 = false;
let success7 = false;
let success8 = false;
let success9 = false;
let success10 = false;

let showImg2 = false;
let showImg3 = false;
let showImg4 = false;
let showImg5 = false;
let showImg6 = false;
let showImg7 = false;
let showImg8 = false;
let showImg9 = false;
let showImg10 = false;

let successTimer = 0;
let customCursor; //main cursor
let customCursor2; // dead screen cursor
let organismDead;
let deathScreen = false;
let x1, y1, x2, y2, x3, y3, x4, y4, x6, y6, x7, y7, x9, y9, x10, y10; //texts
let xSpeed, ySpeed;
let showText1 = false;
let showText2 = false;
let showText3 = false;
let showText4 = false;
let showText6 = false;
let showText7 = false;
let showText9 = false;
let showText10 = false;
let letters = [];
let word = "organism";
let startTime;
let delay = 500;
let vibrating = false;


function preload() {
  img1 = loadImage('data/Fingers_1.png'); //fin norm 
  img2 = loadImage('data/Fingers_2.png'); //fin norm
  img3 = loadImage('data/Fingers_3.png'); //fin norm
  img4 = loadImage('data/Fingers_4.png'); // fin norm
  img5 = loadImage('data/Fingers_5.png'); // fin nail fall
  img6 = loadImage('data/Fingers_6.png'); // fin face
  img7 = loadImage('data/Fingers_7.png'); //fin norm
  img8 = loadImage('data/Fingers_8.png'); // fin face release
  img9 = loadImage('data/Fingers_9.png'); // fin smash
  img10 = loadImage('data/Fingers_10.png'); //fin face 2
  
  successImg1 = loadImage('data/Press_1.png'); 
  successImg2 = loadImage('data/Press_2.png'); 
  successImg3 = loadImage('data/Press_3.png'); 
  successImg4 = loadImage('data/Press_4.png'); 
  successImg5 = loadImage('data/Press_5.gif'); 
  successImg6 = loadImage('data/Press_6.png'); 
  successImg7 = loadImage('data/Press_7.png');
  successImg8 = loadImage('data/Press_8.png');
  successImg9 = loadImage('data/Press_9.png');
  successImg10 = loadImage('data/Press_10.png');
  
  customCursor = loadImage('data/Fingers_CustomMouse.png');
  customCursor2 = loadImage('data/customCursor2.png');
  organismDead = loadImage('data/organismDead.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noCursor();
  textSize(20);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);
  if (deathScreen) { // ORGANISM DEAD screen
    image(organismDead, width / 2, height / 2, 250, 125);
    image(customCursor2, mouseX, mouseY, 90, 90);
    textSize(20);
    fill(0);
    textAlign(CENTER, CENTER);
    text('Organism dead.', width / 2, height / 2 + 160);
    
    let button = createButton('Rebirth'); // REBIRTH button
    button.position(width / 2 - 50, height / 2 + 260);
    button.size(100, 50);
    button.style('background-color', '#FFFFFF');
    button.mousePressed(() => {
      location.reload(); // Page refresh
    });

    return;
  }

  if (vibrating) { // for 'organism' text
    let offsetX = random(-5, 5);
    let offsetY = random(-5, 5);
    text('each organ', x + offsetX, y + offsetY);
  }
 if (showText10) {
    push();
    fill(255, 0, 0); // Red color
    textSize(100); // Initial text size
    textAlign(CENTER, CENTER);
    
    // Calculate scale factors
    let scaleX = width / textWidth("HARMONY");
    let scaleY = height / 100; // 100 is the initial text size

    translate(width / 2, height / 2); // Move to the center
    scale(scaleX, scaleY); // Apply scaling
    text("HARMONY", 0, 0); // Draw text at the center
    pop(); // Restore the original transformation matrix
  

  }

  if (showText1) {
    textSize(20);
    fill(0);
    text('Each', x1, y1);
  }

  if (showText2) {
    textSize(20);
    fill(0);
    text('of us', x2, y2); 
  }

  if (showText3) {
    textSize(20);
    fill(0);
    text('is part of', x3, y3);  
  }

  if (showText4) {
    textSize(20);
    fill(0);
    text('a larger', x4, y4);
  }
   if (showText6) {
     push();
    textSize(40);
    fill(0);
    text('MUST', x6, y6);
     pop();
  }
   if (showText7) {
    textSize(20);
    fill(0);
    text('live in', x7, y7);
  }

  let currentTime = millis();
  for (let letter of letters) {
    if (currentTime - startTime > delay) {
      letter.update();
    }
    letter.display();
  }

  if (success1) {
    image(successImg1, width / 2 + 2, height / 2 + 6, 250, 430);
    if (millis() - successTimer > 200) { // time delay after user clicks key
      success1 = false;
      showImg2 = true;
    }
  } else if (success2) {
    image(successImg2, width / 2 - 20, height / 2, 250, 430);
    if (millis() - successTimer > 200) {
      success2 = false;
      showImg3 = true;
    }
  } else if (success3) {
    image(successImg3, width / 2 - 10, height / 2, 250, 430);
    if (millis() - successTimer > 200) {
      success3 = false;
      showImg4 = true;
    }
  } else if (success4) {
    image(successImg4, width / 2 + 2, height / 2 + 3, 250, 430);
    if (millis() - successTimer > 200) {
      success4 = false;
      showImg5 = true;
    }
    } else if (success5) {
    image(successImg5, width / 2+5, height / 2+36,250,430);
    if (millis() - successTimer > 1000) {
      success5 = false;
      showImg6 = true;
    }
  } else if (success6) {
    image(successImg6, width / 2+18, height / 2+20,260,430);
    if (millis() - successTimer > 500) {
      success6 = false;
      showImg7 = true;
    }
  } else if (success7) {
    image(successImg7, width / 2 + 10, height / 2 + 70, 330, 300);
    if (millis() - successTimer > 500) {
      success7 = false;
      showImg8 = true;
    }
  } else if (success8) {
    image(successImg8, width / 2+20, height / 2+15, 250, 430);
    if (millis() - successTimer > 500) {
      success8 = false;
      showImg9 = true;
    }
  } else if (showImg9) {
    image(img9, width / 2+15, height / 2+70, 330, 300);
  } else if (success9) {
    image(successImg9, width / 2+13, height / 2, 330, 420);
    if (millis() - successTimer > 500) {
      success9 = false;
      showImg10 = true;
    }
  } else if (showImg10) {
    image(img10, width / 2+25, height / 2, 600, 450);
    showText10 = true;
    if (keyIsDown(66)) { // 66 is the keyCode for 'b'
      success10 = true;
      successTimer = millis();
      showImg10 = false;
    }
  } else if (success10) {
    image(successImg10, width / 2+20, height / 2+15, 600, 440);
    if (millis() - successTimer > 500) {
      success10 = false;
    }
  } else if (showImg2) {
    image(img2, width / 2, height / 2, 250, 430);
    if (keyIsDown(70)) { // 70 is the keyCode for 'f'
      success2 = true;
      successTimer = millis();
      showImg2 = false;
    }
  } else if (showImg3) {
    image(img3, width / 2, height / 2, 250, 430);
    if (keyIsDown(83)) { // 83 is the keyCode for 's'
      success3 = true;
      successTimer = millis();
      showImg3 = false;
    }
  } else if (showImg4) {
    image(img4, width / 2 + 10, height / 2, 250, 430);
    if (keyIsDown(54)) { // 54 is the keyCode for '6'
      success4 = true;
      successTimer = millis();
      showImg4 = false;
    }
  } else if (showImg5) {
    image(img5, width / 2, height / 2, 250, 430);
  } else if (showImg6) {
    image(img6, width / 2 + 10, height / 2, 250, 430);
    if (keyIsDown(80)) { // 80 is the keyCode for 'p'
      success6 = true;
      successTimer = millis();
      showImg6 = false;
    }
  } else if (showImg7) {
    image(img7, width / 2 + 10, height / 2, 330, 415);
    if (keyIsDown(74)) { // 74 is the keyCode for 'j'
      success7 = true;
      successTimer = millis();
      showImg7 = false;
    }
  } else if (showImg8) {
    image(img8, width / 2 + 18, height / 2 + 20, 250, 430);
    if (keyIsDown(86)) { // 86 is the keyCode for 'v'
      success8 = true;
      successTimer = millis();
      showImg8 = false;
    }
  } else {
    image(img1, width / 2, height / 2, 250, 430);
    image(customCursor, mouseX, mouseY, 90, 90);
  }
}

function keyPressed() {
  if (!['1', 'f', 's', '6', 'p', 'j', 'v', 'b'].includes(key.toLowerCase())) { // NOT these keys
    deathScreen = true;
  } else {
    if (key === '1') {
      success1 = true;
      successTimer = millis();
      showText1 = true;
      x1 = random(width);
      y1 = random(height);
      showImg2 = false;
      showImg3 = false;
      showImg4 = false;
      showImg5 = false;
      showImg6 = false;
      showImg7 = false;
      showImg8 = false;
      showImg9 = false;
      showImg10 = false;
      showImg11 = false;
    }
    if (key === 'f') {
      showText2 = true;
      x2 = random(width);
      y2 = random(height);
    }
    if (key === 's') {
      showText3 = true;
      x3 = random(width);
      y3 = random(height);
    }
    if (key === '6') {
      showText4 = true;
      x4 = random(width);
      y4 = random(height);
    }
    if (key === 'p') {
      x = random(width);
      y = random(height);
      vibrating = true;
    }
    if (key === 'j') {
      showText6 = true;
      x6 = random(width);
      y6 = random(height);
    }
    if (key === 'v') {
      showText7 = true;
      x7 = random(width);
      y7 = random(height);
    }
  }
}

function keyReleased() {
  if (key === 's' || key === 'S') {
    letters = [];
    let startX = width / 2 - (textWidth(word) / 2);
    let startY = height / 2 + 270;
    let xOffset = startX;
    for (let i = 0; i < word.length; i++) {
      letters.push(new Letter(word[i], xOffset, startY));
      xOffset += textWidth(word[i]);
    }
    startTime = millis();
  }
  if (showImg5 && key === 's') {
    success5 = true;
    successTimer = millis();
    showImg5 = false;
  } else if (showImg9 && key === 'j') {
    success9 = true;
    successTimer = millis();
    showImg9 = false;
  } else if (key === '1' || key === 'f' || key === '6' || key === 'v' || key === '9' || key === 'b') {
    deathScreen = true;
  }
}

class Letter { //organism floating and bouncing text
  constructor(char, x, y) { //char(character)
    this.char = char;
    this.pos = createVector(x, y); //initial position
    this.vel = p5.Vector.random2D().mult(0.8); //gives random direction
  }

  update() {
    this.pos.add(this.vel);
    this.checkEdges();
  }

  checkEdges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }

  display() {
    fill(0);
    text(this.char, this.pos.x, this.pos.y);
  }
}
