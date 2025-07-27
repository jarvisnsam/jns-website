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
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="${basePath}index.html#hero" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="${basePath}index.html#about" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="${basePath}index.html#products" class="nav-link">Products</a>
                    </li>
                    <li class="nav-item">
                        <a href="${basePath}lab/" class="nav-link">Lab</a>
                    </li>
                    <li class="nav-item">
                        <a href="${basePath}link/" class="nav-link">Link</a>
                    </li>
                    <li class="nav-item">
                        <a href="${basePath}blog/" class="nav-link">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a href="${basePath}index.html#customers" class="nav-link">Customers</a>
                    </li>
                    <li class="nav-item">
                        <a href="${basePath}index.html#contact" class="nav-link">Contact Us</a>
                    </li>
                </ul>
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
                <a href="${basePath}index.html#hero" class="nav-link" onclick="toggleMobileMenu()">Home</a>
            </li>
            <li class="nav-item">
                <a href="${basePath}index.html#about" class="nav-link" onclick="toggleMobileMenu()">About</a>
            </li>
            <li class="nav-item">
                <a href="${basePath}index.html#products" class="nav-link" onclick="toggleMobileMenu()">Products</a>
            </li>
            <li class="nav-item">
                <a href="${basePath}lab/" class="nav-link" onclick="toggleMobileMenu()">Lab</a>
            </li>
            <li class="nav-item">
                <a href="${basePath}link/" class="nav-link" onclick="toggleMobileMenu()">Link</a>
            </li>
            <li class="nav-item">
                <a href="${basePath}blog/" class="nav-link" onclick="toggleMobileMenu()">Blog</a>
            </li>
            <li class="nav-item">
                <a href="${basePath}index.html#customers" class="nav-link" onclick="toggleMobileMenu()">Customers</a>
            </li>
            <li class="nav-item">
                <a href="${basePath}index.html#contact" class="nav-link" onclick="toggleMobileMenu()">Contact Us</a>
            </li>
        </ul>
    </div>
</div>`;
}

function loadHeader() {
    document.getElementById('header').innerHTML = generateHeaderHTML();
}
