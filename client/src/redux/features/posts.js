const initialState = {
  items: [],
  loading: false
}


export default function reducers(state= initialState, action) {
  switch (action.type){
    case "allPost/load/pending":
      return {
        ...state,
        loading: true
      }
    case "allPost/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload
      }
    case "posts/load/pending":
      return  {
        ...state,
        loading: true
      };
    case "posts/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload
      }
    default:
      return state
  }
}


export const loadPosts = (id) => {
  return async (dispatch) => {
    dispatch({type: "posts/load/pending" })
    const response = await fetch(`http://localhost:3004/post/${id}`)
    const json = await response.json();
    dispatch({
      type:"posts/load/fulfilled",
      payload: json
    })
  }
}

export const allLoadPosts = () => {
  return async (dispatch) => {
    dispatch({type: "allPost/load/pending" });
    const response = await fetch('http://localhost:3004/post');
    const json = await response.json();
    dispatch({
      type: "allPost/load/fulfilled",
      payload: json
    })
  }
}