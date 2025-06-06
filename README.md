# Personal Portfolio Website

A modern, dark-themed personal portfolio website with blockchain-inspired design elements.

## Features

- Responsive design
- Dark theme with blockchain-inspired aesthetics
- Smooth animations and transitions
- Mobile-friendly layout
- Interactive elements

## Hosting on GitHub Pages

To host this website on GitHub Pages, follow these steps:

1. Create a new repository on GitHub named `obscureozy.github.io`
   - Go to GitHub.com
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it exactly as `obscureozy.github.io`
   - Make it public
   - Click "Create repository"

2. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/obscureozy/obscureozy.github.io.git
   git push -u origin main
   ```

3. Enable GitHub Pages:
   - Go to your repository settings
   - Scroll down to the "GitHub Pages" section
   - Under "Source", select "main" branch
   - Click "Save"

4. Your website will be available at `https://obscureozy.github.io`

## Local Development

To run the website locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/obscureozy/obscureozy.github.io.git
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. Visit `http://localhost:8000` in your browser

## Customization

- Edit `index.html` to update content
- Modify `styles.css` to change the appearance
- Update `script.js` to add new interactive features

## License

MIT License - feel free to use this template for your own portfolio! 