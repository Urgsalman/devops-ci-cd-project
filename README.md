# DevOps CI/CD Pipeline Project

## Overview

This project demonstrates a complete DevOps CI/CD pipeline for deploying a containerized web application.

The application is built using **Node.js**, containerized with **Docker**, and automatically built and deployed through **GitHub Actions**.

## Technologies Used

* Node.js
* Docker
* Git
* GitHub Actions
* Docker Hub
* Railway (Cloud Deployment)

## Architecture

Developer pushes code to GitHub.

The CI/CD pipeline automatically:

1. Builds the Docker image
2. Pushes the image to Docker Hub
3. Deploys the container to the cloud platform

## CI/CD Workflow

git push → GitHub → GitHub Actions → Docker Build → Docker Hub → Cloud Deployment

## Project Structure

devops-ci-cd-project
│
├── app.js
├── package.json
├── Dockerfile
└── .github/workflows/deploy.yml

## Run Locally

Build Docker image:

docker build -t devops-app .

Run container:

docker run -p 3000:3000 devops-app

Open in browser:

http://localhost:3000

## 🚀 DevOps CI/CD Architecture

![DevOps Architecture]("architecture.png")


## Live Deployment

Application available online via Railway deployment.

## Author

Soulaimane
DevOps CI/CD Project
