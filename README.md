# Sanchit Sharma — Portfolio (React + Tailwind + Vite)

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

## File Structure

```
portfolio/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── public/
│   └── files/              ← Drop your assets here
│       ├── Sanchit.jpg     ← Your profile photo
│       ├── res3.pdf        ← Your resume
│       ├── dra-report.pdf  ← DRA project report
│       └── 12.pdf          ← IoT project report
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── Particles.jsx
        ├── Hero.jsx
        ├── Projects.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Interests.jsx
        ├── Education.jsx
        ├── Certifications.jsx   ← Add your certs here
        ├── Leadership.jsx       ← Add your leadership roles here
        ├── Contact.jsx
        ├── Footer.jsx
        ├── Divider.jsx
        └── SectionHeader.jsx
```

## Adding Certifications

Open `src/components/Certifications.jsx` and uncomment/add to the `certifications` array:

```js
{
  name: 'Your Certification Name',
  issuer: 'Issuing Organization',
  date: 'Month Year',
  credentialId: 'XXXXXXXX',   // optional
  link: 'https://...',
  icon: '🏆',
}
```

## Adding Leadership Roles

Open `src/components/Leadership.jsx` and add to the `leadership` array:

```js
{
  role: 'Role / Position',
  org: 'Organization / Club',
  period: 'Month Year – Month Year',
  points: [
    'What you did and the impact.',
    'Another key responsibility.',
  ],
  icon: '👥',
}
```

## Adding a New Project

Open `src/components/Projects.jsx` and add to the `projects` array following the existing object structure.

## Customising Your Email

Search for `sanchitsharma9654@gmail.com` in `Hero.jsx` and `Contact.jsx` and replace with your actual email.
