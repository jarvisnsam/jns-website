/*================================================
Link Page JavaScript for Jarvis and Sam Website
Hardcoded data with easy maintenance structure
=================================================*/

// Links Data - Easy to add new items
const linksData = {
    contact: [
        {
            name: "Website",
            url: "https://jarvisnsam.com/",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/internetarchive.svg"
        },
        {
            name: "Google Business",
            url: "https://maps.app.goo.gl/vh1dGuscVY77rdcx6",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlemaps.svg"
        },
        {
            name: "Email",
            url: "mailto:info@jarvisnsam.com",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/maildotru.svg"
        },
        {
            name: "Phone",
            url: "tel:85252119127",
            icon: "https://raw.githubusercontent.com/feathericons/feather/master/icons/phone.svg"
        },
        {
            name: "Whatsapp",
            url: "https://wa.me/85252119127",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
        },
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/company/jarvisnsam",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/jarvisnsam",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/jarvisnsam",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
        },
        {
            name: "Thread",
            url: "https://www.threads.com/@jarvisnsam",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/threads.svg"
        },
        {
            name: "X",
            url: "https://x.com/JarvisnSam",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg"
        },
        {
            name: "Youtube",
            url: "https://www.youtube.com/@JarvisnSam",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
        },
        {
            name: "Github",
            url: "https://github.com/jarvisnsam",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
        },
        {
            name: "Bing Place",
            url: "https://www.bing.com/maps?&ty=18&ss=ypid.YN8500x294417118513417026&mb=22.305505~114.152777~22.28996~114.183161&description=%E9%A6%99%E6%B8%AFPhase%205%20Harbour%20City%2029%2FF%C2%B7Information%20technology%20company&cardbg=%2388979C&dt=1755507600000&tt=Jarvis%20and%20Sam%20-%20Enterprise%20AI%20Automation%20Solutions&tsts0=%2526ty%253D18%2526ss%253Dypid.YN8500x294417118513417026%2526mb%253D22.305505~114.152777~22.28996~114.183161%2526description%253D%2525E9%2525A6%252599%2525E6%2525B8%2525AFPhase%2525205%252520Harbour%252520City%25252029%25252FF%2525C2%2525B7Information%252520technology%252520company%2526cardbg%253D%25252388979C%2526dt%253D1755507600000&tstt0=Jarvis%20and%20Sam%20-%20Enterprise%20AI%20Automation%20Solutions&cp=22.297733~114.162562&lvl=16&pi=0&ftst=0&ftics=False&v=2&sV=2&form=S00027",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftbing.svg"
        }
    ],
    tool: [
        {
            name: "Smartgent",
            url: "https://smartgendev.w3btest.com/",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/robotframework.svg"
        },
        {
            name: "OpenWebUI",
            url: "https://ai.fantaisys.com/",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/webcomponentsdotorg.svg"
        },
        {
            name: "VoiceBot",
            url: "https://vb.jarvisnsam.com/sitemap.xml",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microdotblog.svg"
        },
        {
            name: "n8n",
            url: "https://n8n.smartgen.w3btest.com/",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/n8n.svg"
        }
    ],
    other: [
        {
            name: "Support",
            url: "https://support.jarvisnsam.com/",
            icon: "https://cdn.jsdelivr.net/gh/atisawd/boxicons/svg/regular/bx-headphone.svg"
        },
        {
            name: "Survey",
            url: "../survey/",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googleforms.svg"
        },
        {
            name: "Style Guide",
            url: "../style-guide.html",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/materialdesign.svg"
        },
        {
            name: "Service Monitor",
            url: "https://stats.uptimerobot.com/7UlJQrSiLt",
            icon: "https://www.svgrepo.com/show/520001/uptimerobot.svg"
        }
    ]
};

// Current active category
let currentCategory = 'all';

// Initialize the links page
function initializeLinks() {
    generateLinkCards();
    setupCategoryTabs();
    
    // Add entrance animations
    setTimeout(() => {
        const cards = document.querySelectorAll('.link-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animationDelay = `${index * 0.1}s`;
            }, index * 50);
        });
    }, 100);
}

// Generate all link cards
function generateLinkCards() {
    const linksGrid = document.getElementById('links-grid');
    if (!linksGrid) return;
    
    linksGrid.innerHTML = '';
    
    // Combine all categories for "all" view
    const allLinks = [];
    
    // Add contact links
    linksData.contact.forEach(link => {
        allLinks.push({ ...link, category: 'contact' });
    });
    
    // Add tool links
    linksData.tool.forEach(link => {
        allLinks.push({ ...link, category: 'tool' });
    });
    
    // Add other links
    linksData.other.forEach(link => {
        allLinks.push({ ...link, category: 'other' });
    });
    
    // Generate cards
    allLinks.forEach((link, index) => {
        const card = createLinkCard(link, index);
        linksGrid.appendChild(card);
    });
    
    // Apply initial filter
    filterByCategory(currentCategory);
}

// Create individual link card
function createLinkCard(link, index) {
    const card = document.createElement('a');
    card.className = 'link-card';
    card.href = link.url;
    card.dataset.category = link.category;
    
    // Handle special link types
    if (link.url.startsWith('mailto:') || link.url.startsWith('tel:')) {
        card.target = '_self';
    } else {
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
    }
    
    // Create card content
    card.innerHTML = `
        <div class="link-icon">
            <img src="${link.icon}" alt="${link.name}" onerror="this.style.display='none'">
        </div>
        <div class="link-text">${link.name}</div>
    `;
    
    // Add click tracking (optional)
    card.addEventListener('click', () => {
        console.log('Link clicked:', link.name);
        // Add analytics tracking here if needed
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                event_category: 'Links',
                event_label: link.name,
                value: 1
            });
        }
    });
    
    return card;
}

// Setup category tab functionality
function setupCategoryTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            filterByCategory(category);
            
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}

// Filter cards by category
function filterByCategory(category) {
    currentCategory = category;
    const cards = document.querySelectorAll('.link-card');
    
    cards.forEach(card => {
        const cardCategory = card.dataset.category;
        const shouldShow = category === 'all' || cardCategory === category;
        
        if (shouldShow) {
            card.classList.remove('hidden');
            card.style.display = 'flex';
        } else {
            card.classList.add('hidden');
            card.style.display = 'none';
        }
    });
    
    // Add stagger animation for visible cards
    const visibleCards = document.querySelectorAll('.link-card:not(.hidden)');
    visibleCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
        card.style.animation = 'none';
        setTimeout(() => {
            card.style.animation = 'fadeInUp 0.6s ease forwards';
        }, 10);
    });
}

// Utility function to add new links (for future use)
function addNewLink(category, linkData) {
    if (linksData[category]) {
        linksData[category].push(linkData);
        generateLinkCards(); // Regenerate cards
        console.log(`Added new ${category} link:`, linkData.name);
    } else {
        console.error('Invalid category:', category);
    }
}

// Example usage for adding new links:
// addNewLink('contact', {
//     name: "New Platform",
//     url: "https://example.com",
//     icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/example.svg"
// });

// Export functions for potential external use
window.linksPageFunctions = {
    addNewLink,
    filterByCategory,
    generateLinkCards
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLinks);
} else {
    initializeLinks();
}
