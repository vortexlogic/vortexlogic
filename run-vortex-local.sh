#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Free port 3000 if occupied by a stale development server, Docker container, or other process
echo "🛡️ Ensuring port 3000 is free..."
# 1. Kill host process listening on 3000
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️ Port 3000 is in use on host. Terminating process..."
    lsof -ti :3000 | xargs kill -9 2>/dev/null || true
fi

# 2. Stop any Docker container mapping port 3000
DOCKER_CONTAINER_ID=$(docker ps -q --filter publish=3000)
if [ -n "$DOCKER_CONTAINER_ID" ]; then
    echo "⚠️ Port 3000 is bound by a Docker container (possibly OpenWebUI). Stopping container..."
    docker stop "$DOCKER_CONTAINER_ID" 2>/dev/null || true
fi

# 3. Fallback check using fuser
if command -v fuser &> /dev/null; then
    fuser -k 3000/tcp &>/dev/null || true
fi
sleep 1

echo "🚀 Starting VortexLogic backend services (PostgreSQL, Redis, SearXNG) via Docker..."
docker compose up -d postgres redis searxng

echo "⏳ Waiting for PostgreSQL database to be ready and healthy..."
# Loop until the pg_isready command inside the postgres container succeeds
until docker compose exec postgres pg_isready -U morphic &>/dev/null; do
    printf "."
    sleep 1
done
echo ""
echo "✅ Database is ready and accepting connections!"

# Check if bun is installed on the host
if command -v bun &> /dev/null; then
    echo "📦 Detected 'bun'. Running database migrations..."
    bun run migrate
    echo "🔥 Starting Next.js Turbopack development server..."
    bun dev
else
    echo "📦 'bun' not detected. Running database migrations with npm..."
    npm run migrate
    echo "🔥 Starting Next.js development server with npm..."
    npm run dev
fi
