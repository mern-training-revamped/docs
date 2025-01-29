---
sidebar_position: 3
---

# Setup Environment

Create a file at the root of the project

```yml title="env.yml"
LOG_LEVEL: "debug"
TABLE_NAME: "Employee"
```

create another file to setup Environment validations

```js title="env/index.js"'
const env = require("env-var");

const LOG_LEVEL = env.get("LOG_LEVEL").required().asString();
const TABLE_NAME = env.get("TABLE_NAME").required().asString();

module.exports = {
  LOG_LEVEL,
  TABLE_NAME,
};
```
