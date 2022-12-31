//Ellsworth Kelly and Hiroshi Kawano.
let seed;
let canvas;

// Create a new canvas to the browser size
function setup() {
  mbsFramework();
  credits();
}


// Render loop that draws shapes with p5
function draw() {
  // Fill in the background
  colorMode(HSL);
   noStroke();
  background(255);
  noLoop();
  frameRate(1);
  seed = floor(random(0, 1e8));
  randomSeed(seed);
  console.log(seed);

  push();
  translate(width / 2, height / 2);
  scale(0.90);
  translate(-width / 2, -height / 2);

  const count = 12;
  for (let i = 0; i < count; i++) {
    const size = width / count;

    const curColor = random([
      "blue",
      "green",
      "orange",
      "pink",
      "yellow",
      "purple",
      "tomato",
      "teal",
      "tan",
      "silver",
      "salmon",
      "peru",
    ]);

    const px0 = floor(random(0, count + 1)) * size;
    const py0 = floor(random(0, count + 1)) * size;
    const px1 = floor(random(0, count + 1)) * size;
    const py1 = floor(random(0, count + 1)) * size;

    if (abs(px1 - px0) <= 0 || abs(py1 - py0) <= 0) continue;

    rectMode(CORNERS);

    // stroke(curColor);
    strokeWeight(width * 0.009);

    //stroke(0);
    fill(curColor);

    // Try it with strokes
   
    // noFill();
  
  rect(px0, py0, px1, py1, 0, size, 0, size);
  
 
  }
  fill(0)
  circle(random(width), random(height/3), random (width/2), height)
  pop();
}
function keyPressed() {
  let m = month();
  let d = day();
  let y = year();
  let t = hour() + ':' + minute();
  if (key == 'S' || key == 's') 
    saveCanvas(canvas, 'canvas' + m + d + y + t , 'png');
}
  
function windowResized() {
  const windowWidth = window.innerWidth;
  if (windowWidth < 900) {
    resizeCanvas(windowWidth * 0.85, windowWidth* 0.85);
    canvas.style("margin", "auto");
    canvas.style("margin-top", "10%");
  
  } else {
      resizeCanvas(windowWidth, windowWidth);
  }
}

function mbsFramework() {
  //template for canvas while printing and exporting/exhition on web/minimal
  canvas = createCanvas(1024, 1024); // will export as 512x512
  canvas.style("margin", "auto");
  canvas.style("margin-top", "5%");
  canvas.style("display", "flex");
  canvas.style("justify-content", "center");
  canvas.style("align-items", "center");
  canvas.style("border-radius", "10px");
  canvas.style("position", "relative");
  canvas.style("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
  canvas.style("zoom", "0.5");
  canvas.style('dpi', '300');
  canvas.style('bleed', '1/8');
  noCursor();
}

function credits() {
//credits
  createP("Gaze for the present moment with 12 colorful shapes and a black circle");
  createP("'My pictures need time...beyond content' Ellsworth Kelly" );
  createP("Press 's' to save a png image");
  var link =createA("https://marlonbarrios.github.io/", "Programmed by Marlon Barrios Solano");

  createElement('title', 'Gaze for the present moment')

  var allPs = selectAll("p")
  for (var i = 0; i < allPs.length; i++) {
    allPs[i].style("font-family", "Helvetica");
    allPs[i].style("justify-content", "center");
    allPs[i].style("align-items", "center");
    allPs[i].style("position", "relative");
    allPs[i].style("text-align", "center");
    allPs[i].style("display", "flex");
    allPs[i].style("font-size", "15px");
    allPs[i].style("color", "black");
    allPs[i].style("margin", "8px");
  }

  link.style("font-family", "Helvetica");
  link.style("justify-content", "center");
  link.style("align-items", "center");
  link.style("position", "relative");
  link.style("text-align", "center");
  link.style("display", "flex");
  link.style("font-size", "15px");
  link.style("color", "black");
  link.style("text-decoration", "none");

}
