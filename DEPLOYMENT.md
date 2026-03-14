# GitHub Pages Deployment Guide

This guide will help you deploy your S28 IT Academy website to GitHub Pages at **s28itsolutions.com**.

## Prerequisites

1. GitHub account
2. Repository created (https://github.com/Dattakumar369/s28itAcademy.git)
3. Domain configured: s28itsolutions.com

## Step 1: Install gh-pages Package

Install the GitHub Pages deployment package:

```bash
npm install --save-dev gh-pages
```

## Step 2: Configure package.json

The `package.json` is already configured with:
- `homepage`: "https://s28itsolutions.com"
- `deploy` script: "gh-pages -d build"

## Step 3: Build and Deploy

### First Time Deployment:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

### Subsequent Deployments:

After making changes, simply run:
```bash
npm run deploy
```

This will:
- Build the production-ready app
- Deploy it to the `gh-pages` branch
- Make it available at your domain

## Step 4: Configure GitHub Repository

1. Go to your repository: https://github.com/Dattakumar369/s28itAcademy
2. Click **Settings**
3. Go to **Pages** section
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

## Step 5: Configure Custom Domain (s28itsolutions.com)

### Option A: Using GitHub Pages Settings

1. In repository **Settings** → **Pages**
2. Under **Custom domain**, enter: `s28itsolutions.com`
3. Check **Enforce HTTPS** (after DNS is configured)
4. Click **Save**

### Option B: DNS Configuration

Add these DNS records to your domain provider:

**For Apex Domain (s28itsolutions.com):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**OR for CNAME (www.s28itsolutions.com):**
```
Type: CNAME
Name: www
Value: Dattakumar369.github.io
```

**For Both (Recommended):**
- Add A records for apex domain
- Add CNAME for www subdomain

### Verify DNS

After adding DNS records, wait 24-48 hours for propagation. Check with:
```bash
dig s28itsolutions.com
# or
nslookup s28itsolutions.com
```

## Step 6: Create CNAME File (Optional)

Create `public/CNAME` file:

```
s28itsolutions.com
```

This ensures GitHub Pages knows your custom domain.

## Step 7: Verify Deployment

1. Visit: https://s28itsolutions.com
2. Check all pages load correctly
3. Test forms and navigation
4. Verify mobile responsiveness

## Troubleshooting

### Build Errors
- Check for linting errors: `npm run build`
- Ensure all dependencies are installed: `npm install`

### 404 Errors
- Verify `homepage` in package.json matches your domain
- Check that `gh-pages` branch exists
- Ensure GitHub Pages is enabled in repository settings

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check GitHub Pages settings show your domain
- Ensure CNAME file exists in public folder

### Routing Issues
- React Router may need HashRouter for GitHub Pages
- Or use 404.html redirect (see below)

## Advanced: Handling React Router on GitHub Pages

If you add routing later, create `public/404.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>S28 IT Academy</title>
    <script>
      // Single Page Apps for GitHub Pages
      // https://github.com/rafgraph/spa-github-pages
      var pathSegmentsToKeep = 0;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
```

## Continuous Deployment

To automatically deploy on every push to main branch:

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

## Post-Deployment Checklist

- [ ] Website loads at s28itsolutions.com
- [ ] All pages accessible
- [ ] Forms submit correctly
- [ ] Mobile view works
- [ ] Contact numbers visible
- [ ] WhatsApp link works
- [ ] Email links work
- [ ] HTTPS enabled
- [ ] Meta tags correct
- [ ] Google Analytics (if added)

## Support

For issues:
1. Check GitHub Actions logs
2. Verify build output
3. Check browser console for errors
4. Verify EmailJS credentials are set

---

**Your site will be live at:** https://s28itsolutions.com

