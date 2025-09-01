import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
{
  id: "pixelproxy",
  title: "PixelProxy – Scalable Reverse Proxy with Centralized Logging and CI/CD",
  period: {
    start: "05.2025",
    end: "",
  },
  link: "https://github.com/thev1ndu/pixelproxy",
  skills: [
    "Node.js",
    "Express",
    "Nginx",
    "Docker Compose",
    "Promtail",
    "Loki",
    "Grafana",
    "CircleCI",
    "Trivy",
  ],
  description: `**PixelProxy** is a containerized reverse proxy system built with Node.js, Express, and Nginx. Designed for scalability and high availability, it uses Docker Compose to orchestrate multiple proxy instances behind an Nginx load balancer with least-connections and failover support. 
- Centralized logging stack powered by Promtail, Loki, and Grafana for real-time log visualization
- Secure CI/CD pipeline on CircleCI automating builds, testing, and Docker image deployment
- Trivy integration for vulnerability scanning
- Live reload support via Docker Compose Watch for fast and efficient development`,
},
];
