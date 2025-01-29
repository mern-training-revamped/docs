---
sidebar_position: 2
---

# Create NodeJs project

```bash title="initialize node project"
npm init
```

this command will create a file called package.json, Replace the contents of the file with following content

```json title="package.json"
{
  "name": "@@name of the api@@",
  "version": "1.0.0",
  "description": "Lambda to validate email and check for eligibility to proceed with registration",
  "main": "index.js",
  "scripts": {
    "start": "sls offline start",
    "zip": "zip -r lambda.zip . \"*.zip\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/@@your-account@@/@@name of the api@@.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/@@your-account@@/@@name of the api@@/issues"
  },
  "homepage": "https://github.com/@@your-account@@/@@name of the api@@#readme",
  "devDependencies": {
    "serverless": "^4.5.0",
    "serverless-offline": "^14.4.0"
  },
  "dependencies": {
    "aws-sdk": "^2.1692.0",
    "env-var": "^7.5.0",
    "mern-common-layer": "^1.3.0",
    "mern-database-layer": "^5.0.0",
    "mern-logging-layer": "^7.0.0"
  }
}
```

```bash title="install dependencies"
npm install
```

this command will install all the dependencies of the app
