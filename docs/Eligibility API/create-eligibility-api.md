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
const record = await getItem("Employee", { EmailId: email });
```

Check if data exists in DB and update

```javascript title="handler.js"
if (record.Item) {
  await putItem("Employee", {
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

    const record = await getItem("Employee", { EmailId: email });

    if (record.Item) {
      await putItem("Employee", {
        ...record.Item,
        FirstName: firstName,
        LastName: lastName,
      });
    } else {
      return lambdaResponse(new NotFound("User Not Found"));
    }

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
