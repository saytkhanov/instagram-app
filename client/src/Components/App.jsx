import {Switch, Route} from 'react-router-dom';
import PostsById from './Posts'
import Comments from './Comments'
import Users from './Users'
import Header from './Header/Header'
import styles from './app.module.css'
import AllPosts from './Posts/AllPosts'



function App() {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.row}>
        <div className='col'>
          <Switch>
            <Route path='/' exact>
              <AllPosts/>
            </Route>
            <Route path='/post/:userId'>
              <PostsById/>
            </Route>
            <Route path='/comment/:postId'>
              <Comments/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>

  );
}

export default App;
