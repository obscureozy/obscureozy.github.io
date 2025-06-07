document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Cube rotation based on scroll
    const cubes = document.querySelectorAll('.cube');
    let lastScrollY = window.scrollY;
    let rotationX = 0;
    let rotationY = 0;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY;
        
        // Update rotation based on scroll direction and speed
        rotationY += scrollDelta * 0.2;
        rotationX += scrollDelta * 0.1;
        
        // Apply rotation to all cubes
        cubes.forEach(cube => {
            cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        });
        
        lastScrollY = currentScrollY;
    });

    // Add intersection observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });

    // Add fade-in class
    document.addEventListener('scroll', () => {
        document.querySelectorAll('section').forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight * 0.8) {
                section.classList.add('fade-in');
            }
        });
    });
});

// Add fade-in class to CSS
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style); 