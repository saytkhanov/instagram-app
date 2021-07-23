import React from 'react'
import { Link } from 'react-router-dom'

function Post ({post, key}) {
  return (
    <div key={key}>
      <Link to={`/comment/${post._id}`}>
      {post.description}
        <img src={post.image}/>
      </Link>
    </div>
  )
}

export default Post