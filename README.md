# Jarvis and Sam - Static Website

A modern, static HTML website for Jarvis and Sam AI Solutions, featuring glassmorphism design, optimized for deployment to GitHub Pages and Google Cloud Platform.

## 🚀 Features

- **Pure Static** - No build process required, instant deployment
- **Modern Design** - Glassmorphism UI with backdrop blur effects
- **Template System** - Consistent header/footer across all pages
- **SEO Optimized** - Complete meta tags, Open Graph, Twitter Cards
- **Google Analytics** - GTM tracking integrated
- **Mobile Responsive** - Optimized for all devices and screen sizes
- **Lab Section** - Dynamic lab projects display with filtering
- **Contact Form** - Working contact form with FormSubmit integration
- **Floating Animations** - Enhanced hero section with animated floating icons
- **Dark Theme** - Professional dark theme with gradient accents
- **Glassmorphism Buttons** - Modern button design with hover effects
- **Gradient Typography** - Eye-catching section titles with gradient text

## 📁 Project Structure

```
jns-website/
├── index.html              # Main homepage
├── lab.html                # Lab projects page
├── app.yaml                # Google Cloud App Engine configuration
├── css/
│   ├── boxicons.min.css    # Icon fonts
│   ├── lab.css             # Lab page specific styles
│   └── style.css           # Main styles
├── js/
│   ├── header.js           # Header template & navigation
│   ├── footer.js           # Footer template
│   ├── main.js             # Core functionality & animations
│   └── lab.js              # Lab page functionality
├── img/
│   ├── jns_logo.png        # Main logo
│   ├── customers/          # Customer logos (17 files)
│   └── lab/                # Lab project images
│       └── business_workflow.png
├── fonts/                  # Boxicons font files
│   ├── boxicons.woff       # Boxicons font format 1
│   └── boxicons.woff2      # Boxicons font format 2
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine directives
└── README.md               # This file
```

## 🆕 Creating New Pages

### Quick Start - Create New Pages

1. **Create a new HTML file:**
   ```bash
   touch your-new-page.html
   ```

2. **Use the basic structure and customize meta tags:**
   ```html
   <title>Your Page Title - Jarvis and Sam</title>
   <meta name="description" content="Your page description here" />
   <meta name="keywords" content="your, keywords, here" />
   <meta property="og:title" content="Your Page Title - Jarvis and Sam" />
   <meta property="og:description" content="Your page description here" />
   <meta property="og:url" content="https://jarvisnsam.com/your-new-page.html" />
   ```

3. **Add your content:**
   Replace the `<!-- YOUR CONTENT HERE -->` section with your page content.

4. **Update navigation:**
   Add your page to `js/header.js` navigation menu if needed.

5. **Update sitemap:**
   Add your page to `sitemap.xml` for SEO.

### Page Template Structure

Every page should follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags (customize these) -->
    <title>Page Title - Jarvis and Sam</title>
    <meta name="description" content="Page description" />
    
    <!-- Standard includes (keep these) -->
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="img/jns_logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- GTM & Analytics (keep these) -->
    <script>window.dataLayer = window.dataLayer || [];</script>
    <!-- Google Tag Manager code -->
    
    <!-- CSS includes (keep these) -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/boxicons.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/lab.css">
</head>
<body class="dark-theme">
    <!-- Header (automatic) -->
    <div id="header"></div>
    
    <!-- Your content here -->
    <main>
        <!-- Add your page content -->
    </main>
    
    <!-- Footer (automatic) -->
    <div id="footer"></div>
    
    <!-- JavaScript includes (keep these) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/header.js"></script>
    <script src="js/footer.js"></script>
    <script src="js/main.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            loadHeader();
            loadFooter();
        });
    </script>
</body>
</html>
```

## 🎨 Customization Guide

### Meta Tags for Different Page Types

**Homepage:**
```html
<title>Jarvis and Sam - Transforming Business Through Innovative AI Solutions</title>
<meta name="description" content="Jarvis and Sam specializes in AI technologies that automate processes, analyze data, and optimize business workflows." />
<meta name="keywords" content="AI solutions, business transformation, AI agents, automation, data analysis, workflow optimization, Hong Kong" />
```

**Product Page:**
```html
<title>Product Name - AI Solutions | Jarvis and Sam</title>
<meta name="description" content="Learn about [Product Name], our AI solution that [key benefit]. Features include [key features]." />
<meta name="keywords" content="product name, AI solution, specific features, industry keywords" />
```

**Blog/Article Page:**
```html
<title>Article Title | Jarvis and Sam Blog</title>
<meta name="description" content="Article summary in 150-160 characters that describes the main topic and value." />
<meta name="keywords" content="article topic, related keywords, industry terms" />
```

### Adding New Navigation Items

Edit `js/header.js` to add new menu items:

```javascript
// Add to both desktop and mobile menus
<li class="nav-item">
    <a href="your-page.html" class="nav-link">Your Page</a>
</li>
```

### Updating Footer Links

Edit `js/footer.js` to add footer links:

```javascript
// Add to appropriate footer section
<li><a href="your-page.html">Your Page</a></li>
```

### CSS Customization

**Colors:**
- Primary: `#00BFFF` (Deep Sky Blue)
- Secondary: `#0064C1` (Blue)
- Background: `#05051E` (Dark Navy)
- Text: `#E0E0E0` (Light Gray)

**Adding Custom Styles:**
Add your custom CSS to `css/custom.css` at the bottom of the file.

## 🔧 Local Development

### Option 1: Python HTTP Server
```bash
cd jns-website
python -m http.server 8000
# Access: http://localhost:8000
```

### Option 2: Node.js HTTP Server
```bash
cd jns-website
npx http-server -p 8000
# Access: http://localhost:8000
```

### Option 3: PHP Server
```bash
cd jns-website
php -S localhost:8000
# Access: http://localhost:8000
```

### Option 4: VS Code Live Server
1. Install "Live Server" extension
2. Right-click on any HTML file → "Open with Live Server"

## 🚀 Deployment

### GitHub Pages Deployment

1. **Initialize Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   ```

2. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/yourusername/jns-website.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, Folder: / (root)
   - Save

4. **Access your site:**
   - URL: `https://yourusername.github.io/jns-website/`

### Google Cloud Run Deployment

This project uses Docker and nginx to serve the static website on Google Cloud Run.

1. **Deploy to Cloud Run:**
   ```bash
   gcloud run deploy jns-website --source . --region=asia-east1 --allow-unauthenticated
   ```

2. **Custom domain setup (optional):**
   ```bash
   # First verify domain ownership in Google Search Console
   gcloud beta run domain-mappings create --service=jns-website --domain=your-domain.com --replace
   ```

4. **Check existing domain mappings:**
   ```bash
   # List all domain mappings
   gcloud beta run domain-mappings list
   
   # Get details of specific domain
   gcloud beta run domain-mappings describe --domain=your-domain.com
   ```

3. **Update existing service:**
   ```bash
   # To update an existing deployment
   gcloud run deploy jns-website --source . --region=asia-east1 --allow-unauthenticated
   ```

## 📊 Content Management

### Updating Lab Projects

Lab projects are defined in `js/lab.js`. To add/update projects:

```javascript
const labDataEmbedded = [
    {
        "id": 1,
        "title": "Project Name",
        "description": "Project description (keep under 100 characters)",
        "tags": ["AI", "Agent", "Category"],
        "status": "active",
        "link": "https://project-url.com/",
        "image": "https://image-url.com/image.png"
    }
];
```

### Updating Customer Logos

1. Add logo image to `img/customers/`
2. Update customer array in `index.html`:
   ```html
   <div class="customer-item" data-animation="fade-zoom-in" data-delay="0.1">
       <div class="customer-logo">
           <a href="https://customer-website.com/" target="_blank" rel="noopener noreferrer" title="Customer Name">
               <img src="img/customers/Customer_Logo.png" alt="Customer Name" />
           </a>
       </div>
   </div>
   ```

## 🔍 SEO Optimization

### Sitemap Updates

When adding new pages, update `sitemap.xml`:

```xml
<url>
    <loc>https://jarvisnsam.com/your-new-page.html</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>
```

### Meta Tag Best Practices

- **Title:** 50-60 characters, include main keyword
- **Description:** 150-160 characters, compelling summary
- **Keywords:** 5-10 relevant keywords, comma-separated
- **OG Image:** 1200x630px for social sharing

## 🎯 Analytics & Tracking

### Google Tag Manager

- **Tracks:** Page views, form submissions, button clicks
- **Configure:** Additional events in GTM dashboard

### Contact Form Analytics

The contact form automatically tracks:
- Form submissions
- Success/error rates
- User engagement

## 🔧 Technical Features

### Glassmorphism Design System

Modern UI design with:
- **Backdrop blur effects:** 10px blur for glass-like appearance
- **Semi-transparent backgrounds:** RGBA colors with opacity
- **Gradient borders:** Subtle cyan accent borders
- **Smooth animations:** Cubic-bezier transitions for premium feel

### Button Design

Enhanced button styling features:
- **Glass effect:** Semi-transparent background with backdrop blur
- **Hover animations:** Scale, lift, and glow effects
- **Shimmer effect:** Light sweep animation on hover
- **Icon animations:** Icons slide right on hover
- **Mobile optimized:** Touch-friendly sizing and spacing

### Typography System

Professional typography with:
- **Gradient text:** Section titles with cyan-to-red gradients
- **Font weights:** 900 weight for maximum impact
- **Letter spacing:** Optimized for readability
- **Responsive sizing:** Scales appropriately on mobile

### Lab Page Features

Advanced lab project display:
- **Flexbox centering:** Cards center regardless of quantity
- **Filter system:** Dynamic filtering by technology tags
- **Responsive grid:** Adapts from 4 columns to 1 on mobile
- **Card animations:** Hover effects and smooth transitions

### Floating Icons Animation

The homepage includes animated floating icons. To customize:

1. **Edit positions:** Modify CSS in `css/style.css`
2. **Change icons:** Update Boxicons classes in `index.html`
3. **Adjust animation:** Modify `@keyframes float` in CSS

### Mobile Menu

Responsive mobile navigation with:
- **Slide-in menu:** Smooth offcanvas animation
- **Backdrop overlay:** Dark overlay with blur
- **Touch-friendly:** Large touch targets
- **Gradient effects:** Consistent with design system

### Contact Form

Features:
- **Service:** FormSubmit.co
- **Email:** info@jarvisnsam.com
- **Validation:** Client-side validation
- **Feedback:** Success/error messages
- **Security:** Honeypot spam protection
- **Glass styling:** Consistent with design system

## 🛠️ Troubleshooting

### Common Issues

**Animations not working:**
- Ensure you're using HTTP server (not file://)
- Check browser console for JavaScript errors

**Images not loading:**
- Verify image paths are correct
- Check image file extensions match HTML references

**Contact form not working:**
- Verify FormSubmit.co configuration
- Check network tab for submission errors

**Mobile menu not working:**
- Ensure Bootstrap JavaScript is loaded
- Check for JavaScript console errors

## 📞 Support

For technical issues or questions:
- **Email:** info@jarvisnsam.com
- **Website:** https://jarvisnsam.com

## 📄 License

© 2025 Jarvis and Sam. All rights reserved.
