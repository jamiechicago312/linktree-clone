# 🌳 Premium Link Tree Clone

A beautiful, customizable link tree application built for GitHub Pages with premium features, light/dark mode, and easy configuration.

## ✨ Features

### 🎨 Premium Design
- **Light & Dark Mode** - Automatic theme switching with smooth transitions
- **Gradient Backgrounds** - Beautiful animated gradients that change with themes
- **Hover Effects** - Smooth animations and interactive elements
- **Responsive Design** - Perfect on desktop, tablet, and mobile devices
- **Custom Animations** - Floating particles and smooth transitions

### 🔗 Link Management
- **Featured Links** - Highlight your most important links with special styling
- **Regular Links** - Standard link buttons with icons and descriptions
- **Social Media Icons** - Quick access social media buttons
- **Email Integration** - Direct mailto links for easy contact

### ⚙️ Easy Customization
- **Simple Configuration** - Edit one `config.js` file to customize everything
- **No Coding Required** - User-friendly configuration with clear examples
- **Instant Updates** - Changes reflect immediately when you refresh the page

## 🚀 Quick Setup

### 1. Fork or Download
- Fork this repository to your GitHub account, or
- Download the files to your computer

### 2. Enable GitHub Pages
1. Go to your repository settings
2. Scroll down to "Pages" section
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

### 3. Customize Your Link Tree
Edit the `config.js` file with your information:

```javascript
// Your basic information
name: "Your Name Here",
bio: "Welcome to my link tree! 🌳",
location: "Your City, Country",
profileImage: "https://via.placeholder.com/150", // Replace with your photo URL
```

### 4. Add Your Links
```javascript
// Featured links (highlighted with special styling)
featuredLinks: [
    {
        title: "My Website",
        description: "Check out my personal website",
        url: "https://yourwebsite.com/",
        icon: "🌐"
    }
],

// Regular links
links: [
    {
        title: "Instagram",
        description: "Follow me for daily updates",
        url: "https://instagram.com/yourusername",
        icon: "📸"
    }
]
```

### 5. Update Social Media
```javascript
socialMedia: {
    instagram: "https://instagram.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    github: "https://github.com/yourusername",
    youtube: "https://youtube.com/@yourusername",
    // ... add more as needed
}
```

## 📝 Configuration Guide

### Profile Section
```javascript
// Basic profile information
name: "Your Display Name",           // Your name or brand
bio: "Your bio text here",          // Short description
location: "City, Country",          // Your location (optional)
profileImage: "image-url-here",     // URL to your profile picture
```

### Adding Links
There are two types of links you can add:

#### Featured Links (Premium Style)
These appear with special gradient styling and are perfect for your most important links:
```javascript
featuredLinks: [
    {
        title: "Link Title",
        description: "Brief description",
        url: "https://your-link.com",
        icon: "🌐" // Any emoji or leave empty
    }
]
```

#### Regular Links
Standard link buttons for all your other links:
```javascript
links: [
    {
        title: "Platform Name",
        description: "What people will find here",
        url: "https://platform.com/yourprofile",
        icon: "📱"
    }
]
```

### Social Media Icons
Quick-access social media buttons that appear below your main links:
```javascript
socialMedia: {
    instagram: "https://instagram.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    github: "https://github.com/yourusername",
    youtube: "https://youtube.com/@yourusername",
    tiktok: "https://tiktok.com/@yourusername",
    facebook: "https://facebook.com/yourusername",
    discord: "https://discord.gg/yourinvite",
    twitch: "https://twitch.tv/yourusername",
    spotify: "https://open.spotify.com/user/yourusername"
}
```

### Theme Customization
```javascript
theme: {
    // Light mode colors
    light: {
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        cardBackground: "rgba(255, 255, 255, 0.95)",
        textColor: "#333333"
    },
    // Dark mode colors  
    dark: {
        background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
        cardBackground: "rgba(255, 255, 255, 0.1)",
        textColor: "#ffffff"
    }
}
```

### Analytics (Optional)
Track clicks on your links:
```javascript
analytics: {
    enabled: true,
    googleAnalyticsId: "GA_MEASUREMENT_ID" // Optional: Add your GA4 ID
}
```

## 🎨 Customization Tips

### Profile Pictures
- Use a square image (1:1 ratio) for best results
- Recommended size: 300x300 pixels or larger
- Upload to a service like [Imgur](https://imgur.com) or use GitHub's raw file URLs

### Icons
- Use any emoji as icons (🌐, 📱, 💼, etc.)
- Keep icons consistent for a professional look
- You can also leave the icon field empty: `icon: ""`

### Colors and Themes
- The app automatically switches between light and dark modes
- Users can toggle themes with the sun/moon button
- Customize colors in the `theme` section of config.js

### Link Organization
- Put your most important links in `featuredLinks`
- Use `links` for secondary content
- Keep descriptions short and engaging
- Order links by priority (most important first)

## 🔧 Advanced Features

### Custom Backgrounds
Replace the default gradients with your own:
```javascript
theme: {
    light: {
        background: "url('your-image.jpg')", // Custom image
        // or
        background: "#your-color", // Solid color
        // or  
        background: "linear-gradient(45deg, #color1, #color2)" // Custom gradient
    }
}
```

### Link Tracking
Enable analytics to see which links are clicked most:
```javascript
analytics: {
    enabled: true,
    googleAnalyticsId: "G-XXXXXXXXXX" // Your Google Analytics 4 ID
}
```

### Social Media Customization
Add or remove social platforms by editing the `socialMedia` object. The app will automatically show/hide icons based on what URLs you provide.

## 📱 Mobile Optimization

The link tree is fully responsive and optimized for:
- 📱 Mobile phones (portrait and landscape)
- 📱 Tablets (iPad, Android tablets)
- 💻 Desktop computers
- 🖥️ Large screens and monitors

## 🌐 GitHub Pages Deployment

### Automatic Deployment
Once you enable GitHub Pages:
1. Any changes to `config.js` will update your live site
2. Changes may take 1-2 minutes to appear
3. Your site will be available at: `https://yourusername.github.io/repository-name`

### Custom Domain (Optional)
To use your own domain:
1. Add a `CNAME` file to your repository with your domain name
2. Configure your domain's DNS to point to GitHub Pages
3. Enable "Enforce HTTPS" in repository settings

## 🎯 Best Practices

### Content Strategy
- **Keep it focused** - Only include your most important links
- **Update regularly** - Remove outdated links and add new ones
- **Use clear descriptions** - Help visitors understand what they'll find
- **Prioritize mobile** - Most visitors will view on mobile devices

### Performance
- **Optimize images** - Use compressed images for faster loading
- **Test regularly** - Check your links work and load quickly
- **Monitor analytics** - See which links perform best

### Professional Tips
- **Consistent branding** - Use similar colors/style to your other platforms
- **Clear call-to-actions** - Use action words in link descriptions
- **Regular maintenance** - Update links and information monthly

## 🆘 Troubleshooting

### Common Issues

**Links not working?**
- Check that URLs include `https://` or `http://`
- Test links in a new browser tab before adding them

**Images not showing?**
- Ensure image URLs are publicly accessible
- Use direct links to images (ending in .jpg, .png, etc.)
- Try uploading to [Imgur](https://imgur.com) for reliable hosting

**Changes not appearing?**
- Wait 1-2 minutes for GitHub Pages to update
- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check that you saved the `config.js` file

**Site not loading?**
- Verify GitHub Pages is enabled in repository settings
- Check that the repository is public (or you have GitHub Pro for private pages)
- Ensure the main branch contains all files

### Getting Help
- Check the [GitHub Issues](../../issues) for common problems
- Create a new issue if you need help
- Include your `config.js` file (remove personal URLs) when asking for help

## 🏗️ Built With

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with animations
- **Vanilla JavaScript** - No frameworks, fast loading
- **GitHub Pages** - Free hosting
- **OpenHands 🙌** - AI-powered development

---

**Built with ❤️ using [OpenHands 🙌](https://all-hands.dev/)**

*Transform your online presence with a beautiful, professional link tree that represents you perfectly.*
