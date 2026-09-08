// src/js/main.js
import '../css/main.css';
import { initTypewriter } from './typewriter.js';
import { initAnimations } from './animations.js';
import { initScroll } from './scroll.js';
import { initThemeToggle } from './theme.js';
import { initTabs } from './tabs.js';

// Initialize all modules when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initTypewriter();
    initAnimations();
    initScroll();
    initThemeToggle();
    initTabs();
});

