let images = [];
let subtitles = ["Fig.1 Crazy 8s", "Fig.2.1 Crazy 8's Homework", "Fig.2.2 Crazy 8's Homework", "Fig.2.3 Crazy 8's Homework", "Fig.3 Concrete Poetry ", "Fig.4 Self Portrait", "Fig.5.1 https://homonoosphericus.com/", "Fig.5.2 https://www.whatremainsisfuture.com/"];
let textSubtitles = ["The Coding Adventure Begins", "Crazy 8’s: Whomp Whomp :(", "Symbolic Thinking", "Spitting Image", "Research"];
let textContent = ["I entered this class with a mix of excitement and nerves, having zero coding experience. I was a bit overwhelmed by the idea of coding an entire website for my SKO, but here I am, and I can see that I've learnt so many new things over this semester. ", 
"We kicked things off with Crazy 8’s (see fig.1). I’d done Crazy 8’s before, but in a design context, not coding. Sure, there’s design in this class—hence “creative coding”—but my sketches were a flop due to my lack of computational thinking. We pinned up our Crazy 8 designs, and while I was proud of my custom fonts and dynamic 3D illustrations inspired by the text “inside the box,” Andy seemed unimpressed. It hit me later—DUH, this isn’t a regular design class. It’s a coding class, and computational thinking is king. Computational thinking is about translating ideas into code, and it’s crucial for success here. Homework was a struggle this week as I tried to code one of my Crazy 8 designs with a severe lack of understanding regarding the nature of visual studio code (see Fig 2.1-2.3). My self-doubt peaked, but I wish I’d reminded myself that uncertainty is just a phase of learning. Looking back I can see I, once again, focused too much on aesthetics, picking a pretty font and large point size before I even knew my coding approach. This definitely hindered my learning at the beginning of this course.", 
"Week 2 introduced us to concrete poetry, a lesson that laid the groundwork for our first and second assignments—computational thinking and conveying ideas symbolically on the web. Concrete poetry isn’t just about words; it’s about their placement, kerning, color, etc. You can’t convey the poem’s meaning just by reading it aloud—its presentation is key. Andy supplied us with the reading “OK Texts” by Mark Amerika (2007) and asked us to turn some lines into concrete poetry. I focused less on aesthetics and more on layout(see Fig.3), using spatial relationships to create meaning. This is when i started to transition towards a more abstract mindset, compared to my crazy eights where I literally drew a box for the phrase ‘outside the box’, that would eventually help me create a successful and potent assignment 2.", 
"Next, we coded self-portraits from simple shapes. I got carried away, adding details like transparent glasses. This task helped me grasp P5.js coding, including plotting shapes on the Cartesian plane, layering, color opacity, and scaling. This activity also really helped with my computational thinking as you have to use basic shapes to achieve a complex image. Karen even began evoking thoughts on how we could make our design interactive, suggesting it would be cool if the eyes followed the location of the mouse. And there you have it— the first three weeks of my coding class beginning the development of my coding mind!",
"Angelo Plessas is a Greek artist known for blending technology with spirituality and social interaction. He creates interactive websites, sculptures, and performances. Plessas organizes the Eternal Internet Brotherhood/Sisterhood and Experimental Education Protocol, exploring communal connectivity. His work has been featured in major art events like documenta 14 and the Gwangju Biennale. Andy used Plessas’ work as a computational thinking exercise. He got us to pick an interactive web experience of Plessas’ (listed on his website https://angeloplessas.com/ ) and consider how it was built computationally. For example, in his piece ‘Homo Noosphericus’, the fluid movement of the mannequin is actually constructed from several frigid two dimensional shapes attached to each other like joints. The same method is used in his work ‘What Remains is Future” in the dancing girls arms, but has an added interactive element. The skirt of the dress is repelled by the mouse's location. It may seem odd to specify that its the mouses location that repels the skirt, rather than simply stating the mouse repellers the skirt, but specific language like this helps improve computational thinking because when coded, you refer to the mouse as its location ie. mouseX, mousey."];
let noiseOffsets = [];
let numVertices = 100; // Number of vertices for the outline
let noiseIncrement = 0.01;

function preload() {
  images[0] = loadImage('data/crazy8s.png'); 
  images[1] = loadImage('data/Coding1.gif'); 
  images[2] = loadImage('data/coding2.gif'); 
  images[3] = loadImage('data/coding3.gif'); 
  images[4] = loadImage('data/concretePoetry.png'); 
  images[5] = loadImage('data/Portrait.gif'); 
  images[6] = loadImage('data/Angelo1.gif');
  images[7] = loadImage('data/Angelo2.gif');
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

  // Add organically moving 2D red shape
  let shapeX = noise(noiseOffsetX) * width;
  let shapeY = noise(noiseOffsetY) * height;
  noiseOffsetX += 0.01;
  noiseOffsetY += 0.01;

  fill(255, 0, 0);
  ellipse(shapeX, shapeY, 50, 50); // Adjust size as needed
}
