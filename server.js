const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


http.listen(port, host, () => {
  console.log(`Socket.IO server running at http://${host}:${port}/`);
});

// server = app.listen(port, () => {
//   console.log(`Server open on port ${port}`);
// });
 
