# Deployment Guide - Stranger Theme Website

This guide explains how to deploy your static frontend website to various platforms.

## Pre-Deployment Checklist

- [ ] Run `npm run build` and verify no errors
- [ ] Test `npm run preview` to check production build locally
- [ ] Update `client/public/opengraph.jpg` with your actual image
- [ ] Update meta tags in `client/index.html` with your domain
- [ ] Remove any placeholder/Replit-specific code
- [ ] Test all external links work correctly

---

## 🚀 Vercel (Recommended)

**Why Vercel:**
- ⚡ Zero-config deployment
- 🌍 Global CDN
- 🔄 Automatic deploys from Git
- 💰 Generous free tier
- 🎯 Built for Vite/React

### Steps:

1. **Push code to GitHub**

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite
   - Click "Deploy"

3. **That's it!** Your site will be live at `your-project.vercel.app`

### Configuration (Optional)

Create `vercel.json` (already included):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

### Custom Domain

1. Go to project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

---

## 🔷 Netlify

**Why Netlify:**
- ⚡ Fast builds
- 🌍 CDN
- 🔄 Git integration
- 💰 Free tier
- 🎯 Great for static sites

### Steps:

1. **Push code to GitHub**

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Live at** `random-name.netlify.app`

### Configuration (Already Included)

`netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🌐 Cloudflare Pages ✅ SELECTED

**Why Cloudflare:**
- 🌍 Fastest global CDN
- 💰 Unlimited bandwidth
- 🆓 Free tier
- ⚡ DDoS protection

**This project uses Cloudflare Pages for deployment with GitHub Actions automation.**

### Deployment Steps

1. **GitHub Actions CI/CD (Automatic)**
   - Push to `main` branch → Auto deploys to Cloudflare Pages
   - Pull requests → Preview deployments
   - See workflow: `.github/workflows/cloudflare-pages.yml`

2. **Manual Deployment (if needed)**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Workers & Pages → Your Project
   - View deployments and production URLs

### Setup Instructions

**First-time setup:**

1. Create Cloudflare Pages project via dashboard
2. Get your:
   - Account ID (from Cloudflare dashboard URL)
   - API Token (Workers & Pages + Edit permissions)
3. Add secrets to GitHub repository:
   - `CLOUDFLARE_ACCOUNT_ID`
   - `CLOUDFLARE_API_TOKEN`
4. Push code to `main` branch
5. GitHub Actions will deploy automatically

### Environment Variables

Add in Cloudflare Pages dashboard (Settings → Environment variables):

```bash
VITE_GA_ID=your-google-analytics-id
```

---

## ⚙️ Cloudflare Configuration

### GitHub Actions Secrets

Add these secrets in your GitHub repository (Settings → Secrets and variables → Actions):

**Required Secrets:**

- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID
- `CLOUDFLARE_API_TOKEN` - API token with Workers & Pages Edit permissions

**How to get these values:**

1. **Account ID:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Select your domain/account
   - Copy Account ID from the right sidebar or URL

2. **API Token:**
   - Go to [API Tokens page](https://dash.cloudflare.com/profile/api-tokens)
   - Click "Create Token"
   - Use "Edit Cloudflare Workers" template or create custom with:
     - Account - Cloudflare Pages - Edit
     - Zone - Zone - Read (if using custom domain)
     - Account Resources - Include - Your account

### Cloudflare Environment Variables

Add these in Cloudflare Pages dashboard (Settings → Environment variables):

```bash
# Analytics (optional)
VITE_GA_ID=your-google-analytics-id

# Other VITE_ prefixed variables as needed
```

**Note:** Variables must be prefixed with `VITE_` to be accessible in the client-side code.

### Custom Domain Setup

1. In Cloudflare Pages dashboard, go to Custom Domains
2. Add your domain (e.g., `strangertheme.com`)
3. Cloudflare will automatically configure DNS
4. Update your domain nameservers to Cloudflare's

### Build Settings (in Cloudflare Dashboard)

These are configured in GitHub Actions, but for reference:

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/`
- **Node.js version:** `20`

---

## 🔒 Security Configuration

### Headers Configuration

Create `client/public/_headers` file for custom headers:

```text
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable

/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

### Redirects Configuration

Create `client/public/_redirects` file for SPA routing:

```text
# SPA fallback
/*    /index.html   200
```

---

## 📊 Performance Optimization

### Implemented Optimizations

1. **Code Splitting** - Automatic with Vite
2. **Tree Shaking** - Removes unused code
3. **Minification** - CSS and JS minified
4. **Image Optimization** - Use WebP format
5. **CDN Caching** - Cloudflare's global CDN

### Recommended Additional Optimizations

1. **Enable Brotli Compression** (automatic on Cloudflare)
2. **Use Cloudflare Images** for image optimization
3. **Implement Service Worker** for offline support
4. **Add Critical CSS** inline for faster LCP

---

## 📦 GitHub Pages

**Why GitHub Pages:**
- 💰 Free for public repos
- 🎯 Easy if already using GitHub
- 📦 Simple setup

### Steps:

1. **Install gh-pages:**
   ```bash
   npm install -D gh-pages
   ```

2. **Add deploy script to package.json:**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Access at:** `https://yourusername.github.io/strangertheme.com`

---

## 🔥 Manual Deployment (Static Hosting)

### AWS S3 + CloudFront

1. Build: `npm run build`
2. Upload `dist/` contents to S3 bucket
3. Enable static website hosting
4. Set up CloudFront distribution
5. Configure custom domain

### Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Initialize
firebase init hosting

# Deploy
firebase deploy
```

### Any Web Server

Upload the `dist/` folder to any web server:
- cPanel
- Shared hosting
- VPS
- Nginx/Apache

---

## 🌍 Deployment Comparison

| Platform | Free Tier | Speed | Ease of Use | Best For |
|----------|-----------|-------|-------------|----------|
| **Vercel** | 100GB bandwidth | ⚡⚡⚡ | ⭐⭐⭐⭐⭐ | React/Vite apps |
| **Netlify** | 100GB bandwidth | ⚡⚡⚡ | ⭐⭐⭐⭐ | Static sites |
| **Cloudflare** | Unlimited | ⚡⚡⚡⚡⚡ | ⭐⭐⭐ | Global performance |
| **GitHub Pages** | 1GB storage | ⚡⚡ | ⭐⭐⭐⭐ | Open source |
| **AWS S3** | 12mo free | ⚡⚡⚡ | ⭐⭐ | AWS ecosystem |

---

## ✅ Post-Deployment Steps

After deploying to any platform:

1. **Test the live site:**
   - Check all pages load correctly
   - Test language switcher
   - Verify external links work
   - Test on mobile devices

2. **Set up analytics** (optional):
   ```bash
   # Add to .env
   VITE_GA_ID=your-google-analytics-id
   ```

3. **Configure custom domain** (if applicable)

4. **Set up monitoring** (optional):
   - Uptime monitoring
   - Error tracking (Sentry)
   - Performance monitoring

5. **Update DNS** (if using custom domain)

---

## 🔄 Continuous Deployment

All recommended platforms (Vercel, Netlify, Cloudflare) support automatic deployments:

- Push to `main` branch → Auto deploy
- Pull requests → Preview deployments
- Rollback to previous versions

---

## 💡 Pro Tips

1. **Environment Variables:**
   - Add to platform dashboard (not .env file)
   - Prefix with `VITE_` for client-side access

2. **Performance:**
   - Enable gzip/brotli compression
   - Use CDN for images
   - Leverage browser caching

3. **SEO:**
   - Update meta tags in `client/index.html`
   - Add sitemap.xml
   - Submit to Google Search Console

4. **Security:**
   - Enable HTTPS (automatic on most platforms)
   - Set up CSP headers
   - Keep dependencies updated

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clean and rebuild locally
rm -rf node_modules dist package-lock.json
npm install
npm run build
```

### 404 Errors on Refresh

- Add SPA fallback (included in `netlify.toml`)
- Configure server to redirect to `index.html`

### Images Not Loading

- Check paths are relative (not absolute)
- Verify images are in `client/public/`

### Fonts Not Loading

- Check Google Fonts URL in `client/index.html`
- Verify CORS headers on static assets

---

## 📞 Support

If you encounter issues:

1. Check platform-specific documentation
2. Review build logs
3. Test locally with `npm run preview`
4. Check GitHub issues for similar problems

---

Happy deploying! 🚀
