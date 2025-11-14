# Ionic Angular App with Material & Tailwind

A modern Ionic application built with Angular, Angular Material, and Tailwind CSS, featuring side menu navigation and bottom tabs.

## 🚀 Features

- **Ionic Framework** (Stable Version 8.0.0)
- **Angular 20** - Latest stable version
- **Angular Material 20** - Material Design components
- **Tailwind CSS 3** - Utility-first CSS framework
- **Side Menu Navigation** - Collapsible side menu with multiple pages
- **Bottom Tabs Navigation** - Three tab pages (Home, Search, Profile)
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Dark Mode Support** - System-based dark mode

## 📦 Tech Stack

- **Framework**: Ionic 8.0.0
- **Frontend**: Angular 20.0.0
- **UI Components**: Angular Material 20.2.13
- **Styling**: Tailwind CSS 3.x
- **Icons**: Ionicons 7.0.0
- **Capacitor**: 7.4.4 (for native features)

## 🛠️ Installation

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn
- Ionic CLI (installed globally)

### Setup

1. Navigate to the project directory:
```bash
cd ionic-app
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
ionic serve
```

The app will open in your browser at `http://localhost:8100`

## 📱 Project Structure

```
ionic-app/
├── src/
│   ├── app/
│   │   ├── folder/          # Folder pages (from side menu)
│   │   ├── tabs/            # Tabs container
│   │   │   ├── tab1/        # Home tab
│   │   │   ├── tab2/        # Search tab
│   │   │   └── tab3/        # Profile tab
│   │   ├── app.component.*  # Root component with side menu
│   │   └── app.module.ts    # Root module
│   ├── assets/              # Static assets
│   ├── theme/               # Ionic theme variables
│   └── global.scss          # Global styles (includes Tailwind)
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── angular.json             # Angular CLI configuration
```

## 🎨 Styling

### Tailwind CSS

Tailwind CSS is configured with Ionic compatibility:
- `preflight` is disabled to avoid conflicts with Ionic styles
- All utility classes are available
- Custom Tailwind classes can be added in `tailwind.config.js`

### Ionic Theming

Ionic theme variables are located in:
- `src/theme/variables.scss` - Color schemes and CSS variables
- `src/global.scss` - Global styles and Tailwind imports

## 🧭 Navigation

### Side Menu
Access the side menu by:
- Clicking the menu button in the header
- Swiping from the left edge (on mobile)

Menu items:
- Tabs (navigates to tab pages)
- Inbox, Outbox, Favorites, Archived, Trash, Spam

### Bottom Tabs
Three tabs available:
1. **Home** - Overview and welcome screen
2. **Search** - Search functionality with list items
3. **Profile** - User profile and settings

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run lint` - Lint the code
- `ionic serve` - Start Ionic dev server
- `ionic build` - Build the app

## 📱 Building for Mobile

### iOS
```bash
ionic capacitor add ios
ionic capacitor build ios
```

### Android
```bash
ionic capacitor add android
ionic capacitor build android
```

## 🎯 Key Components

### Angular Material Components
The app includes Angular Material setup for:
- Buttons
- Cards
- Lists
- Icons
- Form controls
- And more...

### Ionic Components
Utilizing Ionic components:
- `ion-menu` - Side menu
- `ion-tabs` - Tab navigation
- `ion-card` - Content cards
- `ion-list` - List views
- `ion-button` - Buttons
- `ion-icon` - Icons

## 🌙 Dark Mode

Dark mode is configured to follow system preferences. To change:
- Edit `src/global.scss`
- Modify the `color-scheme` property in the body selector

## 📝 Configuration Files

### tailwind.config.js
```javascript
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: { extend: {} },
  plugins: [],
  corePlugins: { preflight: false }
}
```

### postcss.config.js
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **Tailwind classes not working**
   - Ensure `postcss.config.js` is properly configured
   - Check that Tailwind directives are in `global.scss`

2. **Module not found errors**
   - Run `npm install` to install dependencies
   - Clear node_modules and reinstall if needed

3. **Compilation errors**
   - Ensure all components have `standalone: false` in their decorators
   - Check that all modules properly import required dependencies

## 📞 Support

For issues and questions:
- Check the [Ionic Documentation](https://ionicframework.com/docs)
- Visit [Angular Material Docs](https://material.angular.io)
- Review [Tailwind CSS Docs](https://tailwindcss.com/docs)

## ✨ Version Information

- Ionic: 8.0.0
- Angular: 20.0.0
- Angular Material: 20.2.13
- Tailwind CSS: 3.x
- Node.js: 20.19.2

---

Built with ❤️ using Ionic, Angular, Material, and Tailwind CSS
