# Longitudinal.dev Codespace Setup Guide 🚀

Welcome to the longitudinal.dev Codespace setup guide! This document is designed to simplify your experience using GitHub Codespaces for the longitudinal.dev project, with a focus on R analysis and Quarto for documentation and write-ups. It’s crafted for both seasoned contributors and those new to Codespaces, VS Code, or Dev Containers.

## What Are Codespaces and Dev Containers? 🧐

Before diving in, here’s a quick overview of Codespaces and Dev Containers and why they’re useful:

### Dev Containers 📦
Think of Dev Containers as VS Code instances within Docker. These containers define your project’s development environment using a `Dockerfile` or `docker-compose.yml`, allowing a consistent setup across different systems, whether you’re working locally or in the cloud.

### Codespaces ☁️
GitHub Codespaces are cloud-hosted Dev Containers that you can access directly from VS Code or your browser. Codespaces use the same configuration as Dev Containers but add the convenience of cloud accessibility.

### Working Together 🤝
Combining VS Code, Dev Containers, and GitHub Codespaces enables seamless development from virtually any device, making it easy to standardize the environment across teams and simplify contributions.

## Getting Started with the Longitudinal.dev Codespace 🌱

Accessing and working in the longitudinal.dev Codespace is straightforward, with no complex setup required.

### Accessing the Codespace 👩‍💻

Follow these steps to get started:

1. Go to the [**longitudinal.dev repository**](https://github.com/beginDevSci/longitudinal.dev) on GitHub.
2. Click the **`Code`** dropdown button ⬇️.
3. Select **`Open with Codespaces`** 💻.
4. Choose an existing Codespace or click **`New codespace`** to create a new one ✨.

Using Codespaces provides a fully configured environment, letting you jump straight into contributing without the need to install anything locally. Happy coding!

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/beginDevSci/longitudinal.dev?quickstart=1)

This badge is also at the top of the README for easy access.

---

![](https://github.com/beginDevSci/longitudinal.dev/blob/dev/img/Codespace_Example.gif)

---

### Working in the Codespace 🖥

- **Pre-configured Environment**: The Codespace is set up with R and Quarto, so you can start analyzing data or writing documentation immediately.
- **Streamlined Development**: With all dependencies pre-installed, focus on coding and documentation rather than setup.

### Codespaces for Continuous Integration 🔄

Codespaces allow you to develop and test code in an environment close to production, helping ensure reliable continuous integration (CI) workflows.

## Development Container Configuration 🛠

This repository includes a configuration for both Dev Containers and GitHub Codespaces.

- **Local Setup**: To use the Dev Container locally, use the **Dev Containers: Clone Repository in Container Volume...** command in VS Code.
- **Quick Start**: If you have VS Code and Docker, [click here](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/beginDevSci/longitudinal.dev) to set up automatically. This will clone the repo, configure the container, and prepare your environment for development.

## Need Help? 🆘

If you have questions or run into setup issues, reach out through our [GitHub Discussions](https://github.com/beginDevSci/longitudinal.dev/discussions) or on our [Slack workspace](https://join.slack.com/t/longitudinal.dev). Our team is here to help make your Codespace experience smooth and productive.