

const { Schema, model, Types } = require('mongoose')

const postSchema = new Schema(
  {
    image: String,
    description: String,
    user: {
      type: Types.ObjectId,
      ref: "User"
    },
    comments: {
      type: Types.ObjectId,
      ref: "Comment"
    },
    likes: {
      type: Array
    },
    saving: {
      type: Array
    }
  },
  {
    timestamps: true
  }
  )

const Post = model("Post", postSchema)

module.exports = Post