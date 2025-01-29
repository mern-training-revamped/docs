---
sidebar_position: 1
---

# Intro

## Getting Started

- Setup [serverless](https://www.serverless.com/framework/docs/getting-started) account
- Setup [Github](https://github.com/) account
- Setup [AWS Account](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all)
- Start from scratch or Create New Repository by cloning the template

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
- [Terraform](https://developer.hashicorp.com/terraform/downloads) Optional
- [VSCode](https://code.visualstudio.com/)
- [Postman](https://www.postman.com/downloads/)

## Starting from scratch

1. Install serverless framework

```bash
> npm install serverless -g
```

2. Run `serverless` command, it will bring up list of templates to choose from, choose the `AWS / Node.js / HTTP API`

```bash
> serverless
```

3. Provide name as `eligibility-api`

4. It will start downloading the template, when prompted with an option to create an app on serverless account registry, choose `Skip Adding An App`

5. When prompted to add AWS credentials, choose `Skip & Set Later (AWS SSO, ENV Vars)`
