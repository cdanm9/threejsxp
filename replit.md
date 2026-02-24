# Three.js Starter Project

## Overview
A Three.js learning/experimentation project based on discoverthreejs.com tutorials. Uses Vite as the dev server and build tool.

## Project Architecture
- **Location**: `threejsxp/threestart/`
- **Entry point**: `index.html` loads `src/beginner2.js`
- **Build tool**: Vite
- **Main dependency**: Three.js (v0.132.0)

### Directory Structure
```
threejsxp/threestart/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── beginner.js
│   ├── beginner2.js
│   ├── main.js
│   ├── master.js
│   └── World/
│       ├── World.js
│       ├── components/ (camera, cube, lights, scene)
│       └── systems/ (Resizer, renderer)
└── styles/
    └── main.css
```

## Running
- Dev server: `cd threejsxp/threestart && npm run dev` (port 5000)
- Deployment: Static build via `npx vite build`, serves from `dist/`

## Recent Changes
- 2026-02-24: Initial Replit setup - added Vite config, dev script, deployment config
