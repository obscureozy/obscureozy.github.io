// src/js/typewriter.js
// Typewriter Effect
const titles = [
    "Technical Support Engineer",
    "Blockchain Infrastructure Specialist",
    "Web3 Developer Advocate"
];

const typewriter = document.querySelector('.typewriter');
let currentTitleIndex = 0;
let isDeleting = false;
let currentText = '';
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

export function initTypewriter() {
    if (!typewriter) return;
    setTimeout(typeWriterLoop, 1000);
}

function typeWriterLoop() {
    const currentTitle = titles[currentTitleIndex];

    if (isDeleting) {
        currentText = currentTitle.substring(0, currentText.length - 1);
        typewriter.textContent = currentText;
        typewriter.classList.add('deleting');
        typewriter.classList.remove('typing');
    } else {
        currentText = currentTitle.substring(0, currentText.length + 1);
        typewriter.textContent = currentText;
        typewriter.classList.add('typing');
        typewriter.classList.remove('deleting');
    }

    if (!isDeleting && currentText === currentTitle) {
        isDeleting = true;
        setTimeout(typeWriterLoop, pauseTime);
    } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        setTimeout(typeWriterLoop, 500);
    } else {
        setTimeout(typeWriterLoop, isDeleting ? deletingSpeed : typingSpeed);
    }
}
