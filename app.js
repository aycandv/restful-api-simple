const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const postsRoute = require("./routes/posts");

require("dotenv/config");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/posts", postsRoute);

app.get("/", (req, res) => {
    res.send("Welcome home");
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true , useUnifiedTopology: true},  () => {
    console.log("Connected to DB!");
})

// Start to listen on port 3000
app.listen(3000);
