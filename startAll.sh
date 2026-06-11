#!/bin/bash

# Define absolute paths to prevent navigation bugs
PROJECT_ROOT="/home/abdessamad/Desktop/DomainMailer"
FRONT_DIR="$PROJECT_ROOT/front"
API_DIR="$PROJECT_ROOT/api"

# 1. Start Frontend
cd "$FRONT_DIR" && nohup npm run dev < /dev/null > "$PROJECT_ROOT/front.log" 2>&1 &

# 2. Start API
cd "$API_DIR" && nohup npm run dev < /dev/null > "$PROJECT_ROOT/api.log" 2>&1 &

# 3. Start Worker
cd "$API_DIR" && nohup npm run worker < /dev/null > "$PROJECT_ROOT/worker.log" 2>&1 &

# Wait for servers to spin up
sleep 2

# Tunnels (saving logs cleanly into the project root)
nohup ssh -o ServerAliveInterval=30 -R 80:127.0.0.1:3000 nokey@localhost.run > "$PROJECT_ROOT/tunnel_front.log" 2>&1 &
nohup ssh -o ServerAliveInterval=30 -R 80:127.0.0.1:8000 nokey@localhost.run > "$PROJECT_ROOT/tunnel_api.log" 2>&1 &

echo "All processes started successfully in the background!"