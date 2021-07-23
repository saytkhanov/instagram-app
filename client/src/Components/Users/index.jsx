import React, { useEffect } from 'react'
import Preloader from '../Preloader'
import { useDispatch, useSelector } from 'react-redux'
import User from './User'
import { loadUsers } from '../../redux/features/users'

function Users (props) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.users.loading)
  const users = useSelector(state => state.users.items)


  useEffect(() => dispatch(loadUsers()), [dispatch])


  if(loading) {
    return <Preloader/>
  }

  return (
    <div>
      {users.map(user => {
        return(
          <User user={user} key={user._id}/>
        )
      })}
    </div>
  )
}

export default Users