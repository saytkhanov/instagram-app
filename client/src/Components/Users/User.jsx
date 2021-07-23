import React from 'react'
import { Link } from 'react-router-dom'

function User ({user, key}) {
  console.log(user._id)
  return (
     <div key={key}>
       <Link to={`/post/${user._id}`}>
         {user.name}
       </Link>
       </div>
  )
}

export default User