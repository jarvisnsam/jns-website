const footerHTML = `
<div class="footer-area">
    <div class="footer-widget-info ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-6 col-md-4">
                    <div class="footer-widget">
                        <h4>Company</h4>
                        <div class="footer-logo mb-3">
                            <img 
                                src="img/jns_logo.png" 
                                alt="Jarvis and Sam" 
                                style="max-width: 60px; max-height: 60px; object-fit: contain;"
                            />
                        </div>
                        <ul>
                            <li>Jarvis and Sam specializes in AI technologies that automate processes, analyze data, and optimize workflows for businesses.</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-4">
                    <div class="footer-widget">
                        <h4>Sitemap</h4>
                        <ul>
                            <li><a href="index.html#hero">Home</a></li>
                            <li><a href="index.html#about">About</a></li>
                            <li><a href="index.html#products">Products</a></li>
                            <li><a href="index.html#customers">Customers</a></li>
                            <li><a href="index.html#contact">Contact Us</a></li>
                            <li><a href="https://blog.jarvisnsam.com" target="_blank" rel="noopener noreferrer">Blog</a></li>
                            <li><a href="sitemap.xml" target="_blank" rel="noopener noreferrer">Sitemap</a></li>
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
