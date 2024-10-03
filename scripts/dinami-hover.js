/* function getRandomeColor() {
     const letters = '0123456789ABCDEF';
     let color = '#';
     for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
     }
     return color;
}

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
     card.addEventListener('mouseover', () => {
          const randomColor = getRandomeColor();
          card.style.backgroundColor = randomColor;
     });
     card.addEventListener('mouseout', () => {
          card.style.backgroundColor = '#1d232a';
     });
}) */


const initialColors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
     // Add event listener for mouseover (hover)
     card.addEventListener('mouseover', function () {
          const randomColor = initialColors[index] // Generate random color
          this.style.backgroundColor = randomColor; // Apply the random color
     });
     // Add event listener for mouseout (when the mouse leaves the card)
     card.addEventListener('mouseout', function () {
          this.style.backgroundColor = '#1d232a'; // Revert to original color
     });
});