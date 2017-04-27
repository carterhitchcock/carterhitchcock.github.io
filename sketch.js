function setup() {



  createCanvas(720, 360);
  background(0);

  for(var i = 10; i < width; i += 10) {
    // If 'i' divides by 20 with no remainder draw the first line
    // else draw the second line
    if(i%30 == 0) {
      stroke(255);
      line(i, 0, i, height);
    } else {
      stroke(153);
      line(i, 0, i, 72);
    }
  }

}

function draw() {
  if (mouseIsPressed) {
    fill(0)
  } else {
    fill(255)
  }

  ellipse(mouseX, mouseY, 80, 80)
}
