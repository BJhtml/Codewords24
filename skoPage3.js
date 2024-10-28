let images = [];
let subtitles = ["Here is a diagram of my process!", "Initial major project paper prototype", "Snapshot from 'Plug and Play', 2015"]
let textSubtitles = ["My process", "Research", "Prototype", "Code Repository", "Start coding", "Debug", "Research... Again?"];
let textContent = ["Through the guidance of class activities, I developed my own process that I was able to apply to my main project. The first first of which being research, then prototyping, then researching functions on coding repositories/ watching youtube tutorials, then coding, then ironing out any bugs through Copilot. However, I didn't necessarily do this process in a linear order. Here's how my major project played out.", 
"To start with, I was running off the same research I used in project one. However this would eventually change due to unforeseen circumstances which i'll touch on a bit later on this page ;)",
"Then came the prototyping phase. While Andy expressed the importance of prototypes, he also expressed the importance of embracing mistakes, and to not become too attached with the idea in your head. This is because coding is unpredictable and the outcome may be something you didn't imagine in the best way. My concept from the beginning was a series of instructions with symbols that would tell the user to either perform, or not perform specific actions. For example, to reveal a part of the sentence, the user must press space more than three times, but not more than 8 times, then hit enter. But when I started coding this, I didn't get far until I wanted to change the concept. I was inspired by the feeling of the keys under my fingertips, and thought to myself, what if the user would have to hold down a key with every single one of their fingers? This is the concept I ultimately chose to code.",
"I used p5js.org as my main source of coding functions. It's fantastic because it does not only give you the explanation for the function, but it gives you the editable code so you can play around with it and see in real time what it does. Occasionally I would watch ‘The Coding Train’ by Daniel Shiffman which is a youtube channel. He explains everything really coherently and it really helped to have someone who could verbally explain coding functions to me when I wasn't in the classroom.",
"Once I researched the coding functions and had a plan of action, then I would start coding in P5.js.",
"More often than not, when I would try to play my code I would be met with a never ending loading screen or white screen indicating there is something off about my code. I would then copy and paste the code into Copilot to check the mistakes I made. A Lot of times, it would be a spelling issue. But in one circumstance, I had to recode half my project because I ran into an unforeseen concrete wall. After spending 2 hours trying to debug my code and Copilot not providing the correct solution, I researched how to read the console in my browser so I could see the key input. My concept required 10 keys to be held down at once, though as it turns out, my keyboard would stop registering the keys pressed after the sixth key was held down. I did some more research as to why this was happening and this is a limit that most keyboards have that coding cannot overcome. Remember that thing Andy said to us about embracing mistakes? I really had to put that advice into effect here, and I do believe this limitation made me more creative.",
"So I went back to the drawing board, and I was hungry to take a risk. I was still basing my concept off my paper prototype from project one which didn't stray too far from Bruno's symbol poetry which was written before the internet! It occurred to me that a more modern approach was necessary. I took aesthetic inspiration from a video game that was released in 2015 titled ‘Plug and play’, designed by Michael Frei and Mario von Rickenbach. The game has a similar black and white line-art aesthetic. At first, the user feels compassion for the protagonist, who has a plug for a head, though is squirming out of their seat in discomfort as they become a part of a human centipede before the 15 minute game ends. But I wasn’t just inspired by this game’s aesthetics, but also by its unorthodox, word-free method of communication which is exactly what Bruno Munari was exploring in his book, just a bit more modernized."];

function preload() {
  images[0] = loadImage('data/myProcess.png'); 
    images[1] = loadImage('data/Pp.png'); 
      images[2] = loadImage('data/pandp.png'); 
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

}
