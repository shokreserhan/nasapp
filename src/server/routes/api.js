const Express = require("express");
const postSchema = require("../model/postSchema");
const router = Express.Router();

router.get("/favorite", async (req, res) => {
  res.send(await postSchema.find({}).exec());
});

router.post("/favorite", async (req, res) => {
  const { title, URL, media_type } = req.body;
  new postSchema({ title, URL, media_type }).save();
  res.send("Added");
});

router.delete("/favorite", (req, res) => {
  const { _id } = req.body;
  if (!_id) {
    res.status(400).send("error")
    return null
  }
  postSchema.findByIdAndDelete({ _id }).exec()
  res.send("Deleted");
});

module.exports = router;