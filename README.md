# Pintu Yadav – Portfolio

React + Vite + Tailwind CSS + Framer Motion + Lucide.

## Run
    npm install
    npm run dev      # local dev
    npm run build    # production build in /dist

## Update your content
Everything lives in `src/data.js`:
- Fill `email`, `github`, `linkedin` (empty values are hidden, never fake).
- Put your resume at `public/resume.pdf` and photo at `public/profile.jpg` (then set `image: "/profile.jpg"`).
- Add projects, certifications and achievements by adding objects to the arrays.

## Deploy
Push to GitHub and import into Vercel or Netlify (build: `npm run build`, output: `dist`).
