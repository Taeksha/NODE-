const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("connected");
}).catch((err) => {
  console.error("errorr:", err);
});

const TaskSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
});
const Task = mongoose.model("Task", TaskSchema);
//Get Data
app.get("/product", async (req, res) => {
  const products = await Task.find();
  res.json(products);
});
//Add NewData
app.post("/product", async (req, res) => {
  const { text } = req.body;
  const productnew = new Task({ text, completed: false });
  await productnew.save();
  res.json(productnew);
});

//Tak Completed

app.put("/product/:id", async (req, res) => {
  const { id } = req.params;
  const productid = await Task.findById(id);
  productid.completed = !productid.completed;
  await productid.save();
  res.json(productid);
});

//Delete task
app.delete("/product/:id", async (req, res) => {
  const { id } = req.params;
  await productsave.findByIdAndDelete(id);
  res.json({ message: "Task deleted" });
});



app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
