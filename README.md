# Star Wars API Data Display 🚀

A React application that fetches and displays data from the [Star Wars API (SWAPI)](https://swapi.dev/), letting users explore characters, planets, starships, and more from the Star Wars universe.

**[Live Demo →](https://timmyd4.github.io/API-Data-Display/)**

---

## Features

- Fetches live data from the public Star Wars API (SWAPI)
- Browse characters, planets, starships, vehicles, and films
- Clean, responsive UI built with React and CSS
- Fast development and build pipeline powered by Vite

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based UI |
| Vite | Build tool & dev server |
| SWAPI | Star Wars data source |
| GitHub Pages | Deployment |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/timmyd4/API-Data-Display.git
cd API-Data-Display

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

## Project Structure

```
API-Data-Display/
├── Components/       # React components
├── src/              # Source files
├── public/           # Static assets
├── index.html        # HTML entry point
├── index.jsx         # React root
└── vite.config.js    # Vite configuration
```

## Deployment

This project is deployed via GitHub Pages. To redeploy:

```bash
npm run build
npm run deploy
```

## What I Learned

- Consuming a public REST API with React and the Fetch API
- Managing asynchronous data and loading states with `useEffect` and `useState`
- Building and deploying a React app to GitHub Pages with Vite
- Structuring a component-based frontend project

## Author

**Timothy** — [GitHub](https://github.com/timmyd4)

---

*Built with React + Vite. Data provided by [SWAPI](https://swapi.dev/).*
