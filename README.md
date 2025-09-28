# Serenity Spa Website

A modern, responsive massage and spa website built with React, Vite, and Tailwind CSS. This project showcases a complete spa business website with all essential features including service listings, booking forms, testimonials, and contact information.

## 🌟 Features

- **Modern Design**: Clean, spa-themed design with soft pastel colors and relaxing aesthetics
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Interactive Components**: 
  - Sticky navigation with smooth scrolling
  - Hero section with call-to-action buttons
  - Service cards with detailed modals
  - Booking form with date/time selection
  - Contact form with validation
  - Testimonials showcase
- **Performance Optimized**: Built with Vite for fast development and optimized production builds
- **Accessibility**: Semantic HTML and proper ARIA labels
- **SEO Ready**: Structured content and proper meta tags

## 🛠 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Custom Color Palette** - Spa-themed colors (sage, lavender, cream, etc.)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Sticky navigation
│   ├── Hero.jsx        # Hero section
│   ├── Services.jsx    # Services grid
│   ├── Booking.jsx     # Booking form
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer
├── data/               # JSON data files
│   ├── services.json   # Service information
│   └── testimonials.json # Customer reviews
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Colors
The website uses a custom spa-themed color palette defined in `tailwind.config.js`:

- **Cream**: #F7F3E9 (primary background)
- **Sage**: #9CAF88 (primary accent)
- **Lavender**: #E6E6FA (secondary accent)
- **Rose**: #F4C2C2 (tertiary accent)
- **Mint**: #B8E6B8 (success states)
- **Sand**: #F5E6D3 (neutral)
- **Stone**: #A0A0A0 (text)
- **Earth**: #8B7355 (dark text)

### Content
- Update service information in `src/data/services.json`
- Modify testimonials in `src/data/testimonials.json`
- Change contact information in the Contact component
- Replace placeholder images with your own

## 🌐 Deployment

This project is ready for deployment on various platforms:

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your Git repository for automatic deployments

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run deploy`

## 📱 Features Breakdown

### Navigation
- Sticky header that follows scroll
- Mobile hamburger menu
- Smooth scrolling to sections

### Hero Section
- Full-screen background image
- Compelling headline and description
- Dual call-to-action buttons

### Services
- Grid layout with service cards
- Modal popups with detailed information
- Pricing and duration display

### Booking Form
- Date picker with validation
- Service selection dropdown
- Time slot selection
- Form validation and success states

### About Section
- Company story and mission
- Team member profiles
- Customer testimonials

### Contact
- Contact form with validation
- Business information display
- Social media links

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

Built with ❤️ for wellness and relaxation.
