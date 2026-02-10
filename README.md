# Vizino Studio Official Website

A modern, static website for Vizino Studio - an AI-powered interior design platform built with Astro and deployed on Vercel.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will be available at `http://localhost:3000`

## 📁 Project Structure

```
/src
  /pages          # Page components (index, about, access, contact)
  /layouts        # Layout components (base layout)
  /components     # Reusable components (optional)
/public           # Static assets
astro.config.mjs  # Astro configuration
tsconfig.json     # TypeScript configuration
vercel.json       # Vercel deployment configuration
```

## 📄 Pages

- **Home** (`/`) - Introduction and key features showcase
- **Features** (`/#features`) - Detailed feature descriptions
- **Get Started** (`/access`) - Access options and FAQ
- **About** (`/about`) - Mission, vision, and team information
- **Contact** (`/contact`) - Contact form and support resources

## 🎨 Design Features

- Responsive design with mobile optimization
- Modern gradient color scheme (purple/blue)
- Accessible semantic HTML
- Fast static site generation
- SEO-optimized metadata

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import the repository
4. Vercel will automatically detect Astro and deploy

The `vercel.json` configuration file is already set up for optimal Astro builds.

### Production URL
Update the `site` property in `astro.config.mjs` with your production URL.

## 🛠️ Technology Stack

- **Astro** - Static site generator
- **TypeScript** - Type-safe development
- **CSS** - Modern responsive styling
- **Vercel** - Deployment platform

## 📝 Content Updates

All content is written in Astro files (`.astro`). To update:
1. Edit the corresponding file in `/src/pages` or `/src/layouts`
2. Changes are reflected immediately in development mode
3. Run `npm run build` to generate the static build

## 🔗 External Links

Update these links in the pages:
- `https://vizino-studio.com` - Main application URL
- `https://docs.vizino-studio.com` - Documentation
- `https://youtube.com/vizino-studio` - YouTube channel
- Email addresses in contact page

## 📧 Contact Email Configuration

Update email addresses in:
- `src/pages/contact.astro` - Support and business emails
- `src/pages/about.astro` - Contact links

## 🔐 Environment Variables

Currently, no environment variables are required for this static site. If you add dynamic features, update accordingly.

## 📄 License

© 2026 Vizino Studio. All rights reserved.

## 🤝 Contributing

For issues or suggestions regarding the website, please contact the team via the contact page.
