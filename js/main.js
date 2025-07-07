// Main JavaScript file for Jarvis and Sam website

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links with fixed header offset
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate offset based on screen size
                let offset = 30; // Default desktop offset
                if (window.innerWidth <= 480) {
                    offset = 20; // Mobile offset
                } else if (window.innerWidth <= 768) {
                    offset = 25; // Tablet offset
                }
                
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky navbar functionality
    const navbar = document.querySelector('.navbar-area');
    let lastScrollTop = 0;

    if (navbar) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 120) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // Go to top button functionality
    const goTopBtn = document.getElementById('go-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            goTopBtn.classList.add('active');
        } else {
            goTopBtn.classList.remove('active');
        }
    });

    goTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Contact form functionality
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formSuccess = document.getElementById('form-success');
    const formError = document.getElementById('form-error');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Show loading state
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>Sending...</span><i class="bx bx-loader-alt bx-spin"></i>';
            submitBtn.disabled = true;
            
            // Hide previous messages
            formSuccess.style.display = 'none';
            formError.style.display = 'none';
            
            try {
                const formData = new FormData(contactForm);
                
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Success
                    formSuccess.style.display = 'block';
                    contactForm.reset();
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        formSuccess.style.display = 'none';
                    }, 5000);
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('Error:', error);
                formError.style.display = 'block';
            } finally {
                // Restore button state
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Animation on scroll and immediate hero animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements with animation attributes
    const animatedElements = document.querySelectorAll('[data-animation]');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Trigger hero animations immediately on page load
    setTimeout(() => {
        const heroElements = document.querySelectorAll('#hero [data-animation]');
        heroElements.forEach(el => {
            el.classList.add('animate');
        });
    }, 300);
});

// Mobile menu toggle functionality
function toggleMobileMenu() {
    const offcanvas = document.getElementById('navbarOffcanvas');
    const body = document.body;
    
    if (offcanvas.classList.contains('show')) {
        // Close the offcanvas
        offcanvas.classList.remove('show');
        body.classList.remove('offcanvas-open');
        
        // Remove backdrop
        const backdrop = document.querySelector('.offcanvas-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
    } else {
        // Open the offcanvas
        offcanvas.classList.add('show');
        body.classList.add('offcanvas-open');
        
        // Add backdrop
        const backdrop = document.createElement('div');
        backdrop.className = 'offcanvas-backdrop fade show';
        body.appendChild(backdrop);
        
        // Add click event to backdrop to close offcanvas
        backdrop.addEventListener('click', () => {
            toggleMobileMenu();
        });
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    /* Animation styles */
    [data-animation] {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    [data-animation].animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    [data-animation="fade-up"].animate {
        transform: translateY(0);
    }
    
    [data-animation="fade-zoom-in"] {
        transform: scale(0.8) translateY(30px);
    }
    
    [data-animation="fade-zoom-in"].animate {
        transform: scale(1) translateY(0);
    }
    
    /* Sticky navbar styles */
    .navbar-area.sticky {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        background: rgba(0, 0, 0, 0.95);
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
    }
    
    /* Go to top button styles */
    .go-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(145deg, #00BFFF, #0064C1);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(0, 191, 255, 0.3);
    }
    
    .go-top.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    
    .go-top:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(0, 191, 255, 0.4);
    }
    
    .go-top i {
        font-size: 20px;
    }
    
    /* Mobile menu styles */
    .offcanvas-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1040;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
    }
    
    .offcanvas-backdrop.fade {
        opacity: 0;
    }
    
    .offcanvas-backdrop.show {
        opacity: 1;
    }
    
    body.offcanvas-open {
        overflow: hidden;
    }
    
    /* Floating icons animation */
    .floating-icons .floating-icon {
        animation: float 6s ease-in-out infinite;
    }
    
    .floating-icons .floating-icon:nth-child(2) {
        animation-delay: -1s;
    }
    
    .floating-icons .floating-icon:nth-child(3) {
        animation-delay: -2s;
    }
    
    .floating-icons .floating-icon:nth-child(4) {
        animation-delay: -3s;
    }
    
    .floating-icons .floating-icon:nth-child(5) {
        animation-delay: -4s;
    }
    
    .floating-icons .floating-icon:nth-child(6) {
        animation-delay: -5s;
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
    }
    
    /* Background icons animation */
    .product-bg-icons .bg-icon,
    .contact-bg-icons .bg-icon {
        animation: rotate 20s linear infinite;
    }
    
    .product-bg-icons .bg-icon:nth-child(2),
    .contact-bg-icons .bg-icon:nth-child(2) {
        animation-delay: -5s;
    }
    
    .product-bg-icons .bg-icon:nth-child(3),
    .contact-bg-icons .bg-icon:nth-child(3) {
        animation-delay: -10s;
    }
    
    .product-bg-icons .bg-icon:nth-child(4),
    .contact-bg-icons .bg-icon:nth-child(4) {
        animation-delay: -15s;
    }
    
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    
    /* Form validation styles */
    .form-control.is-invalid {
        border-color: #dc3545;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }
    
    .invalid-feedback {
        display: block;
        width: 100%;
        margin-top: 0.25rem;
        font-size: 0.875em;
        color: #dc3545;
    }
    
    /* Loading animation for submit button */
    .bx-spin {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

document.head.appendChild(style);

// Load latest blog posts for homepage
function loadLatestBlogPosts() {
    const desktopContainer = document.getElementById('latest-blog-posts');
    const mobileContainer = document.getElementById('mobile-blog-carousel');
    
    if (!desktopContainer && !mobileContainer) return;

    // Check if blog-data.js is available
    if (typeof blogPosts === 'undefined') {
        console.log('Blog data not available');
        return;
    }

    // Sort posts by date (newest first) and get latest 3
    const latestPosts = blogPosts
        .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
        .slice(0, 3);

    // Generate desktop grid HTML
    if (desktopContainer) {
        const desktopHTML = latestPosts.map(post => {
            // Fix image path for homepage context (remove ../ prefix)
            const imagePath = post.featuredImage.replace('../', '');

            return `
                <div class="col-lg-4 col-md-6 mb-4 blog-card-item">
                    <div class="latest-blog-card">
                        <a href="blog/${post.slug}" class="latest-blog-card-link">
                            <div class="latest-blog-card-image">
                                <img src="${imagePath}" alt="${post.title}" />
                            </div>
                            <div class="latest-blog-card-content">
                                <h3 class="latest-blog-card-title">${post.title}</h3>
                                <p class="latest-blog-card-excerpt">${post.excerpt}</p>
                                <div class="latest-blog-card-date">${formatDate(post.publishDate)}</div>
                            </div>
                        </a>
                    </div>
                </div>
            `;
        }).join('');
        
        desktopContainer.innerHTML = desktopHTML;
    }

    // Generate mobile carousel HTML
    if (mobileContainer) {
        const mobileHTML = latestPosts.map(post => {
            // Fix image path for homepage context (remove ../ prefix)
            const imagePath = post.featuredImage.replace('../', '');

            return `
                <div class="blog-carousel-slide">
                    <div class="latest-blog-card">
                        <a href="blog/${post.slug}" class="latest-blog-card-link">
                            <div class="latest-blog-card-image">
                                <img src="${imagePath}" alt="${post.title}" />
                            </div>
                            <div class="latest-blog-card-content">
                                <h3 class="latest-blog-card-title">${post.title}</h3>
                                <p class="latest-blog-card-excerpt">${post.excerpt}</p>
                                <div class="latest-blog-card-date">${formatDate(post.publishDate)}</div>
                            </div>
                        </a>
                    </div>
                </div>
            `;
        }).join('');
        
        mobileContainer.innerHTML = mobileHTML;
        
        // Initialize carousel functionality
        initializeBlogCarousel(latestPosts.length);
    }
}

// Initialize blog carousel functionality
function initializeBlogCarousel(totalSlides) {
    const carousel = document.getElementById('mobile-blog-carousel');
    const dotsContainer = document.getElementById('carousel-dots');
    
    if (!carousel || !dotsContainer) return;
    
    let currentSlide = 0;
    let autoSlideInterval;
    
    // Create navigation dots
    const dotsHTML = Array.from({length: totalSlides}, (_, i) => 
        `<button class="carousel-dot ${i === 0 ? 'active' : ''}" data-slide="${i}"></button>`
    ).join('');
    dotsContainer.innerHTML = dotsHTML;
    
    // Get all dots
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    
    // Function to go to specific slide
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        const translateX = -(slideIndex * 33.333);
        carousel.style.transform = `translateX(${translateX}%)`;
        
        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === slideIndex);
        });
    }
    
    // Function to go to next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }
    
    // Add click handlers to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetAutoSlide();
        });
    });
    
    // Auto-slide functionality
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000); // 4 seconds
    }
    
    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
    }
    
    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }
    
    // Touch/swipe support
    let startX = 0;
    let isDragging = false;
    
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        stopAutoSlide();
    });
    
    carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
    });
    
    carousel.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;
        
        if (Math.abs(diffX) > 50) { // Minimum swipe distance
            if (diffX > 0) {
                // Swipe left - next slide
                nextSlide();
            } else {
                // Swipe right - previous slide
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                goToSlide(currentSlide);
            }
        }
        
        resetAutoSlide();
    });
    
    // Pause on hover/touch
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
    
    // Start auto-slide
    startAutoSlide();
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Load blog posts when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Add a small delay to ensure blog-data.js is loaded
    setTimeout(loadLatestBlogPosts, 100);
});
