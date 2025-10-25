from diagrams import Diagram, Cluster, Edge, Node
from diagrams.aws.network import ELB
from diagrams.k8s.network import Ingress
from diagrams.k8s.compute import Pod
from diagrams.onprem.network import Internet
from diagrams.onprem.client import User

with Diagram("Kubernetes TLS Architecture", show=False, direction="LR"):
    user = User("Client")
    internet = Internet("Internet")

    with Cluster("AWS Cloud"):
        elb = ELB("AWS ELB")

    with Cluster("Kubernetes Cluster"):
        nginx_ingress_controller = Ingress("Nginx Ingress Controller")

        with Cluster("Cert-Manager"):
            # Using generic Node for Cert-Manager components
            cert_manager_controller = Node("Cert-Manager Controller")
            cert_manager_webhook = Node("Cert-Manager Webhook")

        app_pod = Pod("Application Pod")

    acme_server = Internet("Let's Encrypt ACME Server")

    user >> internet >> elb >> nginx_ingress_controller

    nginx_ingress_controller >> Edge(label="HTTP/HTTPS") >> app_pod

    # Cert-Manager flow for TLS
    nginx_ingress_controller >> Edge(label="Ingress TLS Annotation") >> cert_manager_controller
    cert_manager_controller >> Edge(label="Creates CertificateRequest") >> acme_server
    acme_server >> Edge(label="ACME Challenge (HTTP-01)") >> nginx_ingress_controller
    cert_manager_controller >> Edge(label="Validates Challenge") >> cert_manager_webhook
    cert_manager_webhook >> Edge(label="Mutates/Validates Resources") >> cert_manager_controller
    cert_manager_controller >> Edge(label="Stores TLS Secret") >> nginx_ingress_controller
