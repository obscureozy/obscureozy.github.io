// src/js/typewriter.js
// Typewriter Effect
const titles = [
    "Technical Support Engineer",
    "Blockchain Infrastructure Specialist",
    "Web3 Developer Advocate"
];

const typewriter = document.querySelector('.typewriter');
let currentTitleIndex = 0;
const chars = '!<>-_\\/[]{}—=+*^?#________';

export function initTypewriter() {
    if (!typewriter) return;
    setTimeout(scrambleText, 1000);
}

function scrambleText() {
    const currentTitle = titles[currentTitleIndex];
    let iteration = 0;
    let intervalRef;

    const maxIterations = currentTitle.length * 3;
    
    intervalRef = setInterval(() => {
        let output = '';
        for (let i = 0; i < currentTitle.length; i++) {
            if (i < iteration / 3) {
                output += currentTitle[i];
            } else {
                output += chars[Math.floor(Math.random() * chars.length)];
            }
        }
        
        typewriter.textContent = output;
        
        if (iteration >= maxIterations) {
            clearInterval(intervalRef);
            currentTitleIndex = (currentTitleIndex + 1) % titles.length;
            setTimeout(scrambleText, 3000);
        }
        
        iteration += 1;
    }, 30);
}
