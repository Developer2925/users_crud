require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Model
const UserModel = require("./models/Users");

const app = express();
app.use(cors(
  {
    origin: "https://users-crud-server.vercel.app",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
  }
));
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database connected succesfully");
  })
  .catch((err) => console.log(err));

// Perform CRUD operation here

// Create
app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((error) => console.log(error));
});

// retrieve
app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((error) => console.log(error));
});

// find user by Id
app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((error) => console.log(error));
});

// finf by Id and Update
app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, email: req.body.email, age: req.body.age }
  )
    .then((users) => res.json(users))
    .catch((error) => console.log(error));
});

// delete
app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((error) => res.json(error));
});

app.listen(3001, () => {
  console.log("Server is Up and Running");
});
