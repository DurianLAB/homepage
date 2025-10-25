# TLS Configuration in Helm Chart

This document outlines the process for configuring TLS (HTTPS) for the application deployed via this Helm chart, utilizing `cert-manager` and Let's Encrypt.

## Overview

TLS is enabled using `cert-manager` to automatically provision and manage SSL/TLS certificates from Let's Encrypt. The process involves:

1.  **ClusterIssuer**: Defining a ClusterIssuer resource that tells `cert-manager` how to obtain certificates from Let's Encrypt.
2.  **Certificate**: Defining a Certificate resource that specifies the desired domain names and references the ClusterIssuer.
3.  **Ingress**: Configuring the Ingress resource to use the provisioned certificate for HTTPS traffic.

## Files Involved

*   `letsencrypt-prod-clusterissuer.yaml`: Defines the `ClusterIssuer` resource for Let's Encrypt production environment.
*   `templates/certificate.yaml`: Defines the `Certificate` resource, which requests a certificate for the specified domain(s) using the `ClusterIssuer`.
*   `values.yaml`: Configures the `cert-manager` integration, including the `issuerName` used by `certificate.yaml` and the domain names for the Ingress and Certificate.

## Configuration Steps

### 1. ClusterIssuer (`letsencrypt-prod-clusterissuer.yaml`)

This file defines a `ClusterIssuer` named `letsencrypt-prod`. It uses the ACME protocol to communicate with Let's Encrypt and specifies an email address for important notifications (e.g., certificate expiry).

```yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    email: your-email@example.com # <--- IMPORTANT: Replace with your actual email
    server: https://acme-v02.api.letsencrypt.org/directory
    privateKeySecretRef:
      name: letsencrypt-prod-private-key
    solvers:
      - http01:
          ingress:
            class: nginx
```

**Important**: Before applying, ensure you replace `your-email@example.com` with a valid email address.

### 2. Certificate (`templates/certificate.yaml`)

This template generates a `Certificate` resource. It dynamically sets the certificate name, namespace, DNS names, and references the `ClusterIssuer` based on values provided in `values.yaml`.

```yaml
{{- if .Values.certManager.issuerName }}
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: {{ include "durianlab-frontend.fullname" . }}-tls
  namespace: {{ .Release.Namespace }}
spec:
  secretName: durianlab.tech-tls
  dnsNames:
{{- range .Values.ingress.hosts }}
  - {{ .host }}
{{- end }}
  issuerRef:
    name: {{ .Values.certManager.issuerName }}
    kind: ClusterIssuer
{{- end }}
```

This certificate will request a TLS certificate for the `dnsNames` specified in `values.yaml` and store the resulting TLS secret in `durianlab.tech-tls`.

### 3. Values Configuration (`values.yaml`)

The `values.yaml` file is crucial for configuring the TLS setup:

*   **`certManager.issuerName`**: This value (e.g., `letsencrypt-prod`) must match the `name` of your `ClusterIssuer`.
*   **`ingress.hosts`**: This list defines the domain names for which the certificate will be issued and which the Ingress will serve.
*   **`ingress.tls`**: This section configures the Ingress to use the generated TLS secret.

```yaml
# ... other values ...

ingress:
  enabled: true
  className: "nginx"
  # ... other ingress settings ...
  hosts:
    - host: durianlab.tech # <--- Your domain name
      paths:
        - path: /
          pathType: Prefix
  tls:
    - hosts:
        - durianlab.tech # <--- Your domain name
      secretName: durianlab.tech-tls # <--- Name of the secret where the TLS certificate will be stored

# ... other values ...

certManager:
  issuerName: "letsencrypt-prod" # <--- Must match the ClusterIssuer name
```

**Important**: Ensure `ingress.hosts` and `ingress.tls.hosts` contain your actual domain names.

## Deployment Process

1.  **Apply ClusterIssuer**: Apply the `letsencrypt-prod-clusterissuer.yaml` to your cluster:
    ```bash
    kubectl apply -f letsencrypt-prod-clusterissuer.yaml
    ```

2.  **Deploy Helm Chart**: Deploy or upgrade your Helm chart. This will render the `certificate.yaml` and `ingress.yaml` (which uses the certificate) and apply them to the cluster.
    ```bash
    helm upgrade --install <release-name> .
    ```

3.  **Verify Certificate Status**: Monitor the status of your certificate:
    ```bash
    kubectl get certificate
    ```
    The `READY` column should eventually change to `True`.

## Troubleshooting

*   **Certificate not ready**: Check the events of the certificate for errors:
    ```bash
    kubectl describe certificate <certificate-name>
    ```
*   **Ingress issues**: Ensure your Ingress controller (e.g., NGINX Ingress Controller) is correctly installed and running.
*   **`cert-manager` logs**: Check the logs of the `cert-manager` pods for detailed error messages.

This documentation provides a comprehensive guide to setting up TLS for your Helm-deployed application. Remember to replace placeholder values with your actual configuration.