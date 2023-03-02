// Create a function for generate random color.
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

// Add Event Listener
const allCardBg = document.getElementsByClassName('bg-color');
for (const cardBg of allCardBg) {
    cardBg.addEventListener('mouseover', function () {
        cardBg.style.backgroundColor = randomColor();
        cardBg.style.color = 'white';
    })
};