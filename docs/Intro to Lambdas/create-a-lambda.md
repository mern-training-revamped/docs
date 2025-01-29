---
sidebar_position: 1
---

# Setup a Lambda

```yml title="serverless.yml"
service: eligibility-api

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
