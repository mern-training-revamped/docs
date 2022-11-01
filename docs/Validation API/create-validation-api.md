---
sidebar_position: 2
---

# Create Validation API

Access request params

```javascript title="handler.js"
const { emailId, employeeId, country, doj } = JSON.parse(event?.body) || {};
```

Handle Bad Requests

```javascript title="handler.js"
if (!employeeId || !country || !doj || !emailId) {
  logger.debug("***BadRequest***", { employeeId, country, doj, emailId });

  return lambdaResponse(
    new BadRequest("Bad Request", [
      { name: "emailId", type: "body" },
      { name: "employeeId", type: "body" },
      { name: "country", type: "body" },
      { name: "doj", type: "body" },
    ])
  );
}
```

Get data from DynamoDb

```javascript title="handler.js"
const record = await getItem("Employee", { EmailId: emailId });
```

Check if data exists in DB and Update

```javascript title="handler.js"
const { EmployeeId, DateOfJoining } = record?.Item || {};
if (EmployeeId === employeeId && DateOfJoining === doj) {
  await putItem("Employee", {
    ...record.Item,
    Country: country,
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
    isEligible: true,
  },
});
```

Complete code with Exception handling

```javascript title="handler.js"
"use strict";
const { getLogger } = require("mern-logging-layer");
const {
  InternalServerError,
  BadRequest,
  NotFound,
  lambdaResponse,
} = require("mern-common-layer");
const { getItem, putItem } = require("mern-database-layer");

let logger = getLogger();

module.exports.validateProfile = async (event) => {
  const { emailId, employeeId, country, doj } = JSON.parse(event?.body) || {};

  logger.info("***Lambda Started***");

  try {
    if (!employeeId || !country || !doj || !emailId) {
      logger.debug("***BadRequest***", { employeeId, country, doj, emailId });

      return lambdaResponse(
        new BadRequest("Bad Request", [
          { name: "emailId", type: "body" },
          { name: "employeeId", type: "body" },
          { name: "country", type: "body" },
          { name: "doj", type: "body" },
        ])
      );
    }

    const record = await getItem("Employee", { EmailId: emailId });

    const { EmployeeId, DateOfJoining } = record?.Item || {};
    if (EmployeeId === employeeId && DateOfJoining === doj) {
      await putItem("Employee", {
        ...record.Item,
        Country: country,
      });
    } else {
      return lambdaResponse(new NotFound("User Not Found"));
    }

    return lambdaResponse({
      statusCode: 200,
      body: {
        isEligible: true,
      },
    });
  } catch (err) {
    logger.error("***Internal Server Error***", err);

    return lambdaResponse(new InternalServerError());
  }
};
```
