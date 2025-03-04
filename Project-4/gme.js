let cards = [];
let cardWidth = 180;
let cardHeight = 252;
let cardSpacing = 10;
let numRows = 4;
let numCols = 3;
let canvasWidth, canvasHeight;

function setup() {
    // Calculated the canvas size dynamically based on the number of my cards //
    canvasWidth = (cardWidth * numCols) + (cardSpacing * (numCols + 1));
    canvasHeight = (cardHeight * numRows) + (cardSpacing * (numRows + 1));
    
    createCanvas(canvasWidth, canvasHeight);

    // Creating all my cards and setting all white (for now) //
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            let x = cardSpacing + col * (cardWidth + cardSpacing);
            let y = cardSpacing + row * (cardHeight + cardSpacing);
            cards.push({ x, y, width: cardWidth, height: cardHeight, color: 'white', isFlipped: false });
        }
    }
}
// background set to black here //
function draw() {
    background(0);
    
    // Drawing all the cards here //
    for (let card of cards) {
        fill(card.color); // Draw card with its current color //
        rect(card.x, card.y, card.width, card.height);
    }
}

function mousePressed() {
    // If a card is clicked — flip it to red //
    for (let card of cards) {
        if (mouseX > card.x && mouseX < card.x + card.width && 
            mouseY > card.y && mouseY < card.y + card.height) {
            
               // this is where pictures will go - all cards set to white // 
            if (card.color = 'white') {
                card.color = 'red'; // Flip the card to red when mouse presses (soon images will go here) //
                card.isFlipped = true;

                // After 1 second (1000 ms), flip the card back to white //
                setTimeout(() => {
                    card.color = 'white';
                    card.isFlipped = false;
                }, 1000); // 1 second delay function for turning back to white //
            }
        }
    }
}
