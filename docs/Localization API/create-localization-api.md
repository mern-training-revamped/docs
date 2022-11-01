---
sidebar_position: 2
---

# Create Localization API

Add new environment variable for S3 bucket

```yml title="env.yml"
BUCKET_NAME: "mern-resource-bundles"
LOG_LEVEL: "debug"
```

Access request params

```javascript title="handler.js"
const { locale, namespace, projectId, version } = event.pathParameters || {};
```

Prepare S3 path based on request params

```javascript title="handler.js"
let path = `projects/${projectId}/${version}/${locale}`;
if (namespace) {
  path = `${path}/${namespace}/content.json`;
} else {
  path = `${path}/content.json`;
}
```

```javascript title="Read contents from S3"
const file = await s3
  .getObject({
    Bucket: BUCKET_NAME,
    Key: path,
  })
  .promise();
```

Return success response

```javascript title="handler.js"
return lambdaResponse({
  statusCode: 200,
  body: JSON.parse(file.Body.toString("utf-8")),
});
```

Complete code with Exception handling

```javascript title="handler.js"
"use strict";
const AWS = require("aws-sdk");
const { BUCKET_NAME } = require("./env");
const { getLogger } = require("mern-logging-layer");
const { InternalServerError, lambdaResponse } = require("mern-common-layer");

AWS.config.update({ region: "us-east-1" });

let logger = getLogger();
const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

module.exports.getBundle = async (event) => {
  const { locale, namespace, projectId, version } = event.pathParameters || {};

  logger.info("***Lambda Started***");

  try {
    let path = `projects/${projectId}/${version}/${locale}`;
    if (namespace) {
      path = `${path}/${namespace}/content.json`;
    } else {
      path = `${path}/content.json`;
    }

    const file = await s3
      .getObject({
        Bucket: BUCKET_NAME,
        Key: path,
      })
      .promise();

    return lambdaResponse({
      statusCode: 200,
      body: JSON.parse(file.Body.toString("utf-8")),
    });
  } catch (err) {
    logger.error("***Internal Server Error***", err);

    return lambdaResponse(new InternalServerError());
  }
};
```
