import React, { useEffect } from 'react'
import Comment from './Comment'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadComments } from '../../redux/features/comments'
import Preloader from '../Preloader'

function Comments (props) {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.comments.loading)
  const comments = useSelector(state => state.comments.items)

  useEffect(() => dispatch(loadComments(postId)), [dispatch])

  if(loading) {
    return <Preloader/>
  }
  return (
    <div>
      {comments.map(comment =>{
        return(
          <Comment comment={comment} key={comment._id}/>
        )
      })}
    </div>
  )
}

export default Comments