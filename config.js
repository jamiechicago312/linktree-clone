// 🌟 LINKTREE CONFIGURATION FILE 🌟
// This file is super easy to customize! Just change the values below.
// No coding experience needed - just edit the text between the quotes!

const CONFIG = {
  // 👤 YOUR PROFILE INFORMATION
  profile: {
    name: "Your Name Here",                    // Your display name
    bio: "Welcome to my link tree! 🌳",       // Short description about you
    avatar: "https://via.placeholder.com/150", // Your profile picture URL
    location: "Your City, Country",            // Optional: Your location
  },

  // 🎨 APPEARANCE SETTINGS
  theme: {
    // Choose your colors (use hex codes like #FF5733 or color names like 'blue')
    primaryColor: "#6366f1",      // Main accent color
    backgroundColor: "#ffffff",   // Background color (light mode)
    textColor: "#1f2937",        // Text color (light mode)
    
    // Dark mode colors (automatically used when dark mode is enabled)
    darkBackgroundColor: "#111827",
    darkTextColor: "#f9fafb",
    
    // Choose a font family
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    
    // Profile picture style: 'circle' or 'square'
    avatarStyle: "circle",
    
    // Button style: 'rounded', 'square', or 'pill'
    buttonStyle: "rounded",
  },

  // 🔗 YOUR LINKS
  // Add as many links as you want! Just copy the format below.
  links: [
    {
      title: "My Website",
      url: "https://yourwebsite.com",
      icon: "🌐",                    // Emoji or leave empty ""
      featured: true,                // Set to true to highlight this link
      description: "Check out my personal website"  // Optional description
    },
    {
      title: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: "📸",
      featured: false,
      description: "Follow me for daily updates"
    },
    {
      title: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: "🐦",
      featured: false,
      description: "Latest thoughts and updates"
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "💼",
      featured: false,
      description: "Professional network"
    },
    {
      title: "YouTube",
      url: "https://youtube.com/@yourusername",
      icon: "📺",
      featured: false,
      description: "Subscribe for new videos"
    },
    {
      title: "GitHub",
      url: "https://github.com/yourusername",
      icon: "💻",
      featured: false,
      description: "Check out my code projects"
    },
    {
      title: "Email Me",
      url: "mailto:your.email@example.com",
      icon: "✉️",
      featured: false,
      description: "Get in touch directly"
    },
    {
      title: "My Portfolio",
      url: "https://yourportfolio.com",
      icon: "🎨",
      featured: true,
      description: "See my latest work"
    }
  ],

  // 📱 SOCIAL MEDIA LINKS (displayed as icons at the bottom)
  socialMedia: {
    instagram: "https://instagram.com/yourusername",
    twitter: "https://twitter.com/yourusername", 
    bluesky: "https://bsky.app/profile/yourusername.bsky.social",
    linkedin: "https://linkedin.com/in/yourusername",
    github: "https://github.com/yourusername",
    youtube: "https://youtube.com/@yourusername",
    tiktok: "https://tiktok.com/@yourusername",
    facebook: "https://facebook.com/yourusername",
    discord: "https://discord.gg/yourinvite",
    twitch: "https://twitch.tv/yourusername",
    spotify: "https://open.spotify.com/user/yourusername"
    // Add more social platforms as needed!
    // Just use the format: platformname: "your-url-here"
  },

  // ⚡ PREMIUM FEATURES
  features: {
    // Analytics (optional - add your Google Analytics ID)
    googleAnalytics: "",              // Example: "G-XXXXXXXXXX"
    
    // Custom CSS (for advanced users)
    customCSS: "",                    // Add custom CSS here if you know how
    
    // Link scheduling (show/hide links based on time)
    enableScheduling: false,          // Set to true to enable
    
    // Click tracking
    trackClicks: true,                // Track link clicks in console
    
    // Animations
    enableAnimations: true,           // Smooth animations and transitions
    
    // Show visitor counter
    showVisitorCounter: false,        // Display a visitor counter
    
    // Custom footer text (leave empty to use default)
    customFooter: "",                 // Example: "© 2024 Your Name"
  },

  // 🎵 BACKGROUND MUSIC (optional)
  backgroundMusic: {
    enabled: false,                   // Set to true to enable background music
    url: "",                         // URL to your music file (MP3, etc.)
    volume: 0.3,                     // Volume level (0.0 to 1.0)
    autoplay: false,                 // Auto-play when page loads (not recommended)
  },

  // 🌟 SPECIAL EFFECTS
  effects: {
    particles: false,                 // Floating particles background
    gradient: true,                   // Gradient background
    blur: false,                      // Blur effect on background
    snow: false,                      // Snow falling effect (seasonal!)
  }
};

// 🚀 DON'T EDIT BELOW THIS LINE (unless you know what you're doing!)
// This makes the config available to the rest of the application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
} else if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}