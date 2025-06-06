# My Humble Corner of the Web

A simple, dark-themed personal website I built to share my journey and connect with fellow tech enthusiasts. Nothing fancy, just a clean space to showcase my experience and interests.

## What's Inside

- A clean, dark theme that's easy on the eyes
- Simple animations that don't get in the way
- Mobile-friendly layout (because we all browse on our phones)
- Just the essentials: my story, skills, and ways to connect

## Want to Host Your Own?

Here's how I set this up on GitHub Pages:

1. Create a new repository named `yourusername.github.io`
   - Head to GitHub.com
   - Click the "+" in the top right
   - Choose "New repository"
   - Name it exactly as `yourusername.github.io`
   - Make it public
   - Hit "Create repository"

2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "First version"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. Turn on GitHub Pages:
   - Go to your repository settings
   - Find "GitHub Pages" section
   - Select "main" branch
   - Click "Save"

4. Your site will be live at `https://yourusername.github.io`

## Running Locally

If you want to check it out on your machine:

1. Clone it:
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   ```

2. Open it up:
   ```bash
   # Python way
   python -m http.server 8000
   
   # Or Node way
   npx serve
   ```

3. Visit `http://localhost:8000`

## Making It Yours

Feel free to:
- Edit `index.html` to tell your story
- Tweak `styles.css` to match your style
- Add your own touches in `script.js`

## License

MIT License - take it, use it, make it your own! Just remember to be kind and credit where it's due. 