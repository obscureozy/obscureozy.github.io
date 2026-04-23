// src/js/theme.js
export function initThemeToggle() {
    const themeToggleBtn = document.getElementById('themeToggle');
    if (!themeToggleBtn) return;

    const icon = themeToggleBtn.querySelector('i');
    
    // Check for saved theme preference, otherwise use system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    
    // Initial state setup
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        // Fallback to system preference if no localStorage item
        if (!prefersDarkScheme.matches) {
            document.documentElement.setAttribute('data-theme', 'light');
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    }

    // Toggle event listener
    themeToggleBtn.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        
        if (theme === 'light') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });
}
