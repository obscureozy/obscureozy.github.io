$( () => {
	
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
	});
	
	//Click Logo To Scroll To Top
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},500);
		e.preventDefault();
	});
	
	//Toggle Menu
	$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
		$('ul').toggleClass('showMenu');
		
		$('li').on('click', () => {
			$('ul').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
		});
	});
	
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize background cubes animation
    initBackgroundCubes();
    
    // Add smooth scrolling to all links
    initSmoothScrolling();
    
    // Add hover effects to timeline items
    initTimelineHover();
});

// Initialize the animated background cubes
function initBackgroundCubes() {
    const cubes = document.querySelectorAll('.cube');
    
    // Add random movement to each cube
    cubes.forEach(cube => {
        // Random initial position
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        
        // Apply random position
        cube.style.left = `${randomX}%`;
        cube.style.top = `${randomY}%`;
        
        // Random animation delay
        const randomDelay = Math.random() * 5;
        cube.style.animationDelay = `-${randomDelay}s`;
    });
}

// Initialize smooth scrolling for all anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add hover effects to timeline items
function initTimelineHover() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        // Add hover effect
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        // Remove hover effect
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

// Add intersection observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
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