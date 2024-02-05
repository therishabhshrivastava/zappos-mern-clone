const express = require("express");
const fs = require("fs");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}...`);
});