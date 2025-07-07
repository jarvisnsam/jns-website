# Jarvis and Sam Website

Official website for Jarvis and Sam - Enterprise AI Automation Solutions.

## 🌐 Live Website
- **Production**: [jarvisnsam.com](https://jarvisnsam.com)
- **Cloud Run URL**: https://jns-website-431625878670.asia-east1.run.app

## 📁 Project Structure

```
jns-website/
├── index.html              # Main homepage
├── link.html               # Links page with contact & tools
├── lab.html                # Lab page
├── css/
│   ├── style.css           # Main styles
│   ├── link.css            # Link page styles
│   └── lab.css             # Lab page styles
├── js/
│   ├── main.js             # Main JavaScript
│   ├── header.js           # Header component
│   ├── footer.js           # Footer component
│   ├── link.js             # Link page functionality
│   └── lab.js              # Lab page functionality
├── img/                    # Images and assets
├── .github/workflows/      # GitHub Actions
├── Dockerfile              # Container configuration
├── nginx.conf              # Web server configuration
└── README.md               # This file
```

## 🚀 Quick Git Commands

### Daily Development
```bash
git checkout web
git add .
git commit -m "your changes"
git push origin web
```

### Deploy to Production
```bash
git checkout main
git merge web
git push origin main
```

### Branch Strategy
- **`web`** - Development (GitHub Pages preview)
- **`main`** - Production (auto-deploys to jarvisnsam.com)

## 🔧 Auto-Deployment
- **Trigger**: Push to `main` branch
- **Target**: Google Cloud Run (asia-east1)
- **Domain**: jarvisnsam.com

## 🔗 Link Page Features

The link page (`/link.html`) includes:
- **Contact Links**: Website, email, phone, social media
- **Tool Links**: Smartgent, OpenWebUI, VoiceBot, n8n
- **Category Filtering**: All, Contact, Tools
- **Responsive Design**: 4 → 3 → 2 → 1 cards based on screen size
- **Gradient Highlights**: Consistent branding with main site

### Adding New Links
Edit `js/link.js` and add to the appropriate category:

```javascript
// Add to contact category
contact: [
    // existing items...
    {
        name: "New Platform",
        url: "https://example.com",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/example.svg"
    }
]
```

## 🛠 Local Development

### Prerequisites
- Web browser
- Text editor (VS Code recommended)
- Git installed

### Running Locally
1. **Clone the repository**
2. **Open `index.html`** in your browser
3. **Make changes** to files
4. **Refresh browser** to see updates

### Testing with Docker (Optional)
```bash
# Build container
docker build -t jns-website .

# Run locally
docker run -p 8080:8080 jns-website

# Open http://localhost:8080
```

## 🔒 Security

- **GitHub Secrets**: All sensitive data encrypted
- **Service Account**: Minimal required permissions
- **Container**: Non-root user, security headers
- **HTTPS**: Enforced via Cloud Run and custom domain

## 📊 Monitoring

### Cloud Run Metrics
- **URL**: https://console.cloud.google.com/run/detail/asia-east1/jns-website
- **Metrics**: Request count, latency, memory usage
- **Logs**: Deployment and runtime logs

### GitHub Actions
- **URL**: https://github.com/YOUR_USERNAME/jns-website/actions
- **Status**: Build and deployment status
- **Logs**: Detailed deployment logs

## 🆘 Troubleshooting

### Deployment Fails
1. **Check GitHub Actions logs**
2. **Verify secrets are set correctly**
3. **Check Cloud Run service logs**
4. **Ensure service account has permissions**

### Website Not Loading
1. **Check Cloud Run service status**
2. **Verify custom domain mapping**
3. **Check nginx configuration**
4. **Review container logs**

### Git Issues
```bash
# Reset to last working state
git checkout main
git reset --hard origin/main

# Force push (use carefully)
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
