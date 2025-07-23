// Lab page JavaScript functionality

let labsData = [];
let allTags = ['All'];
let activeTag = 'All';

// DOM elements
const loadingState = document.getElementById('loading-state');
const errorState = document.getElementById('error-state');
const errorText = document.getElementById('error-text');
const labCardsContainer = document.getElementById('lab-cards-container');
const noResultsState = document.getElementById('no-results-state');
const filterButtons = document.getElementById('filter-buttons');

// Load lab data when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadLabData();
});

// Embedded lab data - no external file needed
const labDataEmbedded = [
    {
        "id": 1,
        "title": "Smartgent",
        "description": "An integrated AI platform designed to streamline enterprise operations.",
        "image_url": "https://smartgendev.w3btest.com/api/v1/images/logo.png",
        "tags": ["AI", "Agent"],
        "link": "https://smartgendev.w3btest.com/",
        "active": 1
    },
    {
        "id": 2,
        "title": "Voicebot",
        "description": "Advanced Audio Transcription Solution that transforms conversations into structured text.",
        "image_url": "https://cdn-icons-png.flaticon.com/512/8862/8862361.png",
        "tags": ["AI", "Audio", "Productivity"],
        "link": "https://vb.jarvisnsam.ai/",
        "active": 1
    },
    {
        "id": 3,
        "title": "Business Workflow",
        "description": "Smart Chatbot for E-Commerce with Business Workflow automation and intelligent customer service.",
        "image_url": "./lab/business_workflow.png",
        "tags": ["AI", "Workflow", "Chatbot"],
        "link": "https://watsons.jarvisnsam.ai/",
        "active": 1
    }
];

// Function to load lab data (now from embedded data)
function loadLabData() {
    try {
        showLoadingState();
        
        console.log('Loading embedded lab data...');
        
        // Use embedded data instead of fetching
        labsData = labDataEmbedded;
        console.log('Successfully loaded lab data:', labsData);
        
        // Extract unique tags
        extractTags();
        
        // Render filter buttons
        renderFilterButtons();
        
        // Render lab cards
        renderLabCards();
        
        showLabCards();
        
    } catch (error) {
        console.error('Error loading lab data:', error);
        showErrorState(`Failed to load lab data: ${error.message}`);
    }
}

// Function to extract unique tags from lab data
function extractTags() {
    const tags = new Set(['All']);
    
    labsData.forEach(lab => {
        if (Array.isArray(lab.tags)) {
            lab.tags.forEach(tag => tags.add(tag));
        } else if (typeof lab.tags === 'string') {
            // Handle case where tags might be a JSON string
            try {
                const parsedTags = JSON.parse(lab.tags);
                if (Array.isArray(parsedTags)) {
                    parsedTags.forEach(tag => tags.add(tag));
                }
            } catch (e) {
                // If not JSON, treat as comma-separated string
                lab.tags.split(',').forEach(tag => tags.add(tag.trim()));
            }
        }
    });
    
    allTags = Array.from(tags);
}

// Function to render filter buttons
function renderFilterButtons() {
    filterButtons.innerHTML = '';
    
    allTags.forEach(tag => {
        const button = document.createElement('button');
        button.className = `filter-btn ${tag === activeTag ? 'active' : ''}`;
        button.setAttribute('data-tag', tag);
        button.textContent = tag;
        button.addEventListener('click', () => filterByTag(tag));
        filterButtons.appendChild(button);
    });
}

// Function to filter labs by tag
function filterByTag(tag) {
    activeTag = tag;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tag') === tag) {
            btn.classList.add('active');
        }
    });
    
    // Render filtered cards
    renderLabCards();
}

// Function to render lab cards
function renderLabCards() {
    const filteredLabs = activeTag === 'All' 
        ? labsData 
        : labsData.filter(lab => {
            if (Array.isArray(lab.tags)) {
                return lab.tags.includes(activeTag);
            } else if (typeof lab.tags === 'string') {
                try {
                    const parsedTags = JSON.parse(lab.tags);
                    if (Array.isArray(parsedTags)) {
                        return parsedTags.includes(activeTag);
                    }
                } catch (e) {
                    // If not JSON, treat as comma-separated string
                    return lab.tags.split(',').map(t => t.trim()).includes(activeTag);
                }
            }
            return false;
        });
    
    if (filteredLabs.length === 0) {
        showNoResults();
        return;
    }
    
    labCardsContainer.innerHTML = '';
    
    filteredLabs.forEach(lab => {
        const cardElement = createLabCard(lab);
        labCardsContainer.appendChild(cardElement);
    });
    
    showLabCards();
}

// Function to create a lab card element
function createLabCard(lab) {
    const { id, title, description, image_url, tags, link } = lab;
    
    const cardDiv = document.createElement('div');
    cardDiv.className = 'lab-card-wrapper';
    
    // Parse tags if they're a string
    let parsedTags = [];
    if (Array.isArray(tags)) {
        parsedTags = tags;
    } else if (typeof tags === 'string') {
        try {
            parsedTags = JSON.parse(tags);
        } catch (e) {
            parsedTags = tags.split(',').map(t => t.trim());
        }
    }
    
    cardDiv.innerHTML = `
        <div class="lab-card" data-animation="fade-up" onclick="openLabLink('${link}')">
            <div class="lab-icon">
                <img src="${image_url}" alt="${title}" onerror="this.src='img/all-img/favicon.png';" />
            </div>
            <div class="lab-content">
                <h3>${title}</h3>
                <p>${description}</p>
                <div class="lab-footer">
                    <div class="lab-tags" onclick="event.stopPropagation()">
                        ${parsedTags.map(tag => 
                            `<span class="lab-tag" onclick="filterByTag('${tag}')">${tag}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return cardDiv;
}

// Function to open lab link
function openLabLink(link) {
    if (link) {
        window.open(link, '_blank', 'noopener,noreferrer');
    }
}

// State management functions
function showLoadingState() {
    loadingState.style.display = 'block';
    errorState.style.display = 'none';
    labCardsContainer.style.display = 'none';
    noResultsState.style.display = 'none';
}

function showErrorState(message) {
    loadingState.style.display = 'none';
    errorState.style.display = 'block';
    labCardsContainer.style.display = 'none';
    noResultsState.style.display = 'none';
    errorText.textContent = message;
}

function showLabCards() {
    loadingState.style.display = 'none';
    errorState.style.display = 'none';
    labCardsContainer.style.display = 'flex';
    noResultsState.style.display = 'none';
}

function showNoResults() {
    loadingState.style.display = 'none';
    errorState.style.display = 'none';
    labCardsContainer.style.display = 'none';
    noResultsState.style.display = 'block';
}

// Add CSS styles for lab page
const labStyles = document.createElement('style');
labStyles.textContent = `
    /* Lab page specific styles */
    .lab-section {
        min-height: 80vh;
        padding-top: 120px;
    }
    
    .loading-spinner {
        padding: 60px 0;
    }
    
    .loading-spinner i {
        font-size: 48px;
        color: #00BFFF;
        margin-bottom: 20px;
    }
    
    .error-message {
        padding: 60px 0;
    }
    
    .error-message i {
        font-size: 48px;
        color: #dc3545;
        margin-bottom: 20px;
    }
    
    .lab-filter {
        margin-bottom: 40px;
    }
    
    .filter-buttons {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
    }
    
    .filter-btn {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: #fff;
        padding: 8px 20px;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 14px;
    }
    
    .filter-btn:hover {
        background: rgba(0, 191, 255, 0.2);
        border-color: #00BFFF;
    }
    
    .filter-btn.active {
        background: linear-gradient(145deg, #00BFFF, #0064C1);
        border-color: #00BFFF;
        color: #fff;
    }
    
    .lab-cards-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
    
    .lab-card-wrapper {
        flex: 0 0 calc(20% - 16px);
        min-width: 280px;
    }
    
    @media (max-width: 1200px) {
        .lab-card-wrapper {
            flex: 0 0 calc(25% - 15px);
        }
    }
    
    @media (max-width: 992px) {
        .lab-card-wrapper {
            flex: 0 0 calc(33.333% - 14px);
        }
    }
    
    @media (max-width: 768px) {
        .lab-card-wrapper {
            flex: 0 0 calc(50% - 10px);
            min-width: 250px;
        }
    }
    
    @media (max-width: 576px) {
        .lab-card-wrapper {
            flex: 0 0 100%;
            min-width: auto;
        }
    }
    
    .lab-card {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    
    .lab-card:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.08);
        border-color: #00BFFF;
        box-shadow: 0 10px 30px rgba(0, 191, 255, 0.2);
    }
    
    .lab-icon {
        text-align: center;
        margin-bottom: 20px;
    }
    
    .lab-icon img {
        width: 60px;
        height: 60px;
        object-fit: contain;
        border-radius: 10px;
    }
    
    .lab-content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    
    .lab-content h3 {
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
        text-align: center;
    }
    
    .lab-content p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 14px;
        line-height: 1.6;
        margin-bottom: 20px;
        flex: 1;
        text-align: center;
    }
    
    .lab-footer {
        margin-top: auto;
    }
    
    .lab-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        justify-content: center;
    }
    
    .lab-tag {
        background: rgba(0, 191, 255, 0.2);
        color: #00BFFF;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .lab-tag:hover {
        background: rgba(0, 191, 255, 0.3);
        color: #fff;
    }
    
    /* Responsive grid for lab cards */
    .col-lg-1-5 {
        flex: 0 0 20%;
        max-width: 20%;
    }
    
    @media (max-width: 1200px) {
        .col-lg-1-5 {
            flex: 0 0 25%;
            max-width: 25%;
        }
    }
    
    @media (max-width: 992px) {
        .col-lg-1-5 {
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }
    }
    
    @media (max-width: 768px) {
        .col-lg-1-5 {
            flex: 0 0 50%;
            max-width: 50%;
        }
        
        .filter-buttons {
            justify-content: center;
        }
        
        .filter-btn {
            font-size: 12px;
            padding: 6px 15px;
        }
    }
    
    @media (max-width: 576px) {
        .col-lg-1-5 {
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
`;

document.head.appendChild(labStyles);
