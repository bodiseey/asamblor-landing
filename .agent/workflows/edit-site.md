---
description: How to update the live site on asamblor.com
---

# Updating Your Live Site

Since your project is connected to Vercel and GitHub, updating the live site is a simple 3-step process.

### 1. Edit and Preview Locally
First, make your changes in the codebase and verify them in your local browser.
- Run `npm run dev` (already running in your terminal on `http://localhost:3001`).
- Check your changes at `http://localhost:3001`.

### 2. Commit Your Changes
Save your progress in Git.
```bash
git add .
git commit -m "Describe what you changed"
```

### 3. Push to GitHub
Upload your code to the personal GitHub repository we created.
```bash
git push origin main
```

### 🚀 What happens next?
1. **Vercel** will immediately detect the new code on your GitHub `main` branch.
2. It will automatically start a **Build**.
3. If the build succeeds, your changes will be live on **asamblor.com** in about 1-2 minutes!

> [!TIP]
> You can monitor the progress of the deployment by visiting your [Vercel Dashboard](https://vercel.com/dashboard).
