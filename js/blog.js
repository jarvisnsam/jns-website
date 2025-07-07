/*================================================
Blog JavaScript for Jarvis and Sam Website
Handles search, filtering, and tag functionality
=================================================*/

// Global variables for blog functionality
let currentSearchTerm = '';
let currentTag = '';

// Initialize blog functionality
function initializeBlog() {
    generateBlogPosts();
    setupSearchFunctionality();
    setupTagFiltering();
    setupClearFilters();
    parseURLParams();
}

// Generate blog posts from data
function generateBlogPosts() {
    const container = document.getElementById('blog-posts-container');
    if (!container || !window.blogPosts) return;
    
    const postsHTML = window.blogPosts.map(post => generateBlogCard(post)).join('');
    container.innerHTML = postsHTML;
}

// Generate individual blog card HTML
function generateBlogCard(post) {
    const formattedDate = formatDate(post.publishDate);
    const tagsData = post.tags.map(tag => tag.toLowerCase()).join(',');
    const titleData = post.title.toLowerCase();
    const descriptionData = post.description.toLowerCase();
    
    // Generate tags HTML
    const tagsHTML = post.tags.slice(0, 3).map(tag => 
        `<span class="blog-tag" data-tag="${tag.toLowerCase()}" onclick="filterByTag('${tag.toLowerCase()}')">${tag}</span>`
    ).join('');
    
    return `
        <div class="col-lg-4 col-md-6 mb-4" data-tags="${tagsData}" data-title="${titleData}" data-description="${descriptionData}">
            <article class="blog-card">
                <a href="${post.slug}" class="blog-card-link">
                    <div class="blog-card-image">
                        <img src="${post.featuredImage}" alt="${post.title}" />
                    </div>
                </a>
                <div class="blog-card-content">
                    <h3 class="blog-card-title">
                        <a href="${post.slug}">${post.title}</a>
                    </h3>
                    <p class="blog-card-excerpt">
                        ${post.excerpt}
                    </p>
                    <div class="blog-card-tags">
                        ${tagsHTML}
                    </div>
                    <time class="blog-card-date">${formattedDate}</time>
                </div>
            </article>
        </div>
    `;
}

// Setup search functionality with debouncing
function setupSearchFunctionality() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            filterPosts(this.value, currentTag);
        }, 300); // 300ms debounce
    });
}

// Setup tag filtering
function setupTagFiltering() {
    // Tag filtering is handled by onclick attributes in HTML
    // This function can be extended for additional tag functionality
}

// Setup clear filters functionality
function setupClearFilters() {
    const clearButton = document.getElementById('clear-filters');
    if (!clearButton) return;
    
    clearButton.addEventListener('click', clearFilters);
}

// Filter posts by search term and/or tag
function filterPosts(searchTerm = '', selectedTag = '') {
    const filterStatus = document.getElementById('filter-status');
    const filterText = document.getElementById('filter-text');
    const postsContainer = document.getElementById('blog-posts-container');
    const noResults = document.getElementById('no-results');
    
    // Update global state
    currentSearchTerm = searchTerm.toLowerCase().trim();
    currentTag = selectedTag.toLowerCase().trim();
    
    // Get all blog post cards
    const blogCards = postsContainer.querySelectorAll('[data-tags]');
    let visibleCount = 0;
    
    blogCards.forEach(card => {
        const cardTags = card.getAttribute('data-tags').toLowerCase();
        const cardTitle = card.getAttribute('data-title').toLowerCase();
        const cardDescription = card.getAttribute('data-description').toLowerCase();
        
        // Check if card matches search term
        const matchesSearch = !currentSearchTerm || 
            cardTitle.includes(currentSearchTerm) ||
            cardDescription.includes(currentSearchTerm) ||
            cardTags.includes(currentSearchTerm);
        
        // Check if card matches selected tag
        const matchesTag = !currentTag || 
            cardTags.split(',').some(tag => tag.trim() === currentTag);
        
        // Show/hide card based on filters
        if (matchesSearch && matchesTag) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Update filter status
    updateFilterStatus(visibleCount, filterStatus, filterText);
    
    // Show/hide no results message
    if (visibleCount === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
    
    // Update URL
    updateURL();
}

// Update filter status display
function updateFilterStatus(visibleCount, filterStatus, filterText) {
    if (currentSearchTerm || currentTag) {
        let statusText = `Showing ${visibleCount} post${visibleCount !== 1 ? 's' : ''}`;
        
        if (currentSearchTerm && currentTag) {
            statusText += ` for "${currentSearchTerm}" in "${toTitleCase(currentTag)}"`;
        } else if (currentSearchTerm) {
            statusText += ` for "${currentSearchTerm}"`;
        } else if (currentTag) {
            statusText += ` tagged "${toTitleCase(currentTag)}"`;
        }
        
        filterText.textContent = statusText;
        filterStatus.style.display = 'block';
    } else {
        filterStatus.style.display = 'none';
    }
}

// Filter by tag (called from tag clicks)
function filterByTag(tag) {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput ? searchInput.value : '';
    
    // If clicking the same tag, clear it
    if (currentTag === tag.toLowerCase()) {
        filterPosts(searchTerm, '');
    } else {
        filterPosts(searchTerm, tag);
    }
    
    // Update visual state of tags
    updateTagVisualState(tag);
}

// Update visual state of tags (highlight selected tag)
function updateTagVisualState(selectedTag) {
    const allTags = document.querySelectorAll('.blog-tag');
    
    allTags.forEach(tag => {
        const tagText = tag.getAttribute('data-tag');
        if (tagText && tagText.toLowerCase() === selectedTag.toLowerCase() && currentTag) {
            tag.style.background = 'linear-gradient(90deg, #00BFFF, #FF3333)';
            tag.style.color = '#FFFFFF';
            tag.style.borderColor = 'transparent';
        } else {
            // Reset to default styles
            tag.style.background = 'rgba(0, 191, 255, 0.1)';
            tag.style.color = '#00BFFF';
            tag.style.borderColor = 'rgba(0, 191, 255, 0.2)';
        }
    });
}

// Clear all filters
function clearFilters() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
    }
    
    currentSearchTerm = '';
    currentTag = '';
    
    filterPosts('', '');
    updateTagVisualState(''); // Reset all tag styles
}

// Convert string to title case
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => 
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
}

// Update URL with current filters (for sharing/bookmarking)
function updateURL() {
    const url = new URL(window.location);
    
    if (currentSearchTerm) {
        url.searchParams.set('search', currentSearchTerm);
    } else {
        url.searchParams.delete('search');
    }
    
    if (currentTag) {
        url.searchParams.set('tag', currentTag);
    } else {
        url.searchParams.delete('tag');
    }
    
    // Update URL without page reload
    window.history.replaceState({}, '', url);
}

// Parse URL parameters on page load
function parseURLParams() {
    const url = new URL(window.location);
    const searchTerm = url.searchParams.get('search') || '';
    const tag = url.searchParams.get('tag') || '';
    
    // Set search input value
    const searchInput = document.getElementById('search-input');
    if (searchInput && searchTerm) {
        searchInput.value = searchTerm;
    }
    
    // Apply filters
    if (searchTerm || tag) {
        filterPosts(searchTerm, tag);
        if (tag) {
            updateTagVisualState(tag);
        }
    }
}

// Utility function for copying blog post links
function copyBlogLink(url) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function() {
            showCopyNotification('Link copied to clipboard!');
        }, function(err) {
            console.error('Could not copy text: ', err);
            fallbackCopyTextToClipboard(url);
        });
    } else {
        fallbackCopyTextToClipboard(url);
    }
}

// Fallback copy function for older browsers
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopyNotification('Link copied to clipboard!');
        } else {
            showCopyNotification('Failed to copy link.');
        }
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        showCopyNotification('Failed to copy link.');
    }
    
    document.body.removeChild(textArea);
}

// Show copy notification
function showCopyNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(90deg, #00BFFF, #FF3333);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Format date for display
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize blog functionality if we're on a blog page
    if (document.getElementById('blog-posts-container')) {
        initializeBlog();
    }
});

// Export functions for global access
window.filterByTag = filterByTag;
window.clearFilters = clearFilters;
window.copyBlogLink = copyBlogLink;
window.initializeBlog = initializeBlog;
