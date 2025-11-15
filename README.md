# Surendra Kumar - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean design inspired by contemporary portfolio layouts
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 14 App Router for optimal performance
- 🎯 TypeScript for type safety
- 💅 Styled with Tailwind CSS
- 🚀 Easy to customize and deploy

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone or navigate to the project directory:
```bash
cd portfolio-next
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## Project Structure

```
portfolio-next/
├── app/
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Main portfolio page
│   └── globals.css     # Global styles
├── public/             # Static assets
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Customization

### Personal Information

Edit the content in `app/page.tsx` to update:
- Contact information
- Social media links
- Skills and expertise
- Work experience
- Achievements
- Profile image/avatar

### Colors and Styling

Modify the color scheme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#EF4444',    // Change to your preferred primary color
      secondary: '#F87171',  // Change to your preferred secondary color
    },
  },
}
```

### Adding a Profile Picture

1. Add your image to the `public` folder
2. Replace the placeholder in the hero section with:
```tsx
<Image
  src="/your-image.jpg"
  alt="Surendra Kumar"
  width={320}
  height={320}
  className="rounded-full"
/>
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Your own server

Build the production version:
```bash
npm run build
npm start
```

## Features to Add

Some ideas for future enhancements:
- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Project showcase with filtering
- [ ] Contact form with backend integration
- [ ] Animations and transitions
- [ ] SEO optimization with metadata
- [ ] Analytics integration

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **React** - UI library

## License

This project is open source and available for personal use.

## Contact

Surendra Kumar
- Email: surendra.kumar.devara@gmail.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

Built with ❤️ using Next.js
