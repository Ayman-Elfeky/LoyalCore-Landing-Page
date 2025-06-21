# Loylity Landing Page

![Landing Page Screenshot](./sc.png)

## Overview
This is a modern landing page built for Loylity, developed using React and Vite. The landing page features a responsive design with multiple sections including hero, features, pricing, workflow, and frequently asked questions.

## Technology Stack
- React
- Vite
- Context API for state management
- Manual Internationalization (i18n)

## Architecture
The project follows Atomic Design Architecture principles, organizing components in a hierarchical structure:

- **Atoms**: Basic building blocks like `Button`, `Logo`, `HeroTitle`, `HeroSubtitle`
- **Molecules**: Composed components like `NavItems`, `CheckListItem`, `Question`, `PricingOption`
- **Organisms**: Complex components like `Navbar`, `Footer`, `FeatureSection`, `PricingSection`
- **Templates**: Page layout components combining organisms
- **Pages**: Full page implementations

## Internationalization
The project implements manual internationalization with support for:
- English (en)
- Arabic (ar)

Translation files are located in `public/locales/` directory, with dedicated JSON files for each supported language. Language switching is handled through the `LanguageContext` and `LanguageToggle` component.

## Project Structure
```
src/
  ├── components/     # Components following Atomic Design
  ├── constants/      # Application constants and translations
  ├── context/        # React Context for state management
  ├── assets/         # Static assets (images, etc.)
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Features
- Responsive design
- Multi-language support (English/Arabic)
- Modern UI components
- Interactive pricing section
- FAQ section
- Feature showcase
- Workflow demonstration