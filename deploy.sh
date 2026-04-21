#!/bin/bash

# Portfolio Site Deployment Script
# This script builds and deploys the React portfolio site to GitHub Pages

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
print_status "Checking prerequisites..."

if ! command_exists node; then
    print_error "Node.js is not installed. Please install Node.js and try again."
    exit 1
fi

if ! command_exists npm; then
    print_error "npm is not installed. Please install npm and try again."
    exit 1
fi

if ! command_exists git; then
    print_error "Git is not installed. Please install Git and try again."
    exit 1
fi

print_success "All prerequisites are met."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root directory."
    exit 1
fi

# Check if this is the correct project
if ! grep -q "portfolio" package.json; then
    print_warning "This doesn't appear to be the portfolio project. Continuing anyway..."
fi

# Check git status
print_status "Checking git status..."
if [ -n "$(git status --porcelain)" ]; then
    print_warning "You have uncommitted changes. Consider committing them before deploying."
    read -p "Do you want to continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_status "Deployment cancelled."
        exit 0
    fi
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
    print_success "Dependencies installed."
else
    print_status "Dependencies already installed."
fi

# Run linting (optional, but recommended)
print_status "Running linter..."
if npm run lint; then
    print_success "Linting passed."
else
    print_warning "Linting failed. Consider fixing issues before deploying."
    read -p "Do you want to continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_status "Deployment cancelled."
        exit 0
    fi
fi

# Build the project
print_status "Building the project..."
if npm run build; then
    print_success "Build completed successfully."
else
    print_error "Build failed. Please fix the errors and try again."
    exit 1
fi

# Deploy to GitHub Pages
print_status "Deploying to GitHub Pages..."
if npm run deploy; then
    print_success "Deployment completed successfully!"
    print_status "Your site should be available at: https://shlee242.github.io/portfolio"
    print_status "Note: It may take a few minutes for changes to appear on GitHub Pages."
else
    print_error "Deployment failed. Please check the error messages above."
    exit 1
fi

# Clean up build directory (optional)
read -p "Do you want to clean up the build directory? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    rm -rf build
    print_success "Build directory cleaned up."
fi

print_success "Deployment process completed!"
