const { Schema, model } = require('mongoose')

const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }
  },
  {
    timestamps: true
  }
)

const Comment = model("Comment", commentSchema);

module.exports = Comment;