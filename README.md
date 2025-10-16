# homepage

# DurianLAB Consulting

[![Build Status](https://github.com/DurianLAB/homepage/actions/workflows/build-docker.yml/badge.svg)](https://github.com/DurianLAB/homepage/actions/workflows/build-docker.yml)
[![Docker Pulls](https://img.shields.io/docker/pulls/phamduchongan93/homepage/homepage?logo=docker&logoColor=white)](https://hub.docker.com/r/phamduchongan93/homepage/homepage)
[![Helm Chart](https://img.shields.io/badge/Helm-Chart%20Available-blue?logo=helm&logoColor=white)](./helm-chart)

This repository contains the frontend for DurianLAB Consulting website.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

- Docker
- Kubernetes (for deployment)
- Helm (for deployment)

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

```bash
helm install durianlab-frontend ./helm-chart
```

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

- [Nginx](https://nginx.org/) - Web server
- [Docker](https://www.docker.com/) - Containerization
- [Kubernetes](https://kubernetes.io/) - Container orchestration
- [Helm](https://helm.sh/) - Kubernetes package manager

## License

This project is licensed under the MIT License.
