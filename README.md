# homepage

# DurianLAB Consulting

[![Build Status](https://github.com/DurianLAB/homepage/actions/workflows/build-docker.yml/badge.svg)](https://github.com/DurianLAB/homepage/actions/workflows/build-docker.yml)
[![Docker Pulls](https://img.shields.io/docker/pulls/phamduchongan93/durianlab-consulting.svg)](https://hub.docker.com/r/phamduchongan93/durianlab-consulting)
[![Helm Chart](https://img.shields.io/badge/Helm-Chart%20Available-blue?logo=helm&logoColor=white)](./helm-chart)

This repository contains the frontend for DurianLAB Consulting website.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Docker (for containerized deployment)
- Kubernetes (for deployment)
- Helm (for deployment)

### Development with React

#### Quick Start with Makefile

```bash
# Show all available commands
make help

# Initial setup (install + build)
make setup

# Start development server
make start

# Run full development workflow (install, lint, test, start)
make dev-full

# Run all checks (lint, test, build)
make check
```

#### Manual Commands

1. Install dependencies:
```bash
npm install
# or
make install
```

2. Start the development server:
```bash
npm start
# or
make start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

4. Build for production:
```bash
npm run build
# or
make build
```

#### Available Makefile Targets

| Target | Description |
|--------|-------------|
| `make help` | Show all available targets |
| `make install` | Install npm dependencies |
| `make start` | Start development server |
| `make build` | Build for production |
| `make test` | Run tests |
| `make lint` | Run ESLint |
| `make clean` | Clean build artifacts |
| `make setup` | Initial setup (install + build) |
| `make dev` | Start development environment |
| `make check` | Run all checks (lint, test, build) |
| `make ci` | Simulate CI pipeline |
| `make docker-build` | Build Docker image |
| `make docker-run` | Run Docker container |

**Short aliases:** `make i` (install), `make s` (start), `make b` (build), `make t` (test), `make c` (clean)

### Building the Docker Image

### Building the Docker Image

```bash
docker build -t durianlab/frontend .
```

### Running the Application

```bash
docker run -p 8080:80 durianlab/frontend
```

### Quickly Test with Python HTTP Module

```bash
python3 -m http.server 8000
```
Then open your browser to `http://localhost:8000`

### Deployment with Helm

To deploy the application using Helm, you can use the following command:

```bash
helm install durianlab-frontend ./helm-chart
```

To deploy a specific Docker image tag (e.g., from a `dev` branch build), you can override the `image.tag` value:

```bash
helm upgrade --install durianlab-frontend ./helm-chart --set image.tag=dev
```

This allows you to easily switch between different versions or environments.

### Deployment with Skaffold

Skaffold automates the development workflow for Kubernetes applications. It builds, pushes, and deploys your application to Kubernetes.

```bash
skaffold dev
```

This command will:
1. Build the Docker image `durianlab/frontend`.
2. Deploy the application to your Kubernetes cluster using the Helm chart in `./helm-chart`.
3. Watch for changes in your local files and automatically rebuild and redeploy.

For a one-time build and deploy, use `skaffold run`.

## Built With

- [React](https://reactjs.org/) - Frontend framework
- [Nginx](https://nginx.org/) - Web server (for production builds)
- [Docker](https://www.docker.com/) - Containerization
- [Kubernetes](https://kubernetes.io/) - Container orchestration
- [Helm](https://helm.sh/) - Kubernetes package manager

## License

This project is licensed under the MIT License.
