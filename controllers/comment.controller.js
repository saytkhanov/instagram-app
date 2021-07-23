const Comment = require('../models/Comment.model')

const controllers = {
  addComment: async (req, res) => {
    try {
      const comment = await new Comment({
        text: req.body.text,
        postId: req.params.id
      })
      await comment.save()
      res.status(201).json({ message: "Комментарий добавлен" });
    } catch (e) {
      console.log(e.message)
    }
  },
  getComments: async (req, res) => {
    const getCom = await Comment.find({postId: req.params.id})
    res.json(getCom)
  }
}

module.exports = controllers
