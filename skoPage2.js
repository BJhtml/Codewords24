let images = [];
let subtitles = ["Paper prototype from inclass workshop", "Project 1 paper prototype"]
let textSubtitles = ["It was prototyped in the stars", "Project 1"];
let textContent = ["We were first introduced to paper prototypes in a group exercise where we turned an existing, simple arcade-style game into a functional paper prototype. A paper prototype is a quick and rough method of seeing an interactive digital work in person. Sketching is another great method of recording ideas, but paper prototypes have the potential for adding moving layers, making quick edits by tearing off/ adding paper, and representing non-stationary elements. Something I noticed through this exercise is that it forces you to think about how the game is coded when you make it out of paper. For instance, we used long strips of paper to represent the road, and as the user interacted with the prototype, we slowly pulled the strips of paper to create the illusion the car is moving forwards. This is exactly how the game would be coded, and we were completely unaware at that moment that we had, for the first time, thought computationally about real interactive online work despite the lack of focus on coding in the exercise.", 
"Project 1 was the creation of a paper prototype, except we had to do one for our own concept. I derived inspiration from the author Bruno Munari, specifically his book ‘A Language of Signs and Symbols’, 1967. Bruno celebrates the important role symbols play in society, but poses an interesting question: Can there be a symbol-based international visual language? In meteorology, lithology, and electronics, there are already established international symbol-based languages, though they serve a more utilitarian function rather than recreational storytelling. Munari challenges this and uses these pre-existing internationally recognized symbols to write a poem (see Figure 1). My paper prototype directly explores this concept, as well as combining a metaphor Munari used that describes how all humans are “part of a larger organism,” and symbols allow “Each small organ lives in harmony.” I was heavily inspired by Bruno’s innovative and ambitious mind that wasn't afraid to suggest a completely new method of communication is due and is a way of thinking I hope I will bring into my future career as a graphic designer. Overall I think my choice of materials was really effective in my paper prototype. I used sheets of plastic which I reused from old plastic sleeves so I could create transparent layers. Although, I believe I lost sight a little of the purpose of a paper-prototype, which is to be a quick and rough expression of an idea. This paper prototype took me upwards of an hour to create, completely defeating the purpose of a paper prototype. We were given the choice of pursuing our paper prototype for our major project or coming up with a different idea. Spontaneously, I had a shower thought about an idea I was more excited about which is ultimately the idea I chose to pursue, despite the conceptual success of this paper prototype."];

function preload() {
  images[0] = loadImage('data/PaperProto.png'); 
   images[1] = loadImage('data/Prototype.png'); 
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
