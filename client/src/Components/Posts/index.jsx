import React, { useEffect } from 'react'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../Preloader'
import { loadPosts } from '../../redux/features/posts'
import { useParams } from 'react-router-dom'

function PostsById (props) {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.posts.loading)
  const posts = useSelector(state => state.posts.items)


  // const posts = useSelector((state) => {
  //   return state.posts.items.filter((item) => item.user === user);
  // });
  console.log(posts)


  useEffect(() => dispatch(loadPosts(userId)), [dispatch])


  if(loading) {
    return <Preloader/>
  }



  return (
    <div>
      {posts.map(post => {
        return(
        <Post post={post} key={post.id}/>
        )})}
    </div>
  )
}

export default PostsById