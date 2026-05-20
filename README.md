# Ignite Church Digital Content Platform

A serverless church content platform built on AWS for publishing audio sermons and church announcements in a more organized, accessible, and scalable way.

---
## Project Overview

This project was designed to help a local church improve how sermons and announcements are shared with members and non-members.

Originally, sermon audio messages and announcements were shared through the church’s Telegram page. Over time, this became difficult to manage because important sermons and announcements were buried among many messages, making navigation and content discovery difficult for church members and non-members.

To solve this problem, this platform was designed to provide:
- centralized sermon access
- organized church announcements
- improved sermon discoverability
- scalable media delivery
- secure cloud-based architecture

The solution was built using a serverless AWS architecture to reduce infrastructure management while improving scalability and accessibility.

---

## Problem Statement

The church relied heavily on Telegram to distribute:
- sermon audio recordings
- church announcements
- ministry updates

Challenges encountered included:
- difficulty locating older sermons
- poor organization of announcements
- lack of structured content management
- limited accessibility outside Telegram for non-members

The objective of this project was to design and implement a simple cloud-native solution that allows sermons and announcements to be delivered through a dedicated digital platform.

---

## Project Goals

The goals of the project were to:

- Build a centralized digital sermon platform
- Improve sermon accessibility and discoverability
- Deliver media securely using AWS services
- Implement a scalable serverless architecture
- Apply AWS security best practices
- Enforce least-privilege IAM access
- Gain practical experience building cloud-native systems

---

## AWS Services Used

### AWS Amplify
Used for frontend hosting and deployment.

### Amazon S3
Used to store:
- sermon audio files
- sermon thumbnails

### Amazon CloudFront
Used to securely deliver sermon media stored in S3.

### Amazon DynamoDB
Used to store:
- sermon metadata
- announcement metadata

### AWS Lambda
Used to create serverless backend functions.

### Amazon API Gateway
Used to expose public API endpoints.

### AWS IAM
Used to manage permissions and access control.

---

## Architecture Overview

### Frontend and API Flow

```text
User
↓
Frontend (AWS Amplify)
↓
Amazon API Gateway
↓
AWS Lambda
↓
Amazon DynamoDB
```

### Media Delivery Flow

```text
User
↓
Amazon CloudFront
↓
Private Amazon S3 Bucket
```

---

## Security Considerations

- Least privilege IAM
- Private S3 bucket
- CloudFront media delivery

---

## Lessons Learned

- Importance of AWS region consistency across interconnected services
- Difference between direct S3 access and CloudFront-based media delivery
- Importance of implementing least-privilege IAM policies from the beginning
- Practical experience integrating frontend applications with API Gateway and Lambda

---

## Current MVP Scope

Included:
- Audio sermons
- Sermon thumbnails
- CloudFront media delivery
- Serverless backend APIs
