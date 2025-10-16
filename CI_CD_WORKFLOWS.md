# CI/CD Workflows Documentation

This document explains the Continuous Integration and Continuous Deployment (CI/CD) workflows configured for this project using GitHub Actions.

## Overview

The project has two main CI/CD workflows:
1. **Build and Push Docker Image** - Builds and publishes Docker images
2. **Deploy Helm Chart** - Deploys the application using Helm to Kubernetes

## Build and Push Docker Image Workflow

### Triggers
- Push to any branch
- Push of tags starting with 'v' (e.g., v1.0.0)
- Pull requests to any branch

### Detailed Steps

1. **Checkout code**
   - Uses `actions/checkout@v3` to clone the repository
   - Makes the source code available in the runner environment
   - Required for accessing the Dockerfile and application code

2. **Set up Docker Buildx**
   - Uses `docker/setup-buildx-action@v3` to enable BuildKit
   - BuildKit provides advanced features like multi-platform builds
   - Necessary for building images for multiple architectures simultaneously

3. **Login to DockerHub**
   - Uses `docker/login-action@v3` to authenticate with Docker Hub
   - Uses stored secrets: `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN`
   - Required to push images to the Docker Hub registry

4. **Extract metadata**
   - Uses `docker/metadata-action@v5` to generate Docker tags and labels
   - Creates tags based on:
     - Branch name (e.g., `main`, `feature-branch`)
     - Semantic version from tags (e.g., `v1.0.0` becomes `1.0.0`)
     - Short commit SHA (first 7 characters)
   - Ensures consistent and meaningful image tagging

5. **Set version**
   - Extracts the first 7 characters of the commit SHA
   - Sets it as `DOCKER_IMAGE_VERSION` environment variable
   - Passed as a build argument to the Docker build process

6. **Build and push**
   - Uses `docker/build-push-action@v5` for the build process
   - Builds for multiple platforms: `linux/amd64` and `linux/arm64`
   - Uses the generated tags from the metadata step
   - Pushes the images to Docker Hub repository: `${{ secrets.DOCKERHUB_USERNAME }}/durianlab-consulting`

### Key Features
- Multi-platform support (linux/amd64, linux/arm64)
- Automatic tagging based on Git context
- Uses Docker Hub repository: `${{ secrets.DOCKERHUB_USERNAME }}/durianlab-consulting`

## Deploy Helm Chart Workflow

### Triggers
- Push to any branch
- Push of tags starting with 'v' (e.g., v1.0.0)
- Pull requests to any branch

### Detailed Steps

1. **Checkout code**
   - Uses `actions/checkout@v3` to clone the repository
   - Makes the Helm chart files available in the runner environment
   - Required for accessing the `./helm-chart` directory

2. **Set up Helm**
   - Uses `azure/setup-helm@v1` to install Helm CLI
   - Installs specific version: v3.8.1
   - Helm is required for managing Kubernetes applications

3. **Set up Kubectl**
   - Uses `azure/setup-kubectl@v1` to install kubectl CLI
   - Installs specific version: v1.23.6
   - kubectl is required for communicating with the Kubernetes cluster

4. **Install Helm chart**
   - Runs `helm upgrade --install homepage ./helm-chart`
   - `upgrade --install` creates the release if it doesn't exist, or upgrades it if it does
   - Deploys the application defined in the `homepage` chart
   - Uses the chart located in the `./helm-chart` directory

### Key Features
- Automated deployment to Kubernetes cluster
- Uses Helm upgrade --install for idempotent deployments
- Deploys the application defined in the helm-chart directory

## Environment Requirements

### Secrets Required
- `DOCKERHUB_USERNAME` - Docker Hub username
- `DOCKERHUB_TOKEN` - Docker Hub access token

### Infrastructure Requirements
- Kubernetes cluster with kubectl access configured
- Docker Hub account for image storage

## Workflow Files
- `.github/workflows/build-docker.yml` - Docker build and push workflow
- `.github/workflows/deploy-helm.yml` - Helm deployment workflow