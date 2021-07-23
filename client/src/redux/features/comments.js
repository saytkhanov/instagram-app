const initialState = {
  items: [],
  loading: false
}


export default function reducers(state= initialState, action) {
  switch (action.type){
    case "comment/load/pending":
      return  {
        ...state,
        loading: true
      };
    case "comment/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload
      }
    default:
      return state
  }
}



export const loadComments = (id) => {
  return async (dispatch) => {
    dispatch({type: "comment/load/pending" })
    const response = await fetch(`http://localhost:3004/comment/${id}`)
    const json = await response.json();
    dispatch({
      type:"comment/load/fulfilled",
      payload: json
    })
  }
}