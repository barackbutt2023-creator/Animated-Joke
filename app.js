// Simple JavaScript for Animated Joke Lab
// Perfect for beginners learning JavaScript!

// This is where we store our joke data
const jokes = [
    {
        setup: "Why did the student bring a ladder to school?",
        punchline: "Because they wanted to go to high school! 🏫",
        setupImage: "studentladder1.png",
        punchlineImage: "afterladder.png"
    }
];

// Get elements from the HTML (like finding pieces in a puzzle)
const setupText = document.getElementById('setup');
const punchlineText = document.getElementById('punchline');
const jokeImage = document.getElementById('jokeImage');
const revealButton = document.getElementById('showPunchline');
const resetButton = document.getElementById('resetJoke');

// Simple variables to track what's happening
let currentJoke = 0;
let hasRevealed = false;

// This function runs when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Joke app is ready!');
    console.log('Click the button to see the punchline!');
    
    // Set up the first joke
    loadJoke();
    
    // Tell the button what to do when clicked
    revealButton.addEventListener('click', revealPunchline);
    resetButton.addEventListener('click', resetJoke);
});

// Load a joke (put text and images on the page)
function loadJoke() {
    const joke = jokes[currentJoke];
    
    // Put the setup text on the page
    setupText.textContent = joke.setup;
    punchlineText.textContent = joke.punchline;
    
    // Set the starting image
    jokeImage.src = joke.setupImage;
    
    // Hide the punchline and reset button at first
    punchlineText.classList.add('hidden');
    resetButton.classList.add('hidden');
    
    // Show the reveal button
    revealButton.classList.remove('hidden');
    
    // Reset the background color
    document.body.classList.remove('punchline-revealed');
    document.body.classList.add('joke-reset');
    
    hasRevealed = false;
}

// Show the punchline when button is clicked
function revealPunchline() {
    if (hasRevealed) return; // Don't do anything if already revealed
    
    console.log('🎭 Revealing the punchline!');
    
    // Change the background color
    document.body.classList.remove('joke-reset');
    document.body.classList.add('punchline-revealed');
    
    // Change to the punchline image
    jokeImage.src = jokes[currentJoke].punchlineImage;
    
    // Hide the reveal button
    revealButton.classList.add('hidden');
    
    // Show the punchline with animation
    punchlineText.classList.remove('hidden');
    punchlineText.classList.add('revealed');
    
    // Show the reset button
    resetButton.classList.remove('hidden');
    
    // Create a fun celebration effect
    createCelebration();
    
    hasRevealed = true;
    
    console.log('✨ Punchline revealed successfully!');
    console.log('💡 Try this in the console:');
    console.log('   setupText.style.color = "red"');
    console.log('   punchlineText.style.fontSize = "2rem"');
}

// Reset everything for a new joke
function resetJoke() {
    if (!hasRevealed) return; // Only reset if joke was revealed
    
    console.log('🔄 Resetting the joke...');
    
    // Hide everything with animation
    punchlineText.classList.remove('revealed');
    punchlineText.classList.add('hidden');
    
    // Go to next joke (or back to first if at the end)
    currentJoke = (currentJoke + 1) % jokes.length;
    
    // Load the new joke after a short delay
    setTimeout(() => {
        loadJoke();
    }, 300);
}

// Create a simple celebration effect
function createCelebration() {
    // Add a temporary success message
    const success = document.createElement('div');
    success.textContent = '🎉';
    success.style.position = 'fixed';
    success.style.top = '50%';
    success.style.left = '50%';
    success.style.transform = 'translate(-50%, -50%)';
    success.style.fontSize = '4rem';
    success.style.zIndex = '1000';
    success.style.pointerEvents = 'none';
    
    document.body.appendChild(success);
    
    // Animate the emoji
    success.style.transition = 'all 1s ease-out';
    setTimeout(() => {
        success.style.transform = 'translate(-50%, -50%) scale(1.5)';
        success.style.opacity = '0';
    }, 100);
    
    // Remove after animation
    setTimeout(() => {
        document.body.removeChild(success);
    }, 1000);
}

// Add some fun hover effects
revealButton.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px) scale(1.05)';
});

revealButton.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
});

// Add keyboard support (spacebar works like the button)
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        e.preventDefault();
        if (!hasRevealed) {
            revealPunchline();
        } else {
            resetJoke();
        }
    }
});

// Simple educational utilities for console exploration
window.educationalTips = {
    changeSetup: function(newText) {
        setupText.textContent = newText;
        console.log('✅ Setup text changed!');
    },
    
    changePunchlineColor: function(color) {
        punchlineText.style.color = color;
        console.log(`✅ Punchline color changed to ${color}!`);
    },
    
    changeBackground: function(color) {
        document.body.style.background = color;
        console.log(`✅ Background changed to ${color}!`);
    }
};

console.log('💡 Educational commands you can try:');
console.log('   educationalTips.changeSetup("Your joke here!")');
console.log('   educationalTips.changePunchlineColor("blue")');
console.log('   educationalTips.changeBackground("red")');
