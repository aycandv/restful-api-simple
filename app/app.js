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


app.listen(3000, async () => {
    console.log(`Server started...`);
    console.log(`Connecting to DB...`);
    await mongoose.connect("mongodb://mongodb:27017/", { 
        useNewUrlParser: true , 
        useUnifiedTopology: true},  () => {
        console.log("Connected to DB!");
    })
})
