let images = [];
let subtitles = ["", "Snapshot of my portfolio website!"];
let textSubtitles = ["Debrief"];
let textContent = ["Already I'm reaping the advantages of knowing basic Javascript and Html coding. Infact, I coded my assessment for Professional Practice in this same semester, building a custom interactive website to display my past works that I can send to potential clients or employers after I graduate. I mapped it so the image and description changes depending on the mouse's position on the y axis. I'm keen to maintain my coding skills, not to become a professional, but just so I can keep the skill handy for general use. I'm releasing now that creative coding doesn't even just have to be viewed in the context of websites, but coded animations can be put into video to create unique, eye-catching graphics for social media posts. There is so much power and potential that comes with coding and ultimately I'm so proud to learn a design language that so so many designers don’t even dabble in. It feels like a door opened that I didn't even know was there."];

let confetti = [];

function preload() {
  images[0] = loadImage('data/p1.png'); 
  images[1] = loadImage('data/p2.png'); 
}

function setup() {
  let container = createDiv(); // Scrollable container
  container.style('overflow-y', 'scroll');
  container.style('height', '100vh');
  container.style('width', '100vw');
  container.style('position', 'absolute');
  container.style('top', '0');
  container.style('left', '0');
  
  let canvas = createCanvas(windowWidth, 6000); // Increase the height here if i want more scrolling
  canvas.parent(container); 
  textAlign(LEFT, TOP);

  // Initialize confetti
  for (let i = 0; i < 100; i++) {
    confetti.push(new Confetti());
  }
}

function draw() {
  background(0);
  fill(255);

  // left side
  let yOffset = 50;
  for (let i = 0; i < images.length; i++) {
    let imgWidth = images[i].width;
    let imgHeight = images[i].height;
    let aspectRatio = imgWidth / imgHeight;
    let newWidth = width / 3;
    let newHeight = newWidth / aspectRatio;

    image(images[i], 50, yOffset, newWidth, newHeight); 
    textSize(16);
    text(subtitles[i], 50, yOffset + newHeight + 10);

    yOffset += newHeight + 100;
  }

  // right side
  let xOffset = width / 3 + 100;
  yOffset = 50; // Reset yOffset for the right side
  for (let i = 0; i < textSubtitles.length; i++) {
    textSize(24);
    text(textSubtitles[i], xOffset, yOffset); // Adjust position as needed
    yOffset += textAscent() + textDescent() + 10; // Add some space after the subtitle

    textSize(16);
    let words = textContent[i].split(' ');
    let lineHeight = textAscent() + textDescent();
    let textHeight = 0;
    let line = '';
    for (let j = 0; j < words.length; j++) {
      let testLine = line + words[j] + ' ';
      let testWidth = textWidth(testLine);
      if (testWidth > width / 2 - 150 && j > 0) {
        textHeight += lineHeight;
        line = words[j] + ' ';
      } else {
        line = testLine;
      }
    }
    textHeight += lineHeight; // Add height for the last line

    text(textContent[i], xOffset, yOffset, width / 2 - 150); // Adjust position and width as needed

    yOffset += textHeight + 50; // Add space after the text content
  }

  // Draw and update confetti
  for (let i = 0; i < confetti.length; i++) {
    confetti[i].update();
    confetti[i].display();
  }
}

class Confetti {
  constructor() {
    this.x = random(width);
    this.y = random(-height, 0);
    this.size = random(5, 20);
    this.speed = random(1, 10);
    this.color = color(random(255), random(255), random(255));
  }

  update() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = random(-height, 0);
      this.x = random(width);
    }
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
}
