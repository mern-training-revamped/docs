---
sidebar_position: 1
---

# Setup a Lambda

## Create a serverless app

Start by running this command:

```bash title="install serverless cli globally"
npm install -g serverless
```

Close the terminal and start a new one

```bash title="initialize serverless template"
serverless
```

this command will create a serverless.yml file,
Replace the contents of the file with following content

```yml title="serverless.yml"
service: eligibility-api
frameworkVersion: "3"

plugins:
  - serverless-offline

package:
  individually: true
  excludeDevDependencies: true

custom:
  serverless-offline:
    httpPort: 4000
    lambdaport: 4001

provider:
  name: aws
  runtime: nodejs14.x
  stage: ${opt:stage, 'dev'}
  region: ${opt:region, 'us-east-1'}
  environment: ${file(./env.yml)}

functions:
  hello:
    handler: handler.checkExisting
    events:
      - http:
          path: /
          method: post
```
