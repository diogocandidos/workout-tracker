const express = require('express');
const morgan = require("morgan");
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listen on port 3000
app.listen(8080, function() {
    console.log('listening on 8080');
  });