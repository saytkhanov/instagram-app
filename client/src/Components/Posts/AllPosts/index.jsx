import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allLoadPosts } from "../../../redux/features/posts";
import Posts from "./Posts";
import Preloader from "../../Preloader";

function AllPosts(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.posts.loading);
  const posts = useSelector((state) => state.posts.items);

  useEffect(() => dispatch(allLoadPosts()), [dispatch]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      {posts.map((post) => {
        return <Posts post={post} key={post.id} />;
      })}
    </>
  );
}

export default AllPosts;
