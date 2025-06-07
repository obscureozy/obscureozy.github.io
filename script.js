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

    // 3D Cube Scroll Effect
    const sections = document.querySelectorAll('section');
    let lastScrollY = window.scrollY;
    const cubeSize = 100; // Size of the cube in pixels

    function updateCubeTransform() {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            
            if (scrollProgress > 0 && scrollProgress < 1) {
                // Calculate rotation based on scroll progress
                const rotation = scrollProgress * 90;
                const translateZ = Math.sin(rotation * Math.PI / 180) * cubeSize;
                
                // Apply 3D transform
                section.style.transform = `
                    rotateX(${rotation}deg)
                    translateZ(${translateZ}px)
                `;
                
                // Add some perspective to the content
                section.style.opacity = 1 - (scrollProgress * 0.5);
            } else if (scrollProgress >= 1) {
                // Section is fully scrolled
                section.style.transform = 'rotateX(90deg) translateZ(0)';
                section.style.opacity = 0.5;
            } else {
                // Section is not yet scrolled
                section.style.transform = 'rotateX(0) translateZ(0)';
                section.style.opacity = 1;
            }
        });
    }

    // Update on scroll
    window.addEventListener('scroll', () => {
        requestAnimationFrame(updateCubeTransform);
    });

    // Initial update
    updateCubeTransform();

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
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
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