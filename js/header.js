// Auto-detect path depth for consistent relative paths
function getBasePath() {
    const pathname = window.location.pathname;
    const pathSegments = pathname.split('/').filter(segment => segment !== '');
    
    // Remove filename if present (ends with .html)
    if (pathSegments.length > 0 && pathSegments[pathSegments.length - 1].includes('.html')) {
        pathSegments.pop();
    }
    
    // Calculate depth from root (excluding domain)
    const depth = pathSegments.length;
    return depth > 0 ? '../'.repeat(depth) : './';
}

function generateHeaderHTML() {
    const basePath = getBasePath();
    
    return `
<div class="navbar-area" id="navbar">
    <div class="container">
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand d-flex align-items-center" href="${basePath}index.html">
                <img 
                    src="${basePath}img/jns_logo.png" 
                    alt="Jarvis and Sam" 
                    style="max-width: 50px; max-height: 50px; object-fit: contain; margin-right: 10px;"
                />
                <h3 class="gradient-text mb-0">JARVIS AND SAM</h3>
            </a>
            <div class="other-all-option">
                <button 
                    class="navbar-toggler" 
                    type="button" 
                    onclick="toggleMobileMenu()"
                >
                    <span class="burger-menu">
                        <span class="top-bar"></span>
                        <span class="middle-bar"></span>
                        <span class="bottom-bar"></span>
                    </span>
                </button>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a href="${basePath}index.html#about" class="nav-link">About</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="${basePath}index.html#products" class="nav-link dropdown-toggle" id="productsDropdown">Products</a>
                        <ul class="dropdown-menu enhanced-dropdown" aria-labelledby="productsDropdown">
                            <li><a class="dropdown-item" href="${basePath}index.html#smartgent-detail">Smartgent</a></li>
                            <li><a class="dropdown-item" href="${basePath}voicebot/">Voicebot</a></li>
                            <li><a class="dropdown-item" href="${basePath}index.html#agentel-agency">Agentel Agency</a></li>
                            <li><a class="dropdown-item" href="${basePath}index.html#custom-solutions">Custom Solutions</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="${basePath}lab/" class="nav-link">Lab</a>
                    </li>
                    <li class="nav-item">
                        <a href="${basePath}blog/" class="nav-link">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a href="${basePath}link/" class="nav-link">Link</a>
                    </li>
                </ul>
                <a href="${basePath}index.html#contact" class="btn contact-btn">Contact Us</a>
            </div>
        </nav>
    </div>
</div>

<!-- Mobile Menu -->
<div class="offcanvas offcanvas-start" id="navbarOffcanvas">
    <div class="offcanvas-header">
        <a class="navbar-brand d-flex align-items-center" href="${basePath}index.html">
            <img 
                src="${basePath}img/jns_logo.png" 
                alt="Jarvis and Sam" 
                style="max-width: 40px; max-height: 40px; object-fit: contain; margin-right: 10px;"
            />
            <h5 class="gradient-text mb-0">JARVIS AND SAM</h5>
        </a>
        <button type="button" class="btn-close" onclick="toggleMobileMenu()"></button>
    </div>
    <div class="offcanvas-body">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a href="${basePath}index.html#about" class="nav-link" onclick="toggleMobileMenu()">About</a>
            </li>
            <li class="nav-item dropdown">
                <a href="${basePath}index.html#products" class="nav-link dropdown-toggle" id="mobileProductsDropdown">Products</a>
                <ul class="dropdown-menu mobile-dropdown enhanced-dropdown" aria-labelledby="mobileProductsDropdown">
                    <li><a class="dropdown-item" href="${basePath}index.html#smartgent-detail" onclick="toggleMobileMenu()">Smartgent</a></li>
                    <li><a class="dropdown-item" href="${basePath}voicebot/" onclick="toggleMobileMenu()">Voicebot</a></li>
                    <li><a class="dropdown-item" href="${basePath}index.html#agentel-agency" onclick="toggleMobileMenu()">Agentel Agency</a></li>
                    <li><a class="dropdown-item" href="${basePath}index.html#custom-solutions" onclick="toggleMobileMenu()">Custom Solutions</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a href="${basePath}lab/" class="nav-link" onclick="toggleMobileMenu()">Lab</a>
            </li>
            <li class="nav-item">
                <a href="${basePath}blog/" class="nav-link" onclick="toggleMobileMenu()">Blog</a>
            </li>
            <li class="nav-item">
                <a href="${basePath}link/" class="nav-link" onclick="toggleMobileMenu()">Link</a>
            </li>
        </ul>
        <div class="mobile-contact-btn-container">
            <a href="${basePath}index.html#contact" class="btn contact-btn" onclick="toggleMobileMenu()">Contact Us</a>
        </div>
    </div>
</div>`;
}

function loadHeader() {
    document.getElementById('header').innerHTML = generateHeaderHTML();
    initializeDropdowns();
}

function initializeDropdowns() {
    // Desktop dropdown functionality (mouseover only)
    const desktopDropdowns = document.querySelectorAll('.navbar-collapse .nav-item.dropdown');
    
    desktopDropdowns.forEach(item => {
        const dropdownMenu = item.querySelector('.dropdown-menu');
        const dropdownToggle = item.querySelector('.dropdown-toggle');
        
        if (!dropdownMenu || !dropdownToggle) return;
        
        // Desktop mouseover behavior - ensure visibility
        item.addEventListener('mouseenter', () => {
            dropdownMenu.classList.add('show');
            // Force visibility in case CSS doesn't apply immediately
            dropdownMenu.style.visibility = 'visible';
            dropdownMenu.style.opacity = '1';
            dropdownMenu.style.pointerEvents = 'auto';
        });
        
        item.addEventListener('mouseleave', () => {
            dropdownMenu.classList.remove('show');
            // Reset inline styles to let CSS handle it
            dropdownMenu.style.visibility = '';
            dropdownMenu.style.opacity = '';
            dropdownMenu.style.pointerEvents = '';
        });
        
        // Make Products clickable to go to products section
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = dropdownToggle.getAttribute('href');
        });
    });
    
    // Mobile dropdown functionality (click only)
    const mobileDropdowns = document.querySelectorAll('.offcanvas .nav-item.dropdown');
    mobileDropdowns.forEach(item => {
        const dropdownToggle = item.querySelector('.dropdown-toggle');
        const dropdownMenu = item.querySelector('.dropdown-menu');
        
        // Remove any mouseover behavior on mobile
        item.removeEventListener('mouseenter', () => {});
        item.removeEventListener('mouseleave', () => {});
        
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle dropdown
            const isCurrentlyOpen = dropdownMenu.classList.contains('show');
            
            // Close all dropdowns first
            mobileDropdowns.forEach(otherItem => {
                otherItem.querySelector('.dropdown-menu').classList.remove('show');
            });
            
            // If it wasn't open, open this one
            if (!isCurrentlyOpen) {
                dropdownMenu.classList.add('show');
            }
        });
    });
}
