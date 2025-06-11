# My Personal Website

A clean, modern personal website built with HTML, CSS, and JavaScript. Features a responsive design, smooth animations, and a dark theme.

## Features

- 🎨 Clean, modern design
- 📱 Fully responsive layout
- ⚡ Smooth animations and transitions
- 🌙 Dark theme
- 🔍 SEO friendly
- 📊 Privacy-focused analytics (GoatCounter)

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/obscureozy/obscureozy.github.io.git
   cd obscureozy.github.io
   ```

2. Install dependencies (optional, for development):
   ```bash
   npm install
   ```

3. Start a local server (using `http-server`):
   ```bash
   npx http-server
   ```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

## Project Structure

```
obscureozy.github.io/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── favicon.svg         # Website favicon
└── README.md          # This file
```

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #4A90E2;
    --text-color: #333;
    --bg-color: #f5f5f5;
    --card-bg: #ffffff;
}
```

### Content
Modify `index.html` to update:
- Personal information
- Skills
- Social media links
- About section

### Analytics
The site uses [GoatCounter](https://www.goatcounter.com/) for privacy-focused analytics. To change the analytics:
1. Create a new GoatCounter account
2. Update the script tag in `index.html` with your new counter URL

## Deployment

The site is automatically deployed to GitHub Pages. Any push to the main branch will trigger a new deployment.

## License

MIT License - feel free to use this template for your own website!

## Contact

- GitHub: [@obscureozy](https://github.com/obscureozy)
- LinkedIn: [Your LinkedIn Profile]
- Email: your.email@example.com
