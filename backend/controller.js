
const signup= async (req, res) => {
  const { text } = req.body;
  const productnew = new Task({ text, completed: false });
  await productnew.save();
  res.json(productnew);
}

module.exports=signup
