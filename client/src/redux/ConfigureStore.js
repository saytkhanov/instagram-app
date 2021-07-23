import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger/src';
import usersReducer from "./features/users";
import postsReducer from "./features/posts";
import commentsReducer from './features/comments'


const logger = createLogger({
  diff: true,
  collapsed: true
})

export const store = createStore(
  combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
  }),
  applyMiddleware(logger, thunk)
)