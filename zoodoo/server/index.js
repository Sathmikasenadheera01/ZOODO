const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/UserRoutes");
const adminRouter = require("./routes/AdminRoutes");
const foodRouter = require("./routes/ProductRoutes");
const path = require("path");

app.use(express.static(path.join(__dirname, "../client/build")));

//create express app
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
//user route
app.use("/users", userRouter);

//admin route
app.use("/admin", adminRouter);

//add food
app.use("/foods", foodRouter);

const port = process.env.PORT || 5000;

//connect to the database
mongoose.connect(
  "mongodb+srv://kulunu12:kulunu123@cluster0.kqc6kk4.mongodb.net/Cluster0?retryWrites=true&w=majority"
);

//listen to port
app.listen(port, () => {
  console.log("app is listening to the port:", port);
});
