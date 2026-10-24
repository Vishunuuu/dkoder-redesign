# Dkoder Redesign (v3)

A redesign of the Dkoder website (dkoder.co.in), the placement LMS for engineering colleges.
Built solo for the Dkoder Hackathon.

**Live demo:** add your Vercel link here
**Repository:** add your GitHub link here

## Design

- Dkoder brand colors: yellow and black, with the Dkoder logo (graduation cap and code D) redrawn as SVG
- Animated circuit-style background (drifting outlined squares, twinkling dots, light beam, mouse spotlight) drawn on a canvas
- Tagline and motto: Real Skills. Real Projects. A Brighter Future. / Learn, Build, Grow

## Features

- Sections: Hero, Company marquee, Stats, Features, Practice Lab, Exam Prep, Pricing, FAQ, Contact
- Practice lab: company filter, search, salary slider, animated list and a demo code runner with confetti
- Animations: intro loader, word-by-word headline, typewriter, 3D tilt card, magnetic buttons, spotlight hover cards, count-up numbers, scroll progress bar, scroll reveals, rotating border, animated FAQ
- Navbar with active section highlight, mobile menu, back-to-top button
- Contact form with validation (frontend only)
- Responsive for mobile, tablet and desktop; respects reduced-motion settings

## Tech stack

React 18, Vite, Tailwind CSS 3, Framer Motion, Lucide React

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Folder structure

```
src/
  components/   UI sections and reusable effects (SpotlightCard, TiltCard, MagneticButton, ...)
  data/         All text and demo data in content.js
  App.jsx       Page layout
  index.css     Global styles
```

## Notes

All code was written during the hackathon. Questions in the practice lab are demo data.
The code runner is a demo and does not execute real code.
