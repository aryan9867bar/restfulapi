const express = require("express");
require("./db/conn");
const client = require("./models/clients");
const clientRouter = require("./routers/client");

const app = express ();
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const port = process.env.PORT || 3000;

app.use (express.json());
app.use(clientRouter);

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})