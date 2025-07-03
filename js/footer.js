const footerHTML = `
<div class="footer-area">
    <div class="footer-widget-info ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-6 col-md-4">
                    <div class="footer-widget">
                        <h4>Contact Us</h4>
                        <div class="footer-logo mb-3">
                            <img 
                                src="img/jns_logo.png" 
                                alt="Jarvis and Sam" 
                                style="max-width: 60px; max-height: 60px; object-fit: contain;"
                            />
                        </div>
                        <p style="margin-bottom: 20px; font-size: 0.9rem;">Jarvis and Sam</p>
                        
                        <!-- Contact & Social Media Grid (5x2) -->
                        <div class="footer-contact-social-grid">
                            <!-- Row 1 -->
                            <a href="tel:+85252119127" class="footer-btn" title="Phone">
                                <i class="bx bx-phone"></i>
                            </a>
                            <a href="https://wa.me/85252119127" target="_blank" rel="noopener noreferrer" class="footer-btn" title="WhatsApp">
                                <i class="bx bxl-whatsapp"></i>
                            </a>
                            <a href="mailto:info@jarvisnsam.com" class="footer-btn" title="Email">
                                <i class="bx bx-envelope"></i>
                            </a>
                            <a href="https://maps.app.goo.gl/vh1dGuscVY77rdcx6" target="_blank" rel="noopener noreferrer" class="footer-btn" title="Address">
                                <i class="bx bx-map"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/jarvisnsam" target="_blank" rel="noopener noreferrer" class="footer-btn" title="LinkedIn">
                                <i class="bx bxl-linkedin"></i>
                            </a>
                            <!-- Row 2 -->
                            <a href="https://www.facebook.com/jarvisnsam" target="_blank" rel="noopener noreferrer" class="footer-btn" title="Facebook">
                                <i class="bx bxl-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/jarvisnsam" target="_blank" rel="noopener noreferrer" class="footer-btn" title="Instagram">
                                <i class="bx bxl-instagram"></i>
                            </a>
                            <a href="https://www.threads.net/@jarvisnsam" target="_blank" rel="noopener noreferrer" class="footer-btn" title="Threads">
                                <i class="bx bx-at"></i>
                            </a>
                            <a href="https://x.com/JarvisnSam" target="_blank" rel="noopener noreferrer" class="footer-btn" title="X (Twitter)">
                                <i class="bx bx-x"></i>
                            </a>
                            <a href="https://www.youtube.com/@JarvisnSam" target="_blank" rel="noopener noreferrer" class="footer-btn" title="YouTube">
                                <i class="bx bxl-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-4">
                    <div class="footer-widget">
                        <h4>Sitemap</h4>
                        <ul>
                            <li><a href="index.html#hero">Home</a></li>
                            <li><a href="index.html#about">About</a></li>
                            <li><a href="index.html#products">Products</a></li>
                            <li><a href="lab.html">Lab</a></li>
                            <li><a href="https://blog.jarvisnsam.com/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                            <li><a href="index.html#customers">Customers</a></li>
                            <li><a href="index.html#contact">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-4">
                    <div class="footer-widget">
                        <h4>Products</h4>
                        <ul>
                            <li><a href="index.html#smartgent-detail">Smartgent</a></li>
                            <li><a href="index.html#voicebot">Voicebot</a></li>
                            <li><a href="index.html#agentel-agency">Agentel Agency</a></li>
                            <li><a href="index.html#custom-solutions">Custom Solutions</a></li>
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
                        <p>© 2025 Jarvis and Sam. All rights reserved.</p>
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

function loadFooter() {
    document.getElementById('footer').innerHTML = footerHTML;
}
