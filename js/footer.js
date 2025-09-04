// Auto-detect path depth for consistent relative paths (shared with header.js)
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

function generateFooterHTML() {
    const basePath = getBasePath();
    
    return `
<div class="footer-area">
    <div class="footer-widget-info ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12 col-12 mb-4">
                    <div class="footer-widget text-center">
                        <!-- Centered Logo and Company Name -->
                        <div class="footer-brand-section mb-4">
                            <div class="footer-logo mb-3">
                                <a href="${basePath}" style="display: block;">
                                    <img 
                                        src="${basePath}img/JnS_logo_960x540.png" 
                                        alt="Jarvis and Sam - Enterprise AI Solutions" 
                                        style="max-width: 140px; height: auto; object-fit: contain; display: block; margin: 0 auto;"
                                    />
                                </a>
                            </div>
                            <p style="margin: 0; font-size: 0.85rem; font-weight: 400; color: #fff;">Enterprise AI Solutions | AI Enablement Training</p>
                        </div>
                        
                        <!-- All Contact & Social Buttons (10 buttons in 2 rows of 5) -->
                        <div class="footer-all-buttons">
                            <!-- Row 1: 5 buttons -->
                            <div class="button-row mb-2" style="display: flex; justify-content: center; gap: 4px; flex-wrap: wrap;">
                                <a href="tel:+85252119127" class="footer-btn" title="Phone" style="width: 36px; height: 36px; padding: 4px; font-size: 12px;">
                                    <i class="bx bx-phone"></i>
                                </a>
                                <a href="https://wa.me/85252119127" target="_blank" rel="noopener noreferrer" class="footer-btn" title="WhatsApp" style="width: 36px; height: 36px; padding: 4px; font-size: 12px;">
                                    <i class="bx bxl-whatsapp"></i>
                                </a>
                                <a href="mailto:info@jarvisnsam.com" class="footer-btn" title="Email" style="width: 36px; height: 36px; padding: 4px; font-size: 12px;">
                                    <i class="bx bx-envelope"></i>
                                </a>
                                <a href="https://maps.app.goo.gl/vh1dGuscVY77rdcx6" target="_blank" rel="noopener noreferrer" class="footer-btn" title="Address" style="width: 36px; height: 36px; padding: 4px; font-size: 12px;">
                                    <i class="bx bx-map"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/jarvisnsam" target="_blank" rel="noopener noreferrer" class="footer-btn" title="LinkedIn" style="width: 36px; height: 36px; padding: 4px; font-size: 12px;">
                                    <i class="bx bxl-linkedin"></i>
                                </a>
                            </div>
                            <!-- Row 2: 5 buttons -->
                            <div class="button-row" style="display: flex; justify-content: center; gap: 4px; flex-wrap: wrap;">
                                <a href="https://www.facebook.com/jarvisnsam" target="_blank" rel="noopener noreferrer" class="footer-btn" title="Facebook" style="width: 36px; height: 36px; padding: 4px; font-size: 12px;">
                                    <i class="bx bxl-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/jarvisnsam" target="_blank" rel="noopener noreferrer" class="footer-btn" title="Instagram" style="width: 36px; height: 36px; padding: 4px; font-size: 12px;">
                                    <i class="bx bxl-instagram"></i>
                                </a>
                                <a href="https://www.threads.net/@jarvisnsam" target="_blank" rel="noopener noreferrer" class="footer-btn" title="Threads" style="width: 36px; height: 36px; padding: 4px; font-size: 12px;">
                                    <i class="bx bx-at"></i>
                                </a>
                                <a href="https://x.com/JarvisnSam" target="_blank" rel="noopener noreferrer" class="footer-btn" title="X (Twitter)" style="width: 36px; height: 36px; padding: 4px; font-size: 12px;">
                                    <i class="bx bx-x"></i>
                                </a>
                                <a href="https://www.youtube.com/@JarvisnSam" target="_blank" rel="noopener noreferrer" class="footer-btn" title="YouTube" style="width: 36px; height: 36px; padding: 4px; font-size: 12px;">
                                    <i class="bx bxl-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-6">
                    <div class="footer-widget">
                        <h4><a href="${basePath}sitemap.xml" style="color: #FFFFFF; text-decoration: none;">Sitemap</a></h4>
                        <ul>
                            <li><a href="${basePath}index.html#about">About</a></li>
                            <li><a href="${basePath}training/">Training</a></li>
                            <li><a href="${basePath}lab/">Lab</a></li>
                            <li><a href="${basePath}blog/">Blog</a></li>
                            <li><a href="${basePath}link/">Link</a></li>
                            <li><a href="${basePath}index.html#contact">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-6">
                    <div class="footer-widget">
                        <h4><a href="${basePath}index.html#products" style="color: #FFFFFF; text-decoration: none;">Products</a></h4>
                        <ul>
                            <li><a href="${basePath}index.html#smartgent-detail">Smartgent</a></li>
                            <li><a href="${basePath}voicebot/">Voicebot</a></li>
                            <li><a href="${basePath}index.html#agentel-agency">Agentel Agency</a></li>
                            <li><a href="${basePath}index.html#custom-solutions">Custom Solutions</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copy-right-area">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="cpr-center">
                        <p style="margin-bottom: 10px;">
                            <a href="${basePath}privacy-policy/" style="color: #667eea; text-decoration: none; font-size: 0.9rem;">Privacy Policy</a>
                        </p>
                        <p style="margin: 0;">© 2025 Jarvis and Sam. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Go to Top Button -->
<div class="go-top" id="go-top">
    <i class="bx bx-up-arrow-alt"></i>
</div>`;
}

function loadFooter() {
    // Clear any existing footer content first
    const footerElement = document.getElementById('footer');
    if (footerElement) {
        footerElement.innerHTML = '';
        // Force re-render
        setTimeout(() => {
            footerElement.innerHTML = generateFooterHTML();
        }, 10);
    }
}
