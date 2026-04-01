# Aakash Sinha — Portfolio

A clean, modern React portfolio with light/dark theme toggle.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Customize

All portfolio data lives in **one file**: `src/constants.js`

| What to change | Where |
|---|---|
| Name, title, email, phone, LinkedIn, location, about | `PERSON` object |
| Work experience & bullet points | `EXPERIENCE` array |
| Client projects (ABG, CFS, etc.) | `CLIENT_PROJECTS` array |
| Technical projects | `TECHNICAL_PROJECTS` array |
| Skills categories & items | `SKILLS` array |
| Education | `EDUCATION` array |
| Nav links | `NAV_LINKS` array |

To use someone else's photos, replace the image files in `src/images.js`
(or re-run the base64 encoding script with new images).

## 🌗 Theme

- Default: **Dark** mode
- Toggle in top-right navbar button
- Colours defined via CSS variables in `App.css`

## 📁 File Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx        # React entry
    ├── App.jsx         # All components
    ├── App.css         # All styles + themes
    ├── constants.js    # ← EDIT THIS for content
    └── images.js       # Base64 encoded images
```
