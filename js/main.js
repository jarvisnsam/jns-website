// Main JavaScript file for Jarvis and Sam website

// Function to handle anchor scrolling with proper offset
function scrollToAnchor(hash) {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
        // Calculate offset based on screen size - matching fixed header height
        let offset = 80; // Desktop fixed header height
        if (window.innerWidth <= 768) {
            offset = 70; // Mobile fixed header height
        }
        
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Handle cross-page anchor navigation
function handleCrossPageAnchor() {
    if (window.location.hash) {
        // Wait for the page to fully load and header to be rendered
        setTimeout(() => {
            scrollToAnchor(window.location.hash);
        }, 300); // Small delay to ensure page is rendered
    }
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Handle cross-page anchor navigation on page load
    handleCrossPageAnchor();
    
    // Also handle it after a brief delay in case content loads dynamically
    setTimeout(handleCrossPageAnchor, 1000);
    
    // Smooth scrolling for navigation links with fixed header offset
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToAnchor(targetId);
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
    
    if (goTopBtn) {
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
    }

    // Contact form functionality - TEMPORARILY DISABLED FOR ENCHARGE TRACKING SETUP
    // This allows natural form submission so Encharge can detect and register the form
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formSuccess = document.getElementById('form-success');
    const formError = document.getElementById('form-error');

    // Temporarily comment out JavaScript form handling to allow natural submission
    /*
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
    */

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
    // Since blog posts are now hard-coded in HTML, just initialize the Swiper
    // No need to dynamically load content
    initializeBlogSwiper();
}

// Initialize blog carousel using Swiper
function initializeBlogSwiper() {
    // Wait a moment to ensure Swiper library is loaded
    setTimeout(() => {
        if (typeof Swiper === 'undefined') {
            console.log('Swiper library not loaded');
            return;
        }
        
        // Check if swiper already exists to prevent duplicate initialization
        if (window.blogSwiperInstance) {
            window.blogSwiperInstance.destroy(true, true);
        }
        
        // Initialize Swiper for blog carousel
        window.blogSwiperInstance = new Swiper('.blog-swiper', {
            // Core settings - 1 slide at a time on mobile
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 600,
            
            // Loop through slides for infinite scrolling
            loop: true,
            
            // Auto-play with 3.5 seconds delay
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true
            },
            
            // Pagination dots
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3
            },
            
            // Navigation arrows (optional - can be added if needed)
            navigation: {
                nextEl: '.blog-swiper-next',
                prevEl: '.blog-swiper-prev',
            },
            
            // Touch settings for better mobile experience
            touchEventsTarget: 'container',
            grabCursor: true,
            allowTouchMove: true,
            threshold: 10,
            touchRatio: 1,
            touchReleaseOnEdges: true,
            
            // Prevent conflicts with vertical scrolling
            touchStartPreventDefault: false,
            touchMoveStopPropagation: true,
            simulateTouch: true,
            resistance: true,
            resistanceRatio: 0.85,
            
            // Responsive breakpoints
            breakpoints: {
                // Mobile - 1 slide max
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // Tablet - 2 slides
                768: {
                    slidesPerView: 2,
                    spaceBetween: 25
                },
                // Desktop - 3 slides max
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
        });
        
        // Clean up on page unload
        window.addEventListener('beforeunload', () => {
            if (window.blogSwiperInstance && window.blogSwiperInstance.autoplay) {
                window.blogSwiperInstance.autoplay.stop();
                window.blogSwiperInstance.destroy(true, true);
            }
        });
    }, 100);
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Load blog posts when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait for all scripts to load before initializing Swiper
    if (document.readyState === 'complete' || document.readyState === 'loaded') {
        initializeBlogSwiper();
    } else {
        window.addEventListener('load', function() {
            initializeBlogSwiper();
        });
    }
});
