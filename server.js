const express = require('express');
const morgan = require("morgan");
const mongoose = require('mongoose');
const path = require("path");



const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

require("./routes/apiRoutes");

//Routes

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});



app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/exercise.html'));
});


app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/stats.html'));
});


//Listen on port 3000
app.listen(3000, function() {
    console.log('listening on 3000');
  });