const express = require('express');
const app = express();
const port = process.env.APP_PORT;


app
  .listen(port, () => {
    console.log(`Server is listening on ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });