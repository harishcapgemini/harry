# GitHub Pages Configuration Guide

## Your Valentine's Site Domain

After enabling GitHub Pages, your site will be available at:
**https://harishcapgemini.github.io/harry/**

## Steps to Enable GitHub Pages:

1. **Go to your GitHub repository:**
   - Visit: https://github.com/harishcapgemini/harry

2. **Navigate to Settings:**
   - Click on the "Settings" tab (top right of the repository)

3. **Find Pages section:**
   - In the left sidebar, click on "Pages" (under "Code and automation")

4. **Configure the source:**
   - Under "Build and deployment" → "Source"
   - Select: **Deploy from a branch**
   - Branch: Select **main** and **/ (root)**
   - Click **Save**

5. **Wait for deployment:**
   - It takes 1-5 minutes for the site to go live
   - Refresh the Pages settings to see the live URL
   - You'll see: "Your site is live at https://harishcapgemini.github.io/harry/"

## Custom Domain (Optional):

If you want a custom domain like `valentine.yourdomain.com`:

### Option 1: Use GitHub's domain (Free & Easy)
Just use: **https://harishcapgemini.github.io/harry/**

### Option 2: Buy a Custom Domain
1. **Buy a domain** from providers like:
   - Namecheap.com
   - GoDaddy.com
   - Google Domains
   - Cloudflare

2. **Configure DNS settings** in your domain provider:
   Add these DNS records:
   ```
   Type: CNAME
   Name: www (or valentine, or any subdomain)
   Value: harishcapgemini.github.io
   ```

3. **Add custom domain in GitHub:**
   - Go to Settings → Pages
   - Under "Custom domain", enter your domain
   - Click Save
   - Enable "Enforce HTTPS" (recommended)

### Option 3: Use a Free Subdomain Service
Services like:
- **is-a.dev** (free .is-a.dev subdomain)
- **js.org** (free .js.org subdomain)

## Sharing the Link:

Once live, share the link with your girlfriend:
- **Direct link:** https://harishcapgemini.github.io/harry/
- Create a QR code: Use qr-code-generator.com to create a QR code
- Short URL: Use bit.ly to create a shorter, memorable link

## Troubleshooting:

**Site not loading?**
- Wait 2-5 minutes after enabling Pages
- Check that index.html is in the root directory
- Verify the branch is set to "main"
- Clear your browser cache

**404 Error?**
- Make sure index.html (not Index.html) is the filename
- Verify files are in the root, not in a subfolder
- Check the repository is public

## Quick Check:
After 5 minutes, visit: https://harishcapgemini.github.io/harry/

✨ Your Valentine's proposal should be live! ✨
