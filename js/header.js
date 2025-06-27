const headerHTML = `
<div class="navbar-area" id="navbar">
    <div class="container">
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand d-flex align-items-center" href="index.html">
                <img 
                    src="img/jns_logo.png" 
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
                        <a href="index.html#hero" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#about" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#products" class="nav-link">Products</a>
                    </li>
                    <li class="nav-item">
                        <a href="lab.html" class="nav-link">Lab</a>
                    </li>
                    <li class="nav-item">
                        <a href="https://blog.jarvisnsam.com/" class="nav-link" target="_blank">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#customers" class="nav-link">Customers</a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#contact" class="nav-link">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</div>

<!-- Mobile Menu -->
<div class="offcanvas offcanvas-start" id="navbarOffcanvas">
    <div class="offcanvas-header">
        <a class="navbar-brand d-flex align-items-center" href="index.html">
            <img 
                src="img/jns_logo.png" 
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
                <a href="index.html#hero" class="nav-link" onclick="toggleMobileMenu()">Home</a>
            </li>
            <li class="nav-item">
                <a href="index.html#about" class="nav-link" onclick="toggleMobileMenu()">About</a>
            </li>
            <li class="nav-item">
                <a href="index.html#products" class="nav-link" onclick="toggleMobileMenu()">Products</a>
            </li>
            <li class="nav-item">
                <a href="lab.html" class="nav-link" onclick="toggleMobileMenu()">Lab</a>
            </li>
            <li class="nav-item">
                <a href="https://blog.jarvisnsam.com/" class="nav-link" target="_blank">Blog</a>
            </li>
            <li class="nav-item">
                <a href="index.html#customers" class="nav-link" onclick="toggleMobileMenu()">Customers</a>
            </li>
            <li class="nav-item">
                <a href="index.html#contact" class="nav-link" onclick="toggleMobileMenu()">Contact Us</a>
            </li>
        </ul>
    </div>
</div>`;

function loadHeader() {
    document.getElementById('header').innerHTML = headerHTML;
}
