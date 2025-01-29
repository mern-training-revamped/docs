---
sidebar_position: 2
---

# Create Eligibility API

Access request params

```javascript title="handler.js"
const { firstName, lastName, email } = JSON.parse(event?.body) || {};
```

Handle Bad Requests

```javascript title="handler.js"
...
const {
  BadRequest,
  lambdaResponse,
} = require("mern-common-layer");
...
if (!firstName || !lastName || !email) {
  logger.debug("***BadRequest***", { firstName, lastName, email });

  return lambdaResponse(
    new BadRequest("Bad Request", [
      { name: "firstName", type: "body" },
      { name: "lastName", type: "body" },
      { name: "email", type: "body" },
    ])
  );
}
```

Get data from DynamoDb

```javascript title="handler.js"
...
const { TABLE_NAME } = require("./env");
const { getItem } = require("mern-database-layer");
...
const record = await getItem(TABLE_NAME, { EmailId: email });
```

Check if data exists in DB and update

```javascript title="handler.js"
...
const {
  BadRequest,
  NotFound,
  lambdaResponse,
} = require("mern-common-layer");
const { getItem, putItem } = require("mern-database-layer");
...
if (record.Item) {
  await putItem(TABLE_NAME, {
    ...record.Item,
    FirstName: firstName,
    LastName: lastName,
  });
} else {
  return lambdaResponse(new NotFound("User Not Found"));
}
```

Return success response

```javascript title="handler.js"
return lambdaResponse({
  statusCode: 200,
  body: {
    message: "User record updated successfully!",
  },
});
```

Complete code with Exception handling

```javascript title="handler.js"
"use strict";
const {
  InternalServerError,
  BadRequest,
  NotFound,
  lambdaResponse,
} = require("mern-common-layer");
const { getLogger } = require("mern-logging-layer");
const { getItem, putItem } = require("mern-database-layer");
const { TABLE_NAME } = require("./env");

let logger = getLogger();

module.exports.checkExisting = async (event) => {
  const { firstName, lastName, email } = JSON.parse(event?.body) || {};

  logger.info("***Lambda Started***");

  try {
    if (!firstName || !lastName || !email) {
      logger.debug("***BadRequest***", { firstName, lastName, email });

      return lambdaResponse(
        new BadRequest("Bad Request", [
          { name: "firstName", type: "body" },
          { name: "lastName", type: "body" },
          { name: "email", type: "body" },
        ])
      );
    }

    logger.info("Fetching item from DynamoDB", { email });
    const record = await getItem(TABLE_NAME, {
      EmailId: email,
    });

    if (record) {
      logger.info("Item found, updating record", { record });
      await putItem(TABLE_NAME, {
        ...record,
        FirstName: firstName,
        LastName: lastName,
        DateModified: new Date().toISOString(),
      });
    } else {
      logger.warn("User not found", { email });
      return lambdaResponse(new NotFound("User Not Found"));
    }

    logger.info("User record updated successfully");
    return lambdaResponse({
      statusCode: 200,
      body: {
        message: "User record updated successfully!",
      },
    });
  } catch (err) {
    logger.error("***Internal Server Error***", err);

    return lambdaResponse(new InternalServerError());
  }
};
```

## Optionally add code to connect to locally running dynamodb

Start by creating a file db.js

```js title="db.js"
const AWS = require("aws-sdk");
const { getLogger } = require("mern-logging-layer");

let logger = getLogger();

const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: "us-west-2",
  endpoint: "http://localhost:8000",
});

async function getItem(tableName, key) {
  const params = {
    TableName: tableName,
    Key: key,
  };

  try {
    const data = await dynamoDb.get(params).promise();
    return data.Item;
  } catch (error) {
    logger.error("Error getting item from DynamoDB:", error);
    throw new Error("Could not get item from DynamoDB");
  }
}

async function putItem(tableName, item) {
  const params = {
    TableName: tableName,
    Item: item,
  };

  try {
    await dynamoDb.put(params).promise();
  } catch (error) {
    logger.error("Error putting item into DynamoDB:", error);
    throw new Error("Could not put item into DynamoDB");
  }
}

module.exports = {
  dynamoDb,
  getItem,
  putItem,
};
```

## Update handler.js if using local dynamoDb

```js title="handler.js"
"use strict";
...
const { getItem, putItem } = require("./db");

...
```
