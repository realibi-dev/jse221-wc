const express = require("express");
const bodyParser = require("body-parser");
const componentsRouter = require("./routers/componentsRouter");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/components", componentsRouter);

app.listen(8080);