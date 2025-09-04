# Pushing Helm Chart to a Helm Repository

This guide explains how to package and push your Helm chart to a Helm repository.

## Prerequisites

1. Helm CLI installed
2. Access to a Helm repository (e.g., Harbor, ChartMuseum, AWS ECR, etc.)
3. Proper authentication credentials for the repository

## Steps to Package and Push

1. **Package the Helm chart**:
   ```bash
   helm package helm-chart
   ```
   This creates a `.tgz` file in the current directory.

2. **Login to your Helm repository** (if required):
   ```bash
   helm registry login REGISTRY_URL -u USERNAME -p PASSWORD
   ```
   Replace `REGISTRY_URL`, `USERNAME`, and `PASSWORD` with your repository details.

3. **Push the chart to the repository**:
   
   For OCI-based registries (like Harbor, AWS ECR):
   ```bash
   helm push durianlab-frontend-0.1.0.tgz oci://REGISTRY_URL/REPOSITORY_NAME
   ```
   
   For ChartMuseum-based repositories:
   ```bash
   curl --data-binary "@durianlab-frontend-0.1.0.tgz" http://CHARTMUSEUM_URL/api/charts
   ```

4. **Verify the upload**:
   ```bash
   helm search repo REPOSITORY_NAME
   ```

## Alternative: Using ChartMuseum

If you're using ChartMuseum:

1. Install ChartMuseum client (cm):
   ```bash
   curl https://chartmuseum.build.cd.jenkins-x.io/get | bash
   ```

2. Set environment variables:
   ```bash
   export CHART_RELEASER_TOKEN="your-token"
   export CHART_RELEASER_OWNER="your-github-username"
   export CHART_RELEASER_GIT_REPO="your-repo-name"
   ```

3. Upload chart:
   ```bash
   cm upload --commit charts/durianlab-frontend-0.1.0.tgz
   ```

## GitHub Pages as Helm Repository

You can also host your Helm charts on GitHub Pages:

1. Create a `gh-pages` branch in your repository
2. Package your chart:
   ```bash
   helm package helm-chart
   ```
3. Create index file:
   ```bash
   helm repo index . --url https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME
   ```
4. Push the packaged chart and index.yaml to the `gh-pages` branch