# Jarvis and Sam Website

Official website for Jarvis and Sam - Enterprise AI Automation Solutions.

## 🌐 Live Website
- **Production**: [jarvisnsam.com](https://jarvisnsam.com)
- **Cloud Run URL**: https://jns-website-431625878670.asia-east1.run.app

## 📁 Key Files & Structure

```
jns-website/
├── index.html              # Main homepage (includes latest blog section)
├── link.html               # Links page with contact & tools
├── lab.html                # Lab page
├── blog/
│   ├── index.html          # Blog index (auto-generated from blog-data.js)
│   ├── [post-slug].html    # Individual blog posts
│   ├── sitemap.xml         # Blog sitemap
│   └── feed.xml            # RSS feed
├── css/
│   ├── style.css           # Main styles (includes latest blog styles)
│   ├── blog.css            # Blog-specific styles
│   ├── link.css            # Link page styles
│   └── lab.css             # Lab page styles
├── js/
│   ├── main.js             # Main JavaScript (includes blog loading)
│   ├── blog-data.js        # Blog post metadata (centralized)
│   ├── header.js           # Header component
│   ├── footer.js           # Footer component (includes link page)
│   └── blog.js             # Blog functionality
└── img/
    └── blog/               # Blog images
```

## 🚀 Git Workflow Commands

### Branch Strategy
- **`web`** - Staging environment 
- **`main`** - Production environment (auto-deploys to jarvisnsam.com)

### Simple Workflow: Web → Main

#### 1. Work on Web Branch (Staging)
```bash
git checkout web
git add .
git commit -m "your changes"
git push origin web
```

#### 2. Deploy to Main (Production)
```bash
git checkout main
git merge web
git push origin main
```

### Quick Commands
```bash
# Switch branches
git checkout web
git checkout main

# Check status
git status
git branch -a

# Reset if needed
git reset --hard origin/web
git reset --hard origin/main
```

### Auto-Deployment
- **Trigger**: Push to `main` branch
- **Target**: Google Cloud Run (asia-east1)
- **Domain**: jarvisnsam.com

## 📝 Blog Management

### Adding New Blog Posts

#### 1. Create Blog Post HTML
Create `blog/your-post-slug.html` using this template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="../img/jns_logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Blog Post Title – Jarvis and Sam Blog</title>
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="Your blog post description" />
    <meta name="keywords" content="keyword1, keyword2, keyword3" />
    <meta name="author" content="Jarvis and Sam" />
    
    <!-- Article Tags -->
    <meta name="article:tag" content="Tag 1" />
    <meta name="article:tag" content="Tag 2" />
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/boxicons.min.css">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/blog.css">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Newsreader:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body class="dark-theme">
    <!-- Header Section -->
    <div id="header"></div>

    <!-- Main Content -->
    <main>
        <section class="blog-post-section">
            <div class="container">
                <div class="blog-post-container">
                    <!-- Blog Post Header -->
                    <div class="blog-post-header">
                        <div class="blog-post-header-top">
                            <h1 class="blog-post-title">Your Blog Post Title</h1>
                            <div class="blog-post-meta">
                                <time datetime="2025-07-07">July 7, 2025</time>
                            </div>
                        </div>
                    </div>

                    <!-- Featured Image (Optional) -->
                    <div class="blog-post-image">
                        <img src="../img/blog/your-featured-image.png" alt="Your Blog Post Title" />
                    </div>

                    <!-- Blog Post Content -->
                    <div class="blog-post-content">
                        <p>Your blog post content goes here...</p>
                        
                        <h2>Section Heading</h2>
                        <p>More content...</p>
                    </div>

                    <!-- Tags Section -->
                    <div class="blog-post-tags">
                        <h3 class="blog-post-tags-title">Tags:</h3>
                        <div class="blog-post-tags-list">
                            <span class="blog-post-tag">Tag 1</span>
                            <span class="blog-post-tag">Tag 2</span>
                        </div>
                    </div>

                    <!-- Share Section -->
                    <div class="blog-share-section">
                        <h3 class="blog-share-title">Share this post:</h3>
                        <div class="blog-share-buttons">
                            <a href="mailto:?subject=Check out this article&body=Your Blog Post Title - /blog/your-post-slug.html" class="blog-share-btn" title="Share via Email">
                                <i class="bx bx-envelope"></i>
                            </a>
                            <a href="https://api.whatsapp.com/send?text=Your Blog Post Title - /blog/your-post-slug.html" target="_blank" class="blog-share-btn" title="Share on WhatsApp">
                                <i class="bx bxl-whatsapp"></i>
                            </a>
                            <button onclick="copyBlogLink('/blog/your-post-slug.html')" class="blog-share-btn" title="Copy link">
                                <i class="bx bx-link"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <div id="footer"></div>

    <!-- JavaScript Files -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="../js/header.js"></script>
    <script src="../js/footer.js"></script>
    <script src="../js/main.js"></script>
    <script src="../js/blog.js"></script>
    
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            loadHeader();
            loadFooter();
        });
    </script>
</body>
</html>
```

#### 2. Add Post to Blog Data
Edit `js/blog-data.js` and add your post:

```javascript
{
    slug: "your-post-slug",
    title: "Your Blog Post Title",
    excerpt: "Brief description (2-3 sentences)",
    date: "2025-07-07",
    image: "your-featured-image.png",
    tags: ["Tag1", "Tag2", "Tag3"]
}
```

#### 3. Update Sitemap
Add to `sitemap.xml`:

```xml
<url>
    <loc>./blog/your-post-slug.html</loc>
    <lastmod>2025-07-07T00:00:00+00:00</lastmod>
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
</url>
```

### Files to Update for New Posts
1. **`blog/your-post-slug.html`** - Create post content
2. **`js/blog-data.js`** - Add post metadata
3. **`sitemap.xml`** - Add URL entry

**Total: 3 files** (blog index auto-updates from blog-data.js)

## 🔗 Link Page Management

Edit `js/link.js` to add new links:

```javascript
// Add to contact or tools category
{
    name: "New Platform",
    url: "https://example.com",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/example.svg"
}
```

## 🛠 Lab Page Management

Edit `js/lab.js` to add/update projects:

```javascript
{
    "id": 1,
    "title": "Project Name",
    "description": "Project description",
    "tags": ["AI", "Agent"],
    "status": "active",
    "link": "https://project-url.com/",
    "image": "https://image-url.com/image.png"
}
```

## 📊 Sitemap Management

### Current Structure (Relative URLs)
- Uses `./` prefix for all URLs
- Works across dev, production, and GitHub Pages
- Auto-updated for blog posts via blog-data.js

### Manual Updates Required
- New pages (non-blog)
- Changed URLs
- Priority adjustments

## 🛠 Local Development

### Running Local Server
python -m http.server 8000

# Then open http://localhost:8000
```

## 🔧 Key Features

### Homepage Latest Blog Section
- **Location**: Between hero and about sections
- **Data Source**: `js/blog-data.js`
- **Auto-updates**: Shows latest 3 posts automatically
- **Styling**: Consistent with site design (subtle tags, hover effects)

### Blog System
- **Semi-dynamic**: Index generated from blog-data.js
- **Search & Filter**: By title, content, tags
- **Responsive**: Mobile-optimized
- **SEO**: Proper meta tags, relative URLs

### Design System
- **Glassmorphism**: Backdrop blur effects
- **Gradient Text**: Cyan-to-red gradients
- **Subtle Tags**: Transparent with border, hover effects
- **Consistent Spacing**: Reduced blog section padding

## 🆘 Quick Troubleshooting

### Blog Posts Not Showing
1. Check `js/blog-data.js` syntax
2. Verify image paths in `img/blog/`
3. Ensure blog-data.js is loaded before main.js

### Deployment Issues
1. Check GitHub Actions logs
2. Verify all files committed
3. Check Cloud Run service status

### Sitemap Issues
1. Use relative URLs (`./` prefix)
2. Update lastmod dates
3. Validate XML syntax

## 📞 Support

For technical issues: info@jarvisnsam.com

## 📄 License

© 2025 Jarvis and Sam. All rights reserved.
