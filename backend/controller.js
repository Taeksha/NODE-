
const signup= async (req, res) => {
  const { text } = req.body;
  const productnew = new Task({ text, completed: false });
  await productnew.save();
  res.json(productnew);
}
const signin=async (req, res) => {
  const { id } = req.params;
  const productid = await Task.findById(id);
  productid.completed = !productid.completed;
  await productid.save();
  res.json(productid);
}

module.exports={signup,signin}
