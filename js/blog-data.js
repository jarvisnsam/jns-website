/*================================================
Blog Data for Jarvis and Sam Website
Semi-dynamic blog post management
=================================================*/

const blogPosts = [
    {
        slug: "business-driven-agentic-workflow.html",
        title: "From an Idea to an AI Product in 6 Hours",
        description: "The game-changing methodology that's making competitors irrelevant by turning morning brainstorms into afternoon revenue",
        publishDate: "2025-06-05",
        author: "Jarvis and Sam",
        tags: ["AI Workflow", "Business Automation", "Rapid Development", "Enterprise Solutions"],
        featuredImage: "../img/blog/business-driven-workflow.png",
        excerpt: "The game-changing methodology that's making competitors irrelevant by turning morning brainstorms into afternoon revenue through business-driven agentic workflows."
    },
    {
        slug: "a2a-agent-setup-guide-n8n-developers.html",
        title: "Building A2A-Compatible Agents: A Complete Guide for n8n Developers",
        description: "The Agent-to-Agent (A2A) protocol is revolutionizing how AI systems communicate and exchange files. Complete guide for n8n developers.",
        publishDate: "2025-06-06",
        author: "Jarvis and Sam",
        tags: ["A2A Protocol", "n8n Development", "AI Agents", "Workflow Automation", "File Processing"],
        featuredImage: "../img/blog/a2a-n8n-hero.png",
        excerpt: "The Agent-to-Agent (A2A) protocol is revolutionizing how AI systems communicate and exchange files. Complete setup guide for n8n developers."
    },
    {
        slug: "agentic-protocol-future-trend.html",
        title: "Agentic Protocol Future Trends",
        description: "Exploring the key trends shaping AI agent communication, collaboration, and the future of agentic protocols in artificial intelligence.",
        publishDate: "2025-05-27",
        author: "Zorro Cheng",
        tags: ["AI Protocols", "Future Trends", "AI Collaboration", "A2A Communication"],
        featuredImage: "../img/blog/agentic_protocol.png",
        excerpt: "As we stand at the cusp of a new era in artificial intelligence, agentic protocols are emerging as the foundation for how AI systems will communicate, collaborate, and create value in the future."
    },
    {
        slug: "mcp-vs-a2a-protocols.html",
        title: "MCP vs A2A: Understanding Modern AI Communication Protocols",
        description: "As AI systems become more sophisticated and interconnected, the protocols governing their communication are evolving from traditional client-server architectures to more distributed, agent-based models.",
        publishDate: "2025-05-27",
        author: "Jarvis and Sam",
        tags: ["MCP Protocol", "A2A Protocol", "AI Communication", "Protocol Architecture"],
        featuredImage: "../img/blog/mcp-vs-a2a-architecture.png",
        excerpt: "As AI systems become more sophisticated and interconnected, the protocols governing their communication are evolving from traditional client-server architectures to more distributed, agent-based models."
    },
    {
        slug: "parallel-internet.html",
        title: "Parallel Internet: Traditional vs Agentic Internet",
        description: "The fundamental shift we're witnessing in internet architecture from traditional internet to emerging agentic internet where AI agents act as intelligent intermediaries.",
        publishDate: "2025-05-26",
        author: "Jarvis and Sam",
        tags: ["Internet Architecture", "AI Agents", "MCP Protocol", "Future Tech"],
        featuredImage: "../img/blog/parellel_internet.svg",
        excerpt: "The fundamental shift we're witnessing in internet architecture from traditional internet to emerging agentic internet where AI agents act as intelligent intermediaries."
    }
];

// Sort posts by date (newest first)
blogPosts.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = blogPosts;
}

// Make available globally
window.blogPosts = blogPosts;
