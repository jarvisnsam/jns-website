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

## 🚀 Deployment Workflow

### Branch Strategy
- **`web`** - Development branch (work here daily)
- **`main`** - Production branch (auto-deploys to jarvisnsam.com)

### Development Workflow

```bash
# 1. Work on development branch
git checkout web

# 2. Make your changes
# Edit files, add features, etc.

# 3. Commit changes
git add .
git commit -m "Add new feature or fix"

# 4. Push to development
git push origin web

# 5. Deploy to production (when ready)
git checkout main
git merge web
git push origin main  # 🚀 Triggers auto-deployment!
```

## 🔧 Auto-Deployment Setup

### GitHub Actions
- **Workflow**: `.github/workflows/deploy.yml`
- **Trigger**: Push to `main` branch
- **Target**: Google Cloud Run (asia-east1)
- **Container**: nginx:alpine with custom configuration

### Required GitHub Secrets
- `GCP_SA_KEY` - Google Cloud service account JSON key
- `GCP_PROJECT_ID` - `voicebot-453915`

### Google Cloud Configuration
- **Project**: voicebot-453915
- **Service**: jns-website
- **Region**: asia-east1 (Taiwan)
- **Authentication**: Allow unauthenticated
- **Custom Domain**: jarvisnsam.com

## 📝 Quick Git Commands

### First Time Setup
```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/jns-website.git
cd jns-website

# Create development branch
git checkout -b web
git push -u origin web
```

### Daily Development
```bash
# Switch to development branch
git checkout web

# Check status
git status

# Add all changes
git add .

# Commit with message
git commit -m "Description of changes"

# Push to GitHub
git push origin web
```

### Deploy to Production
```bash
# Switch to main branch
git checkout main

# Merge development changes
git merge web

# Push to trigger deployment
git push origin main
```

### Useful Commands
```bash
# Check current branch
git branch

# See commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes
git checkout -- .
```

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
git push --force-with-lease origin main
```

## 📞 Support

For issues or questions:
- **Email**: info@jarvisnsam.com
- **GitHub Issues**: Create an issue in this repository
- **Documentation**: This README file

## 📄 License

© 2025 Jarvis and Sam. All rights reserved.
