#!/bin/bash
# Install dependencies for all workspaces
set -e
npm install --workspaces --include-workspace-root
