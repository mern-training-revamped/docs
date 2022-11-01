---
sidebar_position: 2
---

# Create Profile API

Access request params

```javascript title="handler.js"
const { emailId, userId, password } = JSON.parse(event?.body) || {};
```

Handle Bad Requests

```javascript title="handler.js"
if (!emailId || !userId || !password) {
  logger.debug("***BadRequest***", { emailId, userId, password });

  return lambdaResponse(
    new BadRequest("Bad Request", [
      { name: "emailId", type: "body" },
      { name: "userId", type: "body" },
      { name: "password", type: "body" },
    ])
  );
}
```

Get data from DynamoDb

```javascript title="handler.js"
const record = await getItem("Profile", { EmailId: emailId });
```

Check if data exists in DB and Update

```javascript title="handler.js"
if (record?.Item?.EmailId) {
  return lambdaResponse(new Frobidden("User Not Found"));
}

await putItem("Profile", {
  EmailId: emailId,
  Username: userId,
  Password: password,
});
```

Return success response

```javascript title="handler.js"
return lambdaResponse({
  statusCode: 200,
  body: {
    message: "Profile created successfully!",
  },
});
```

Complete code with Exception handling

```javascript title="handler.js"
"use strict";
const {
  InternalServerError,
  BadRequest,
  Frobidden,
  lambdaResponse,
} = require("mern-common-layer");
const { getLogger } = require("mern-logging-layer");

const { getItem, putItem } = require("mern-database-layer");

let logger = getLogger();

module.exports.createProfile = async (event) => {
  const { emailId, userId, password } = JSON.parse(event?.body) || {};

  logger.info("***Lambda Started***");

  try {
    if (!emailId || !userId || !password) {
      logger.debug("***BadRequest***", { emailId, userId, password });

      return lambdaResponse(
        new BadRequest("Bad Request", [
          { name: "emailId", type: "body" },
          { name: "userId", type: "body" },
          { name: "password", type: "body" },
        ])
      );
    }

    const record = await getItem("Profile", { EmailId: emailId });

    if (record?.Item?.EmailId) {
      return lambdaResponse(new Frobidden("User Not Found"));
    }

    await putItem("Profile", {
      EmailId: emailId,
      Username: userId,
      Password: password,
    });

    return lambdaResponse({
      statusCode: 200,
      body: {
        message: "Profile created successfully!",
      },
    });
  } catch (err) {
    logger.error("***Internal Server Error***", err);

    return lambdaResponse(new InternalServerError());
  }
};
```
