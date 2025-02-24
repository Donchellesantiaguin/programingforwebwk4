let rectX = 0;
const rectHeight = 75;
let rectY;
let rectWidth = 50;  // Define the width of the rectangle
let clickCount = 0;  // Change to 'let' so you can update it
let speed;

function setup (){
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
    speed = random(1, 3);
}

function draw (){
    background(155);
    drawShape();
    rectX += speed;
    
    if (rectX > width) {
        noLoop();
        text('Your score was: ' + clickCount, 100, 300);  // Corrected to 'text' function
    }
}

function mousePressed(){
    if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++;
        console.log('hit', clickCount);
    }
}

function drawShape(){
    fill('purple');  // Corrected to 'fill' to set color
    rect(rectX, rectY, rectWidth, rectHeight);
}
