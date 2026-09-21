# Dursun Ozgur Cakirkaya | Personal Portfolio

A sleek, interactive personal portfolio engineered to resemble a modern Code Editor (IDE). Built to highlight my expertise as a Web3 & Blockchain Technical Support Engineer.

## ✨ Features

- **IDE/Terminal UI**: A fully immersive developer aesthetic. Horizontal VS Code style tabs (`about_me.md`, `impact_metrics.json`, `skills_stack.json`, `experience.js`), and custom macOS terminal window blocks for metrics and skills.
- **Dynamic Cyber Scramble**: A 30FPS text decoding animation built in pure JavaScript that cycles through technical titles.
- **Tech Grid Design**: A sleek CSS grid background with a floating accent orb and automatic Light/Dark mode toggling.
- **Vite Bundler**: Optimized with ES Modules, hot-module replacement, and distinct JS components.

## 🚀 Local Development

1. Clone the repository and install dependencies:
   ```bash
   git clone https://github.com/obscureozy/obscureozy.github.io.git
   cd obscureozy.github.io
   npm install
   ```

2. Start the local server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173).

## 🧱 Key Project Structure & Schematic

### 📐 Architecture Schematic

```mermaid
flowchart TD
    subgraph Input ["Source Code & Modules"]
        HTML["index.html (IDE Shell & Entry Point)"]
        CSS["src/css/main.css (Theme Tokens & Styles)"]
        JS_ENTRY["src/js/main.js (App Entry)"]
        
        subgraph JS_MODULES ["Modular JS Subsystems"]
            TABS["tabs.js (Tab Navigation)"]
            TYPEWRITER["typewriter.js (Cyber Scramble)"]
            THEME["theme.js (Dark/Light State)"]
            SCROLL["scroll.js (Smooth Scroll)"]
            ANIM["animations.js (Scroll Revealer)"]
            BLOG["blog.js (Hashnode Integration)"]
        end
    end

    subgraph Vite ["Vite.js Build Engine"]
        CONFIG["vite.config.js (base: './')"]
        BUNDLER["Vite Bundler & HMR Server"]
    end

    subgraph Output ["Production Build (dist/)"]
        DIST_HTML["dist/index.html"]
        DIST_CSS["dist/assets/index-[hash].css"]
        DIST_JS["dist/assets/index-[hash].js"]
    end

    HTML -->|Module Link| JS_ENTRY
    JS_ENTRY -->|Import CSS| CSS
    JS_ENTRY -->|Imports| TABS
    JS_ENTRY -->|Imports| TYPEWRITER
    JS_ENTRY -->|Imports| THEME
    JS_ENTRY -->|Imports| SCROLL
    JS_ENTRY -->|Imports| ANIM
    JS_ENTRY -->|Imports| BLOG

    Input --> CONFIG
    CONFIG --> BUNDLER
    BUNDLER --> Output
```

### 📁 Directory Tree

```
persona-website/
├── index.html              # Main IDE Layout, Tab Container & Vite Entry Point
├── vite.config.js          # Vite Configuration (Relative Base Path for GitHub Pages)
├── package.json            # npm Dependencies, Scripts ("type": "module")
├── favicon.svg             # Favicon Asset
├── public/                 # Static Assets (Served as-is)
└── src/
    ├── css/
    │   └── main.css        # Core Design System, CSS Variables, & IDE Styling
    └── js/
        ├── main.js         # Central Entry Point (Initializes all modules)
        ├── tabs.js         # Horizontal Tab Switching Logic
        ├── typewriter.js   # Cyber Scramble Animation Logic
        ├── theme.js        # Light/Dark Theme Switcher & Persistence
        ├── scroll.js       # Scroll-to-Top Button & Indicators
        ├── animations.js   # Dynamic Scroll Animations
        └── blog.js         # Hashnode GraphQL API Integration
```

## ⚡ Vite.js Build Structure & Architecture

This application leverages **[Vite.js](https://vitejs.dev/)** as a fast, modern frontend build tool. Here is how the project architecture is structured under Vite:

1. **HTML-First Entry Point**: Unlike traditional bundlers that start from a JavaScript file, Vite treats `index.html` as the root entry point. The `<script type="module" src="/src/js/main.js"></script>` tag informs Vite where the application logic begins.
2. **Native ES Modules (ESM)**: JavaScript modules use native `import`/`export` statements. During development (`npm run dev`), Vite serves source files directly over native ESM without pre-bundling, delivering instant server start and lightning-fast Hot Module Replacement (HMR).
3. **Integrated Asset & CSS Bundling**: The CSS file (`main.css`) is imported directly in `main.js`. Vite parses this import, injects styles during development, and optimizes/minifies them into single CSS output chunks during production build.
4. **Production Build (`npm run build`)**: Vite uses Rollup to compile all modules into static production bundles in the `dist/` directory. With `base: './'` configured in `vite.config.js`, all output assets use relative links, making the site ready for GitHub Pages hosting.

## 📜 License
MIT License.

## 📬 Contact
- GitHub: [@obscureozy](https://github.com/obscureozy)
- LinkedIn: [Dursun Ozgur Cakirkaya](https://www.linkedin.com/in/dursun-ozgur-cakirkaya/)
