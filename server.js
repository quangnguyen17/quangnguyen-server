const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
require("./routes")(app);

const PORT = 8000;
app.listen(PORT, () =>
  console.log(`quangnguyen-server is up and running on port ${PORT}`)
);
