const container = document.getElementById('container');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Create 3200 squares with different hover colors
for (let i = 0; i < 3200; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        const randomColor = getRandomColor();
        square.style.backgroundColor = randomColor; // Change to a random background color on hover
    });

    square.addEventListener('mouseout', () => {
        // Reset the background color after 1 second
        setTimeout(() => {
            square.style.backgroundColor = '#333'; // Reset to the default dark gray color
        }, 1000); // 1000 milliseconds = 1 second
    });

    container.appendChild(square);
}
