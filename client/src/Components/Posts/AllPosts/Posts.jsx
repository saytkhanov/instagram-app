import React from "react";
import styles from './posts.module.css';


function Posts({ post, key }) {
  return (
    <div key={key}>
      <div className={styles.main}>
        <div className={styles.header}>
          <h6 className={styles.p}>{post.user.name}</h6>
        </div>
        <div className={styles.container}>
          <div>
            <img src={post.image} width={'100%'}/>
          </div>
          <div>
            <p>{post.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
