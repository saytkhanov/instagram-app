const User = require('../models/User.model')

const controllers = {
  addUser: async (req, res) => {
    try {
      const user = await new User({
        name: req.body.name
      })
       await user.save()
      res.status(201).json({ message: "Пользователь создан" });
    } catch (e) {
      console.log(e.message)
    }
  },
  getUsers: async (req, res) => {
    try {
      const getUser = await User.find();
      res.json(getUser)
    }catch (e) {
      console.log(e.message)
    }
  }
}

module.exports = controllers