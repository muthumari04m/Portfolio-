# Muthumari M — Portfolio

React + Vite + Tailwind CSS 3 + Framer Motion + Lucide icons.

## 1. Prerequisites
- **Node.js 18 or newer** (includes npm). Download the LTS version from https://nodejs.org and run the installer. Check with `node -v`.
- **VS Code** from https://code.visualstudio.com

## 2. Open and run
1. Unzip the project. In VS Code choose **File > Open Folder** and select the `portfolio` folder.
2. Open the terminal (**Terminal > New Terminal**) and run:
```bash
npm install
npm run dev
```
3. Open the address shown (usually http://localhost:5173).

## 3. Replace your resume
Put your PDF at `public/resume.pdf` (same name, overwrite the old file). The Download Resume button uses `/resume.pdf`. To use a different name, change `resumePath` in `src/data/siteConfig.js`.

## 4. Add GitHub and LinkedIn
Open `src/data/siteConfig.js` and replace `GITHUB_URL_HERE` and `LINKEDIN_URL_HERE` with your full URLs (starting with `https://`). Until you do, those links are hidden automatically. To show or hide your phone number, change `showPhone`.

## 5. Edit projects and screenshots
- All text is in `src/data/content.js`.
- Replace `GITHUB_PROJECT_URL_HERE` / `DEMO_URL_HERE` in each project with real URLs. Buttons appear only for valid `https://` links.
- For a screenshot: save it in `src/assets/` (e.g. `dronex.png`), add `import dronex from "../assets/dronex.png";` at the top of `content.js`, then set `image: dronex` for that project.
- Keep the DroneX note about simulated Remote ID data unless you implement live verification.
- Journal article status is "Submitted". Change it only after publication.

## 6. Deploy on Vercel
1. Push the project to a GitHub repository (do not upload `node_modules`).
2. Sign in at https://vercel.com with GitHub, click **Add New > Project** and import the repository.
3. Vercel detects Vite automatically (Build command `npm run build`, Output directory `dist`). Click **Deploy**.
4. Each later `git push` redeploys the site.

## Structure
```
portfolio/
  public/        resume.pdf, favicon.svg
  src/
    assets/      screenshots
    components/  Navbar, Hero, About, Experience, Projects, ProjectCard, Skills,
                 Certifications, Achievements, Leadership, Languages, Contact, Footer, Section
    data/        siteConfig.js (links), content.js (all text)
    App.jsx  main.jsx  index.css
  index.html  package.json  tailwind.config.js  postcss.config.js  vite.config.js
```
