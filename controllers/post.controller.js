const Post = require("../models/Post.model");

const controllers = {
  addPost: async (req, res) => {
    try {
      const posting = await new Post({
        image: req.body.image,
        description: req.body.description,
        user: req.params.id,
      });
      await posting.save();
      res.status(201).json({ message: "Пост добавлен" });
    } catch (e) {
      console.log(e.message);
    }
  },
  getOnePost: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.params.id });
      res.json(posts);
    } catch (e) {
      console.log(e.message);
    }
  },
  getAllPost: async (req, res) => {
    try {
      const onePost = await Post.find().populate("user")
      res.json(onePost);
    } catch (e) {
      console.log(e.message);
    }
  },
  addLikeInPost: async (req, res) => {
    const post = await Post.findById(req.params.id);
    const { user } = req.body;
    const userSave = {
      user,
    };
    post.likes.push(userSave.user);
    post.save();
    res.status(201).json({ message: "Лайк" });
  },
  savePost: async (req, res) => {
    const PostSave = await Post.findById(req.params.id);
    const { user } = req.body;
    const userSave = {
      user,
    };
    PostSave.saving.push(userSave.user);
    PostSave.save();
    res.status(201).json({ message: "Лайк" });
  },
};

module.exports = controllers;
