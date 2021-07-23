import React from 'react'

function Comment ({comment, key}) {
  return (
    <div key={key}>
      {comment.text}
    </div>
  )
}

export default Comment