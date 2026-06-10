<div align="center">

# VortexLogic 🎬✨

### The Premium AI Creative Studio for Cinematic Video & Image Generation.

A next-generation creative engine featuring an immersive landing page, subscription pricing, and an interactive studio dashboard for rendering high-fidelity animations, 3D camera tracks, and character-consistent frames.

[![GitHub stars](https://img.shields.io/badge/VortexLogic-Studio-violet.svg?style=flat&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyCAYAAAAnWDnq...)](#)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

<br />

[Explore Studio](/studio) • [View Pricing](/pricing) • [Launch AI Search](/search-engine)

</div>

---

## 🚀 Key Features

VortexLogic revamps the open-source Morphic stack into a full-scale AI video/art creation hub:

- **AI Creative Studio**: Prompt-to-Image and Prompt-to-Video generation using Fal.ai (Flux Schnell / Luma Dream Machine), Replicate, or a free zero-config fallback to Pollinations.ai.
- **Frames-to-Video**: Input any active generation or upload still frames to animate into fluid, realistic cinematic shots.
- **3D Motion Engine**: Add dynamic camera pan, zoom, and orbital paths to static compositions.
- **Character Consistency**: Preserve facial profiles, clothing layouts, and styles across multiple generated scenes.
- **Revamped UI / UX**: Immersive dark theme marketing page, interactive plans table, and multi-panel studio workspace.
- **Underlying AI Search**: The original Morphic AI search engine remains fully accessible at `/search-engine`.
- **Docker-Backed Cache & History**: Local PostgreSQL and Redis cache support to persist your creative canvas items and project logs.

---

## 🛠️ Tech Stack

- **Core**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS & shadcn/ui components (fully revamped for a dark neon look)
- **AI Integrations**: Vercel AI SDK, Fal.ai API, Replicate API, Pollinations.ai
- **Database / Cache**: PostgreSQL via Drizzle ORM, Redis for session history
- **Containerization**: Docker & Docker Compose

---

## ⚙️ Installation & Local Development

### 1. Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (or [Bun](https://bun.sh/) for ultra-fast runtimes)
- [Docker & Docker Compose](https://www.docker.com/)

### 2. Configure Environment Variables

Clone the repository and copy the example environment configuration:

```bash
git clone https://github.com/vortexlogic/vortexlogic.git
cd vortexlogic
cp .env.local.example .env.local
```

Edit `.env.local` and define the required keys:

```env
OPENAI_API_KEY=your_openai_api_key
DATABASE_URL=postgresql://morphic:morphic@localhost:5432/morphic
LOCAL_REDIS_URL=redis://localhost:6379
ENABLE_AUTH=false
```

_(Optionally define `FAL_KEY` or `REPLICATE_API_TOKEN` to unlock Luma / Flux API models inside the studio. Otherwise, the app falls back to Pollinations.ai free model automatically)._

### 3. Spin up Backend Services

VortexLogic relies on local PostgreSQL and Redis. Start them instantly using Docker:

```bash
docker compose up -d postgres redis searxng
```

### 4. Run Migrations & Start Development

Apply Drizzle schema migrations to your local DB and start the Next.js development server:

```bash
# If using Bun
bun run migrate
bun dev

# If using NPM
npm run migrate # Runs the TS migration script
npm run dev
```

Visit **[http://localhost:3000](http://localhost:3000)** to launch VortexLogic.

---

## 📜 Contributing & License

VortexLogic welcomes contributors from opendev-labs and the open-source community.

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.
