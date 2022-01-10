const express = require('express');

const app = express()

app.use(express.json())

// require("./routes/<FOLDER_OF_ROUTES>)(app);

export { app }
