#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "🛑 Stopping VortexLogic local development environment..."

# 1. Stop Next.js host processes running on port 3000
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo "🔌 Terminating Next.js development server running on port 3000..."
    lsof -ti :3000 | xargs kill -9 2>/dev/null || true
else
    echo "💡 No dev server process detected on port 3000."
fi

# 2. Shut down Docker Compose services
echo "🐳 Stopping Docker containers (PostgreSQL, Redis, SearXNG)..."
docker compose down

echo "✅ VortexLogic local environment has been stopped successfully."
