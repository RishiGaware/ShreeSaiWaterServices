# SSWS - Sustainable Water Solutions

A modern, responsive corporate website built with React, Vite, and TailwindCSS.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and Vite for fast development
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Professional Navigation**: Fixed navbar with dropdown menus
- **Corporate Styling**: Deep blue color scheme with professional aesthetics
- **Mobile Optimized**: Hamburger menu for mobile devices
- **Dark Mode Support**: Toggle between light and dark themes
- **SEO Ready**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite 4
- **Styling**: TailwindCSS 3
- **Routing**: React Router DOM
- **Icons**: SVG icons and emojis
- **Forms**: Controlled components with state management

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation component with dropdowns
│   ├── Footer.jsx      # Footer with social links
│   ├── Layout.jsx      # Page layout wrapper
│   ├── PageTemplate.jsx # Reusable page template
│   └── DarkModeToggle.jsx # Dark mode toggle component
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── Contact.jsx     # Contact page
│   ├── Gallery.jsx     # Project gallery
│   └── company/        # Company section pages
│       ├── AboutUs.jsx
│       ├── Infrastructure.jsx
│       ├── Leadership.jsx
│       ├── OurTeam.jsx
│       ├── Careers.jsx
│       └── Vendor.jsx
│   └── products/       # Product pages
│       └── WaterTreatment.jsx
├── App.jsx             # Main router setup
├── main.jsx            # App entry point
└── index.css           # TailwindCSS and custom styles
```

## 🎨 Design Features

### Color Scheme
- **Primary Blue**: Deep corporate blue (#1e40af)
- **Secondary**: White and light gray backgrounds
- **Accents**: Blue gradients and hover effects
- **Dark Mode**: Complete theme switching with smooth transitions

### Components
- **Hero Sections**: Gradient backgrounds with large typography
- **Navigation**: Fixed top navbar with smooth dropdowns
- **Buttons**: Primary, secondary, success, and warning variants
- **Cards**: Clean, modern card layouts with hover effects
- **Forms**: Styled form inputs with focus states

## 📱 Responsive Features

- **Mobile Navigation**: Collapsible hamburger menu
- **Dropdown Menus**: Touch-friendly mobile dropdowns
- **Grid Layouts**: Responsive grid systems
- **Typography**: Scalable text sizes
- **Spacing**: Consistent responsive spacing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (20.19+ recommended for Vite 7)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sswa
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📄 Available Pages

### Main Pages
- **Home** (`/`) - Landing page with company overview
- **Contact** (`/contact`) - Contact form and information
- **Gallery** (`/gallery`) - Project showcase with filtering

### Company Section
- **About Us** (`/company/about`) - Company story and values
- **Infrastructure** (`/company/infrastructure`) - Facilities and capabilities
- **Leadership** (`/company/leadership`) - Executive team
- **Our Team** (`/company/team`) - Staff overview
- **Careers** (`/company/careers`) - Job opportunities
- **Vendor** (`/company/vendor`) - Supplier information
- **Certificates** (`/company/certificates`) - Industry certifications
- **CSR** (`/company/csr`) - Corporate social responsibility

### Products Section
- **Water Treatment Plant** (`/products/water-treatment`)
- **Waste Water Treatment** (`/products/waste-water`)
- **Manufacturing** (`/products/manufacturing`)
- **Services** (`/products/services`)

### Other Pages
- **Blog** (`/blog`) - Company news and insights
- **Privacy Policy** (`/policies/privacy`)
- **Terms of Use** (`/policies/terms`)

## 🎯 Customization

### Adding New Pages
1. Create a new component in the appropriate directory
2. Use the `PageTemplate` component for consistent styling
3. Add the route to `App.jsx`
4. Update navigation if needed

### Styling Changes
- Modify `src/index.css` for custom CSS
- Update `tailwind.config.js` for theme changes
- Use TailwindCSS utility classes for component styling

### Content Updates
- Edit component files to update text and images
- Modify navigation items in `Navbar.jsx`
- Update footer links in `Footer.jsx`

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Style
- Use functional components with hooks
- Follow React best practices
- Maintain consistent component structure
- Use semantic HTML elements

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Support

For technical support or questions, please contact the development team.

---

**SSWS** - Leading the way in sustainable water solutions.
