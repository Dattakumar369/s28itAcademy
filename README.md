# S28 IT Academy - React Static Application

A modern, responsive React static application showcasing S28 IT Academy's training programs.

## Features

- 🎨 Modern, beautiful UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and lightweight
- 🎯 Three main programs:
  - Foundation Program
  - Career Restart Program
  - Intensive Career Program
- 🚀 Smooth scrolling navigation
- 💫 Interactive animations and hover effects

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build` folder that can be deployed to any static hosting service.

## Project Structure

```
s28itsol/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── FoundationProgram.js
│   │   ├── CareerRestartProgram.js
│   │   ├── IntensiveCareerProgram.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Technologies Used

- React 18.2.0
- CSS3 (with modern features like gradients, flexbox, grid)
- Google Fonts (Inter)
- EmailJS (@emailjs/browser) - For form submissions

## EmailJS Setup

This application uses EmailJS to send enrollment and contact form submissions to your email.

**Important:** Before using the forms, you need to set up EmailJS:

1. See `EMAILJS_SETUP.md` for detailed instructions
2. Create an EmailJS account at [https://www.emailjs.com/](https://www.emailjs.com/)
3. Update the credentials in `src/services/emailService.js`
4. See `EMAIL_TEMPLATE.md` for the email template to use in EmailJS

## Contact Information

- **Website:** https://s28itsolutions.com
- **Kurnool:** +91 9063670603
- **Hyderabad:** +91 8688700711 (WhatsApp)
- **Email:** hr@s28itsolutions.com

## Features

- 📱 WhatsApp direct contact link
- ✉️ Email contact form
- 🎓 Enrollment form with EmailJS integration
- 📞 Contact page with multiple contact methods

## Deployment to GitHub Pages

This application is configured for deployment to GitHub Pages at **s28itsolutions.com**.

### Quick Deploy

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

This will automatically:
- Build the production-ready app
- Deploy to the `gh-pages` branch
- Make it available at https://s28itsolutions.com

### Detailed Deployment Guide

See `DEPLOYMENT.md` for complete deployment instructions including:
- GitHub repository setup
- Custom domain configuration
- DNS settings
- Troubleshooting

### Repository

GitHub: https://github.com/Dattakumar369/s28itAcademy

### Live Website

**Production URL:** https://s28itsolutions.com

## License

© 2024 S28 IT Academy. All rights reserved.

