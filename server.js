const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes); 

// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://<petros>:<shumie123>@ds151202.mlab.com:51202/heroku_x80gbcwb",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Handles any request that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
