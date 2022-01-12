const express = require('express');

const app = express()

app.use(express.json())

require("./routes/usersRoutes")(app);

export { app }
