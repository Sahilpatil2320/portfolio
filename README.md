# Sahil Patil — Premium Developer Portfolio

A bespoke, dark-cinematic developer portfolio engineered for **Sahil Patil** (Java Developer | Software Developer | Computer Science & Engineering Student).

Built with React 19, TypeScript, Tailwind CSS, Lucide Icons, and modern motion interactions. Inspired by the editorial elegance and dark aesthetic of high-end creative developer portfolios.

---

## 🌟 Highlights

- **Bespoke Cinematic Aesthetic**: Deep `#080808` obsidian background, `#101010` secondary card surfaces, `#F5F2EB` warm cream typography, and subtle `#D8B45A` champagne gold accents.
- **Custom Cursor Interaction**: Champagne gold dot with an easing follower ring and interactive hover scaling (automatically disabled on touch/coarse pointers).
- **Verified Flagship Projects**:
  1. **StartupSync — AI-Powered Recommendation System** (Python, Scikit-learn, TF-IDF, React, Node.js, MongoDB)
  2. **DYPConnect — College Professional Networking Platform** (React.js, Node.js, Express, MongoDB, JWT)
  3. **E-Grampanchayat Management System** (Android, Java, XML, SQLite)
  4. **Prompt Builder Website** (Python, Flask, HTML5, CSS3, JS)
  5. **Real-Time Chat Website** (Go, WebSockets, HTML, CSS, JS)
  6. **Student Mark Analyzer** (PHP, MySQL, Chart.js, HTML, CSS)
- **Authentic Credentials & Achievements**:
  - **LeetCode**: 200+ Problems Solved & 100 Days Coding Badge
  - **CodeChef**: 500+ Programming Problems Solved
  - **Open Source**: Merged Pull Request on GitHub
  - **Academics**: B.Tech in CSE at D. Y. Patil College of Engineering & Technology, Kolhapur (CGPA: 8.02)
- **Interactive Modals & Controls**:
  - In-app **Resume Modal** with live PDF preview and download button (`SAHIL_PATIL(1).pdf`)
  - **Project Deep-Dive Modal** with implementation details and direct GitHub repository links
  - **Contact Form** with real-time field validation, transparent mailto fallback, and one-click copy with toast notifications.
  - Sticky glassmorphic navbar with active section detection and mobile drawer.
  - Floating Back-to-Top button.

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** v18+ (tested on v22)
- **npm** v9+ (or pnpm / yarn)

### 2. Run the Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build
```bash
npm run build
```
Creates optimized static assets in the `dist/` directory ready for deployment.

### 4. Preview the Production Build Locally
```bash
npm run preview
```

---

## 📁 Project Structure

```
Port/
├── public/
│   ├── images/
│   │   └── sahil-profile.png     # Genuine profile photo
│   ├── projects/                 # Project SVG illustrations and mockups
│   ├── resume/
│   │   └── Sahil_Patil.pdf
│   ├── SAHIL_PATIL(1).pdf        # Active resume download
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BackToTop.tsx         # Floating scroll to top
│   │   ├── ContactForm.tsx       # Validated form + mailto fallback
│   │   ├── CustomCursor.tsx      # Smooth champagne gold cursor
│   │   ├── Footer.tsx            # Wordmark, links & dynamic year
│   │   ├── Icons.tsx             # Custom SVGs for GitHub, LinkedIn, LeetCode, CodeChef
│   │   ├── Navbar.tsx            # Sticky header with SP monogram & mobile drawer
│   │   ├── ProjectCard.tsx       # Interactive project cards
│   │   ├── ProjectModal.tsx      # Project deep dive modal
│   │   ├── ResumeModal.tsx       # Live PDF preview & download modal
│   │   ├── SectionHeading.tsx    # Editorial section heading
│   │   ├── SkillGroup.tsx        # Categorized skill cards
│   │   └── Toast.tsx             # Toast notification system
│   ├── data/
│   │   ├── achievements.ts       # LeetCode 200+, CodeChef 500+, Open Source
│   │   ├── certifications.ts     # Cisco, Udemy, Eduskill
│   │   ├── education.ts          # DYP CET Kolhapur & Kisanrao More Junior College
│   │   ├── profile.ts            # Bio, contact, links, photo
│   │   ├── projects.ts           # 6 projects in strict priority order
│   │   └── skills.ts             # 6 categories of skills
│   ├── sections/
│   │   ├── About.tsx             # Bio, education summary, CGPA 8.02
│   │   ├── Achievements.tsx      # Problem solving & open source milestones
│   │   ├── Certifications.tsx    # Technical certifications
│   │   ├── Contact.tsx           # Contact info, copy actions & form
│   │   ├── Education.tsx         # Academic timeline
│   │   ├── Hero.tsx              # Split hero with profile photo & CTAs
│   │   ├── Projects.tsx          # Flagship trio + additional projects
│   │   └── Skills.tsx            # Capabilities categorized grid
│   ├── App.tsx                   # Main layout container
│   ├── index.css                 # Dark theme, scrollbar & utilities
│   └── main.tsx                  # Entry point
├── index.html                    # SEO tags, Syne & JetBrains Mono fonts
├── package.json
├── tailwind.config.js            # Custom color palette tokens
└── tsconfig.json
```

---

## 🌐 Deployment

The build output in `dist/` is completely static and can be deployed directly to:
- **Netlify**: Drag and drop the `dist/` folder or link to GitHub with build command `npm run build` and publish directory `dist`.
- **Vercel**: Run `vercel` or link your GitHub repo.
- **GitHub Pages**: Deploy the `dist` folder to `gh-pages` branch.
