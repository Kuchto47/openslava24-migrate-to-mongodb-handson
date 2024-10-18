# Openslava 2024 - NoSQL, No Problem: Master the Art of Migrating RDBMS to MongoDB
This showcase repository is a creation of a Hands-on lab led by MongoDB guy [Rayed Benbrahim](https://github.com/RayedB) during Openslava 2024 conference.

## Abstract
Imagine seamlessly transforming your rigid relational database into a flexible, scalable MongoDB powerhouse - all without missing a beat in your live application. Sounds impossible? Not anymore. In this workshop, you'll tackle a real-world API challenge, juggling user accounts and transfers while secretly overhauling the entire backend. Armed with MongoDB's Relational Migrator, you'll perform database migration between relational database to a v2 using MongoDB without interruption of service. Whether you're a seasoned database guru or a curious developer, this workshop promises to be an eye-opener. You'll walk away with the skills to modernize any database infrastructure and maybe even score that promotion you've been eyeing.

## Technologies used
- [MongoDB's Relational migrator](https://www.mongodb.com/products/tools/relational-migrator)
  - Docker to run prepared image for migration
- PostgreSQL
- MongoDB

## Useful links
- [Openslava 2024 lab page](https://www.openslava.sk/2024/#/program/9758d5ff-13e1-4aa1-9536-4c735369e7ed)
- [Original repo (and ReadMe file from here further)](TODO)

# Migrate to MongoDB - A hands-on workshop


## Introduction

This hands-on lab guides you through the process of migrating a legacy application from a relational database to MongoDB. The existing application has an API based on a relational database management system (RDBMS). Our goal is to create a version 2 (v2) of this API that can read the same data using MongoDB instead.

By completing this lab, you'll learn how to:
1. Set up a MongoDB Atlas cluster
2. Use a Docker container for the migration process
3. Migrate data from an RDBMS to MongoDB
4. Build MongoDB queries for the new API v2

## Prerequisites

Before starting this lab, ensure you have the following:

1. Docker Desktop or Docker Rancher installed on your machine
   - You should be able to pull and run Docker containers
2. A MongoDB Atlas account
   - If you don't have one, you can create a free account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

## Steps

### 1. Create a MongoDB Atlas Free Cluster

1. Log in to your MongoDB Atlas account and create a new free cluster.

2. Whitelist your IP address:
   - In the Atlas dashboard, go to Network Access
   - Add a new IP address
   - Enter `0.0.0.0` to allow access from anywhere (Note: This is not recommended for production environments)

3. Create a database user:
   - In the Atlas dashboard, go to Database Access
   - Add a new database user with read and write privileges

### 2. Pull and Run the Docker Image

Open a terminal and run the following commands:

```bash
docker pull public.ecr.aws/v4d7k6c9/relational-migrator:latest
docker run -p 8080:8080 public.ecr.aws/v4d7k6c9/relational-migrator:latest
```

Replace `[your-image-name]` with the actual name of your Docker image.

### 3. Launch the Migrator

1. Connect to the RDBMS:
   - Use the provided credentials to connect to your legacy relational database

2. Connect to MongoDB Atlas:
   - Use the connection string from your Atlas cluster to connect to MongoDB

3. Map tables to documents:
   - Start with an Empty Schema
   - Design your MongoDB Documents
   - Run the migration process

### 4. Build MongoDB Queries for API v2

With your data now in MongoDB, you can start building queries for your new API v2:

- Identify the key operations from your v1 API
- Translate SQL queries to MongoDB queries
- Test and optimize your new MongoDB-based API endpoints

---

Congratulations! You've successfully migrated your data from a relational database to MongoDB and prepared for the new version of your API.
