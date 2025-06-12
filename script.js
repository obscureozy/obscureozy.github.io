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
let typingSpeed = 100;
let deletingSpeed = 50;
let pauseTime = 2000;

function typeWriter() {
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
        setTimeout(typeWriter, pauseTime);
    } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        setTimeout(typeWriter, 500);
    } else {
        setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
    }
}

// Start the typewriter effect when the page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
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

// Add hover effect to timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(10px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
    });
});

// Scroll to Top Button
const scrollToTopButton = document.getElementById('scrollToTop');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

// Smooth scroll to top when button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Blog Posts from RSS Feed
async function fetchBlogPosts() {
    const blogPostsContainer = document.getElementById('blogPosts');
    const RSS_URL = 'https://docak.hashnode.dev/rss.xml';
    const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

    try {
        const response = await fetch(CORS_PROXY + encodeURIComponent(RSS_URL));
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        
        const items = xmlDoc.getElementsByTagName('item');
        const posts = Array.from(items).slice(0, 3); // Get latest 3 posts
        
        blogPostsContainer.innerHTML = ''; // Clear loading state
        
        posts.forEach(post => {
            const title = post.getElementsByTagName('title')[0].textContent;
            const link = post.getElementsByTagName('link')[0].textContent;
            const pubDate = new Date(post.getElementsByTagName('pubDate')[0].textContent);
            const description = post.getElementsByTagName('description')[0].textContent;
            
            // Create post element
            const postElement = document.createElement('article');
            postElement.className = 'blog-post';
            
            // Format date
            const formattedDate = pubDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            // Create post content
            postElement.innerHTML = `
                <h3>${title}</h3>
                <div class="post-meta">
                    <span><i class="far fa-calendar"></i> ${formattedDate}</span>
                </div>
                <div class="post-excerpt">${description}</div>
                <a href="${link}" class="read-more" target="_blank" rel="noopener">
                    Read More <i class="fas fa-arrow-right"></i>
                </a>
            `;
            
            blogPostsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        blogPostsContainer.innerHTML = `
            <div class="blog-error">
                <i class="fas fa-exclamation-circle"></i>
                Unable to load blog posts. Please visit my blog directly.
            </div>
        `;
    }
}

// Fetch blog posts when the page loads
window.addEventListener('load', fetchBlogPosts); 