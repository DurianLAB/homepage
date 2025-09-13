# DurianLAB Consulting

[![Build Status](https://github.com/DurianLAB/homepage/actions/workflows/build-docker.yml/badge.svg)](https://github.com/DurianLAB/homepage/actions/workflows/build-docker.yml)
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

### Deployment with Helm

```bash
helm install durianlab-frontend ./helm-chart
```

## Built With

- [Nginx](https://nginx.org/) - Web server
- [Docker](https://www.docker.com/) - Containerization
- [Kubernetes](https://kubernetes.io/) - Container orchestration
- [Helm](https://helm.sh/) - Kubernetes package manager

## License

This project is licensed under the MIT License.
