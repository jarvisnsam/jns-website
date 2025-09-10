/*================================================
Blog Read More Section
Generates "Read More" suggestions at the bottom of blog posts
=================================================*/

function initializeReadMore() {
    // Get current page filename
    const currentPath = window.location.pathname;
    const currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    
    // Check if blogPosts is available
    if (typeof blogPosts === 'undefined') {
        console.error('Blog data not loaded');
        return;
    }
    
    // Filter out current blog post
    const otherPosts = blogPosts.filter(post => post.slug !== currentFile);
    
    // Get container
    const container = document.getElementById('read-more-posts');
    if (!container) {
        console.error('Read more container not found');
        return;
    }
    
    // Determine how many posts to show (3 for desktop, 1 for mobile)
    const isMobile = window.innerWidth <= 768;
    const postsToShow = isMobile ? 1 : 3;
    
    // Get random posts (or first posts if not enough)
    const selectedPosts = otherPosts.slice(0, postsToShow);
    
    // Generate HTML for each post
    selectedPosts.forEach(post => {
        const postHTML = `
            <div class="col-lg-4 col-md-6 col-12">
                <div class="read-more-card">
                    <a href="./${post.slug}" class="read-more-card-link">
                        <div class="read-more-card-image">
                            <img src="${post.featuredImage}" alt="${post.title}" />
                        </div>
                        <div class="read-more-card-content">
                            <h3 class="read-more-card-title">${post.title}</h3>
                            <p class="read-more-card-excerpt">${post.excerpt}</p>
                            <div class="read-more-card-date">${formatDate(post.publishDate)}</div>
                        </div>
                    </a>
                </div>
            </div>
        `;
        container.innerHTML += postHTML;
    });
}

// Format date helper
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Handle responsive changes
function handleReadMoreResize() {
    const container = document.getElementById('read-more-posts');
    if (!container) return;
    
    const isMobile = window.innerWidth <= 768;
    const visiblePosts = container.querySelectorAll('.col-lg-4');
    
    if (isMobile) {
        // Show only first post on mobile
        visiblePosts.forEach((post, index) => {
            post.style.display = index === 0 ? 'block' : 'none';
        });
    } else {
        // Show all posts on desktop
        visiblePosts.forEach(post => {
            post.style.display = 'block';
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeReadMore();
        handleReadMoreResize();
    });
} else {
    initializeReadMore();
    handleReadMoreResize();
}

// Handle window resize
window.addEventListener('resize', handleReadMoreResize);
