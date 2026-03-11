# Dursun Ozgur Cakirkaya | Personal Portfolio

A clean, high-end personal website showcasing my experience as a Blockchain & Web3 Technical Support Engineer. Features a dynamic mesh-gradient design, robust glassmorphism UI, direct GraphQL connections to Hashnode for recent blog posts, and stringent modern security architectures.

## ✨ Features

- **Premium Aesthetics**: Smooth, 15-second mesh gradient backgrounds, SVG noise overlays, and responsive frosted glassmorphism elements.
- **Secure Architecture**: Complete elimination of third-party CORS proxies in flavor of native GraphQL integrations. 
- **Stringent Security**: Integrated Content Security Policy (CSP) and Subresource Integrity (SRI) on external scripts.
- **Vite & Modular JS**: Configured with Vite as the build tool to enable ES Modules, hot module replacement, and separated JavaScript components (Animations, Scroll, Typewriter, GraphQL API).
- **Automated Deployment**: Custom GitHub Actions implicitly push ultra-fast static builds to GitHub Pages utilizing `npm run build`.
- **Privacy Driven**: Integrates secure, cookie-less GoatCounter analytics to maintain user privacy.

## 🚀 Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/obscureozy/obscureozy.github.io.git
   cd obscureozy.github.io
   ```

2. Install Vite dependencies:
   ```bash
   npm install
   ```

3. Start the local development server with hot-reload:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🧱 Project Structure

```
obscureozy.github.io/
├── index.html              # Main HTML File
├── src/                    # Source Directory
│   ├── css/
│   │   └── main.css        # Main stylesheet with premium grids & animations
│   └── js/
│       ├── main.js         # Entry point connecting modules
│       ├── animations.js   # GSAP/Intersection Observers logic
│       ├── blog.js         # Direct Hashnode GraphQL Fetch Engine
│       ├── scroll.js       # Smooth-scroll definitions
│       └── typewriter.js   # Hero title logic
├── package.json            # Vite commands and configuration
└── .github/workflows/      # Automated deployment for GitHub Pages
```

## 🛠 Customization

### Theming
Modify the primary variables in `src/css/main.css`:
```css
:root {
    /* Premium Dark Theme */
    --primary-color: #4a90e2;    /* Primary Action/Text */
    --secondary-color: #357abd;  /* Hover Stats */
    --accent-color: #4a90e2;     /* Highlights */
    --background-color: #050505; /* Deep Background Frame */
}
```

### Hashnode Blog
If you move your blog, update the `host` query string inside `src/js/blog.js`:
```javascript
publication(host: "docak.hashnode.dev") { 
// Replace with your URL 
```

### Deploying to GitHub Pages
Your repository is configured to seamlessly host on GitHub Pages using the `gh-pages` library and relative build paths.
To push a new version online, you simply need to build the project and run the deployment script:
```bash
npm run build
npm run deploy
```
*This command cleanly packages your dist directory and pushes it exactly where GitHub expects it!*

## 📜 License
MIT License - Feel free to use this as inspiration for your own Web3 portfolios.

## 📬 Contact
- GitHub: [@obscureozy](https://github.com/obscureozy)
