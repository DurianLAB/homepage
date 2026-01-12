# Makefile for DurianLAB Homepage React Application
# Automates common development and testing tasks

.PHONY: help install start build test clean docker-build docker-tag docker-push docker-run docker-clean lint format audit

# Docker repository configuration
DOCKER_REPO ?= phamduchongan93/durianlab-consulting
VERSION = $(shell node -p "require('./package.json').version")

# Default target
help: ## Show this help message
	@echo "DurianLAB Homepage - React Application Makefile"
	@echo ""
	@echo "Available targets:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-20s %s\n", $$1, $$2}'
	@echo ""
	@echo "Quick aliases: i=install, s=start, b=build, t=test, c=clean"

install: ## Install npm dependencies
	@echo "Installing npm dependencies..."
	@if [ -f package-lock.json ]; then \
		echo "Found package-lock.json, using npm ci for reliable install..."; \
		NODE_OPTIONS="--max-old-space-size=4096" npm ci --legacy-peer-deps || { \
			echo "npm ci failed, clearing cache and retrying..."; \
			npm cache clean --force; \
			NODE_OPTIONS="--max-old-space-size=4096" npm ci --legacy-peer-deps; \
		}; \
	else \
		echo "No package-lock.json found, using npm install..."; \
		NODE_OPTIONS="--max-old-space-size=4096" npm install --legacy-peer-deps || { \
			echo "npm install failed, clearing cache and retrying..."; \
			npm cache clean --force; \
			NODE_OPTIONS="--max-old-space-size=4096" npm install --legacy-peer-deps; \
		}; \
	fi

start: ## Start the development server
	@echo "Starting React development server..."
	npm start

build: ## Build the application for production
	@echo "Building application for production..."
	npm run build

test: ## Run tests
	@echo "Running tests..."
	npm test -- --watchAll=false --passWithNoTests

test-watch: ## Run tests in watch mode
	@echo "Running tests in watch mode..."
	npm test

audit: ## Run npm audit
	@echo "Running npm audit..."
	npm audit

lint: ## Run ESLint (if configured)
	@echo "Running ESLint..."
	npx eslint src --ext .js,.jsx,.ts,.tsx

format: ## Format code with Prettier (if configured)
	@echo "Formatting code..."
	npx prettier --write src/**/*.{js,jsx,ts,tsx,css,md}

clean: ## Clean build artifacts and node_modules
	@echo "Cleaning build artifacts and dependencies..."
	rm -rf build

clean-deps: ## Clean node_modules and package locks
	@echo "Cleaning dependencies..."
	rm -rf node_modules package-lock.json
	@echo "Clearing npm cache..."
	npm cache clean --force

clean-all: ## Clean everything including npm cache
	@echo "Cleaning all artifacts and cache..."
	rm -rf build node_modules package-lock.json .npm
	npm cache clean --force

clean-build: ## Clean only build artifacts
	@echo "Cleaning build artifacts..."
	rm -rf build

docker-build: ## Build Docker image
	@echo "Building Docker image..."
	docker build --build-arg VERSION=$(VERSION) -t durianlab-homepage .

docker-tag: ## Tag Docker image for Docker Hub
	@echo "Tagging Docker image for $(DOCKER_REPO)..."
	docker tag durianlab-homepage $(DOCKER_REPO):$(VERSION)

docker-push: ## Push Docker image to Docker Hub
	@echo "Pushing Docker image to Docker Hub..."
	docker push $(DOCKER_REPO):$(VERSION)

docker-run: ## Run Docker container
	@echo "Running Docker container..."
	docker run -p 8080:80 durianlab-homepage

docker-deploy: ## Build, tag, and push Docker image to Docker Hub
	@echo "Building, tagging, and pushing Docker image..."
	$(MAKE) docker-build
	$(MAKE) docker-tag
	$(MAKE) docker-push

docker-clean: ## Remove Docker images and containers
	@echo "Cleaning Docker images and containers..."
	docker stop $$(docker ps -q --filter ancestor=durianlab-homepage) 2>/dev/null || true
	docker rm $$(docker ps -a -q --filter ancestor=durianlab-homepage) 2>/dev/null || true
	docker rmi durianlab-homepage $(DOCKER_REPO):$(VERSION) 2>/dev/null || true

setup: ## Initial setup - install dependencies and build
	@echo "Setting up the project..."
	$(MAKE) install
	$(MAKE) build

dev: ## Start development environment
	@echo "Starting development environment..."
	$(MAKE) install
	$(MAKE) start

dev-clean: ## Start development environment with fresh install
	@echo "Starting development environment with clean install..."
	$(MAKE) clean-deps
	$(MAKE) install
	$(MAKE) start

deploy: ## Build and deploy (for production)
	@echo "Building for production deployment..."
	$(MAKE) build
	@echo "Build complete. Ready for deployment."

check: ## Run all checks (lint, test, build)
	@echo "Running all checks..."
	$(MAKE) lint || echo "Linting failed, continuing..."
	$(MAKE) test
	$(MAKE) build

# Development workflow targets
dev-full: ## Full development setup (install, lint, test, start)
	@echo "Setting up full development environment..."
	$(MAKE) install
	$(MAKE) lint || echo "Linting issues found, continuing..."
	$(MAKE) test
	$(MAKE) start

# CI/CD simulation
ci: ## Simulate CI pipeline (install, lint, test, build)
	@echo "Running CI pipeline..."
	$(MAKE) install
	$(MAKE) lint
	$(MAKE) test
	$(MAKE) build
	@echo "CI pipeline completed successfully!"

# NPM troubleshooting targets
npm-fix: ## Fix common npm issues
	@echo "Fixing npm issues..."
	$(MAKE) clean-deps
	@echo "Setting npm configurations..."
	npm config set fund false
	npm config set audit false
	npm config set legacy-peer-deps true
	$(MAKE) install

npm-doctor: ## Run npm doctor to diagnose issues
	@echo "Running npm doctor..."
	npm doctor

npm-reset: ## Complete npm reset (dangerous, use as last resort)
	@echo "Performing complete npm reset..."
	$(MAKE) clean-all
	@echo "Removing npm config..."
	rm -rf ~/.npm ~/.npmrc
	@echo "Please reinstall Node.js/npm if issues persist"

# Quick development targets
i: install ## Alias for install
s: start ## Alias for start
b: build ## Alias for build
t: test ## Alias for test
c: clean ## Alias for clean
cd: clean-deps ## Alias for clean-deps
cf: clean-all ## Alias for clean-all
dc: dev-clean ## Alias for dev-clean
nf: npm-fix ## Alias for npm-fix
