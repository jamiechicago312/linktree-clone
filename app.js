// 🌟 LINKTREE CLONE APPLICATION 🌟
// Main JavaScript file for handling all functionality

class LinkTreeApp {
  constructor() {
    this.config = null;
    this.theme = localStorage.getItem('theme') || 'light';
    this.visitCount = this.getVisitCount();
    this.clickCount = 0;
    
    this.init();
  }

  async init() {
    try {
      // Show loading screen
      this.showLoading();
      
      // Load configuration
      await this.loadConfig();
      
      // Initialize the app
      this.setupTheme();
      this.renderProfile();
      this.renderLinks();
      this.renderSocialMedia();
      this.setupEventListeners();
      this.setupFeatures();
      this.hideLoading();
      
      // Track visit
      this.trackVisit();
      
      console.log('🌳 LinkTree loaded successfully!');
    } catch (error) {
      console.error('❌ Error initializing LinkTree:', error);
      this.showError('Failed to load configuration. Please check your config.js file.');
    }
  }

  async loadConfig() {
    // Config is already loaded via script tag
    if (typeof CONFIG === 'undefined') {
      throw new Error('Configuration not found');
    }
    
    this.config = CONFIG;
    
    // Apply custom CSS if provided
    if (this.config.features.customCSS) {
      this.injectCustomCSS(this.config.features.customCSS);
    }
    
    // Apply theme colors
    this.applyThemeColors();
  }

  applyThemeColors() {
    const root = document.documentElement;
    const theme = this.config.theme;
    
    if (theme.primaryColor) {
      root.style.setProperty('--primary-color', theme.primaryColor);
    }
    if (theme.fontFamily) {
      root.style.setProperty('--font-family', theme.fontFamily);
    }
    // Note: background and text colors are now handled by applyThemeSpecificColors()
  }

  injectCustomCSS(css) {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }

  setupTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
      themeIcon.textContent = this.theme === 'dark' ? '☀️' : '🌙';
    }
    
    // Apply theme-specific colors from config
    this.applyThemeSpecificColors();
  }
  
  applyThemeSpecificColors() {
    const root = document.documentElement;
    const theme = this.config.theme;
    
    if (this.theme === 'dark') {
      // Apply dark mode colors
      if (theme.darkBackgroundColor) {
        root.style.setProperty('--background-color', theme.darkBackgroundColor);
      }
      if (theme.darkTextColor) {
        root.style.setProperty('--text-color', theme.darkTextColor);
      }
    } else {
      // Apply light mode colors
      if (theme.backgroundColor) {
        root.style.setProperty('--background-color', theme.backgroundColor);
      }
      if (theme.textColor) {
        root.style.setProperty('--text-color', theme.textColor);
      }
    }
  }

  renderProfile() {
    const profile = this.config.profile;
    
    // Update page title
    document.title = `${profile.name} - Link Tree`;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = profile.bio || `${profile.name}'s links`;
    }
    
    // Update profile elements
    const avatar = document.getElementById('profile-avatar');
    const name = document.getElementById('profile-name');
    const bio = document.getElementById('profile-bio');
    const location = document.getElementById('profile-location');
    
    if (avatar) {
      avatar.src = profile.avatar;
      avatar.alt = `${profile.name}'s profile picture`;
      
      // Apply avatar style
      if (this.config.theme.avatarStyle === 'square') {
        avatar.classList.add('square');
      }
    }
    
    if (name) name.textContent = profile.name;
    if (bio) bio.textContent = profile.bio;
    
    if (location && profile.location) {
      location.textContent = profile.location;
      location.style.display = 'flex';
    } else if (location) {
      location.style.display = 'none';
    }
  }

  renderLinks() {
    const container = document.getElementById('links-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    this.config.links.forEach((link, index) => {
      const linkElement = this.createLinkElement(link, index);
      container.appendChild(linkElement);
    });
  }

  createLinkElement(link, index) {
    const linkEl = document.createElement('a');
    linkEl.className = `link-item ${this.config.theme.buttonStyle || 'rounded'}`;
    linkEl.href = link.url;
    linkEl.target = '_blank';
    linkEl.rel = 'noopener noreferrer';
    
    if (link.featured) {
      linkEl.classList.add('featured');
    }
    
    // Add click tracking
    linkEl.addEventListener('click', (e) => {
      this.trackLinkClick(e, link);
    });
    
    linkEl.innerHTML = `
      ${link.icon ? `<span class="link-icon">${link.icon}</span>` : ''}
      <div class="link-content">
        <div class="link-title">${link.title}</div>
        ${link.description ? `<div class="link-description">${link.description}</div>` : ''}
      </div>
      <span class="link-arrow">→</span>
    `;
    
    return linkEl;
  }

  renderSocialMedia() {
    const container = document.getElementById('social-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const socialIcons = {
      instagram: '📸',
      twitter: '🐦',
      bluesky: '🦋',
      linkedin: '💼',
      github: '💻',
      youtube: '📺',
      tiktok: '🎵',
      facebook: '👥',
      discord: '🎮',
      twitch: '🎮',
      spotify: '🎵'
    };
    
    Object.entries(this.config.socialMedia).forEach(([platform, url]) => {
      if (url) {
        const socialEl = document.createElement('a');
        socialEl.className = 'social-link';
        socialEl.href = url;
        socialEl.target = '_blank';
        socialEl.rel = 'noopener noreferrer';
        socialEl.title = `Follow me on ${platform}`;
        socialEl.textContent = socialIcons[platform] || '🔗';
        
        // Add click tracking
        socialEl.addEventListener('click', () => {
          this.trackSocialClick(platform);
        });
        
        container.appendChild(socialEl);
      }
    });
  }

  setupEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        this.toggleTheme();
      });
    }
    
    // Music toggle
    const musicToggle = document.getElementById('music-toggle');
    if (musicToggle) {
      musicToggle.addEventListener('click', () => {
        this.toggleMusic();
      });
    }
    
    // Modal buttons
    const continueBtn = document.getElementById('continue-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    
    if (continueBtn) {
      continueBtn.addEventListener('click', () => {
        this.handleModalContinue();
      });
    }
    
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        this.hideModal();
      });
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.hideModal();
      } else if (e.key === 't' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        this.toggleTheme();
      }
    });
  }

  setupFeatures() {
    // Google Analytics
    if (this.config.features.googleAnalytics) {
      this.setupGoogleAnalytics(this.config.features.googleAnalytics);
    }
    
    // Background music
    if (this.config.backgroundMusic.enabled) {
      this.setupBackgroundMusic();
    }
    
    // Visitor counter
    if (this.config.features.showVisitorCounter) {
      this.showVisitorCounter();
    }
    
    // Custom footer
    if (this.config.features.customFooter) {
      this.setupCustomFooter();
    }
    
    // Special effects
    this.setupSpecialEffects();
    
    // Disable animations if requested
    if (!this.config.features.enableAnimations) {
      document.body.classList.add('no-animations');
    }
  }

  setupGoogleAnalytics(trackingId) {
    const script = document.getElementById('google-analytics');
    if (script) {
      script.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${trackingId}');
      `;
      
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(gaScript);
    }
  }

  setupBackgroundMusic() {
    const musicPlayer = document.getElementById('music-player');
    const audio = document.getElementById('background-audio');
    const audioSource = document.getElementById('audio-source');
    
    if (musicPlayer && audio && audioSource && this.config.backgroundMusic.url) {
      musicPlayer.classList.remove('hidden');
      audioSource.src = this.config.backgroundMusic.url;
      audio.volume = this.config.backgroundMusic.volume || 0.3;
      audio.load();
      
      if (this.config.backgroundMusic.autoplay) {
        // Note: Autoplay is restricted by browsers, so this might not work
        audio.play().catch(console.warn);
      }
    }
  }

  setupCustomFooter() {
    const customFooter = document.getElementById('custom-footer');
    if (customFooter) {
      customFooter.textContent = this.config.features.customFooter;
      customFooter.style.display = 'block';
    }
  }

  setupSpecialEffects() {
    const effects = this.config.effects;
    
    if (effects.gradient) {
      const gradientOverlay = document.getElementById('gradient-overlay');
      if (gradientOverlay) {
        gradientOverlay.classList.add('active');
      }
    }
    
    if (effects.particles) {
      this.initParticles();
    }
    
    if (effects.snow) {
      this.initSnowEffect();
    }
  }

  initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = this.theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  initSnowEffect() {
    const container = document.getElementById('snow-container');
    if (!container) return;
    
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.textContent = '❄️';
      snowflake.style.left = Math.random() * 100 + '%';
      snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
      snowflake.style.opacity = Math.random();
      snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
      
      container.appendChild(snowflake);
      
      setTimeout(() => {
        snowflake.remove();
      }, 5000);
    };
    
    setInterval(createSnowflake, 300);
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    this.setupTheme();
  }

  toggleMusic() {
    const audio = document.getElementById('background-audio');
    const musicIcon = document.querySelector('.music-icon');
    
    if (audio) {
      if (audio.paused) {
        audio.play().then(() => {
          if (musicIcon) musicIcon.textContent = '🔇';
        }).catch(console.warn);
      } else {
        audio.pause();
        if (musicIcon) musicIcon.textContent = '🎵';
      }
    }
  }

  trackLinkClick(event, link) {
    if (this.config.features.trackClicks) {
      console.log(`🔗 Link clicked: ${link.title} -> ${link.url}`);
      this.clickCount++;
    }
    
    // Show modal if enabled (for demonstration)
    // In a real app, you might want to make this configurable
    // event.preventDefault();
    // this.showClickModal(link);
  }

  trackSocialClick(platform) {
    if (this.config.features.trackClicks) {
      console.log(`📱 Social link clicked: ${platform}`);
    }
  }

  showClickModal(link) {
    const modal = document.getElementById('click-modal');
    const message = document.getElementById('click-message');
    
    if (modal && message) {
      message.textContent = `Opening ${link.title}...`;
      modal.classList.remove('hidden');
      this.currentLink = link;
    }
  }

  handleModalContinue() {
    if (this.currentLink) {
      window.open(this.currentLink.url, '_blank', 'noopener,noreferrer');
    }
    this.hideModal();
  }

  hideModal() {
    const modal = document.getElementById('click-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
    this.currentLink = null;
  }

  trackVisit() {
    this.visitCount++;
    localStorage.setItem('linkTreeVisits', this.visitCount.toString());
  }

  getVisitCount() {
    return parseInt(localStorage.getItem('linkTreeVisits') || '0');
  }

  showVisitorCounter() {
    const counter = document.getElementById('visitor-counter');
    const countElement = document.getElementById('visitor-count');
    
    if (counter && countElement) {
      counter.classList.remove('hidden');
      countElement.textContent = this.visitCount.toString();
    }
  }

  showLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.remove('hidden');
    }
  }

  hideLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
      }, 500);
    }
  }

  showError(message) {
    const errorElement = document.getElementById('error-message');
    if (errorElement) {
      errorElement.querySelector('p').textContent = message;
      errorElement.classList.remove('hidden');
    }
    this.hideLoading();
  }
}

// Utility functions
const utils = {
  // Format numbers with commas
  formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  
  // Validate URL
  isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  },
  
  // Get domain from URL
  getDomain(url) {
    try {
      return new URL(url).hostname;
    } catch (_) {
      return '';
    }
  },
  
  // Copy to clipboard
  async copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.warn('Failed to copy to clipboard:', err);
      return false;
    }
  }
};

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new LinkTreeApp();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Page is hidden
    const audio = document.getElementById('background-audio');
    if (audio && !audio.paused) {
      audio.pause();
      audio.dataset.wasPlaying = 'true';
    }
  } else {
    // Page is visible
    const audio = document.getElementById('background-audio');
    if (audio && audio.dataset.wasPlaying === 'true') {
      audio.play().catch(console.warn);
      delete audio.dataset.wasPlaying;
    }
  }
});

// Handle window resize
window.addEventListener('resize', () => {
  // Recalculate particle canvas if it exists
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});

// Service Worker registration (for PWA features)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Uncomment to enable service worker
    // navigator.serviceWorker.register('/sw.js')
    //   .then(registration => console.log('SW registered'))
    //   .catch(error => console.log('SW registration failed'));
  });
}

// Export for testing purposes
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LinkTreeApp, utils };
}