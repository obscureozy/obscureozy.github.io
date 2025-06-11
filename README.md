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
   - Your site will be live at https://yourusername.github.io

## Running Locally

If you want to check it out on your machine:

1. Clone it:
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will automatically reload if you make changes to the code.

## Making It Yours

Feel free to:
- Edit `src/App.tsx` to tell your story
- Customize styles in `src/components/` using Emotion
- Add new components in `src/components/`
- Modify animations in `src/components/ScrollAnimation.tsx` and `src/components/CustomCursor.tsx`

## Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## License

MIT License - take it, use it, make it your own! Just remember to be kind and credit where it's due.
