const express = require("express");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user-routes");

require("dotenv").config();

//setting up your port
const PORT = process.env.PORT || 3000;

//assigning the variable app to express
const app = express();

app.set("view engine", "ejs");

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (_req, res) => {
  res.render("index");
});

//routes for the user API
app.use(express.json());
app.use("/api/users", userRoutes);

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
