const express = require("express");
const { env, endpoint } = require("./config");

const { PORT } = env;

class Core {
  constructor() {
    this.core = express();
    this.port = PORT;

    this.useRoutes();
  }

  useRoutes() {
    // API ROUTES
    this.core.use(endpoint.user, require("./routes/user.routes"));

    // APP ROUTE
  }

  start() {
    // Start server
    this.core.listen(this.port, () =>
      console.log(`Server ready! on http://localhost:${this.port}`)
    );
  }
}

module.exports = Core;
