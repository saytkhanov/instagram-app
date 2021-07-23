const initialState = {
  items: [],
  loading: false
}


export default function reducers(state= initialState, action) {
  switch (action.type){
    case "users/load/pending":
      return  {
        ...state,
        loading: true
      };
    case "users/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload
      }
    default:
      return state
  }
}


export const loadUsers = () => {
  return async (dispatch) => {
    dispatch({type: "users/load/pending"})
    const response = await fetch("http://localhost:3004")
    const json = await response.json()
    dispatch({
      type: "users/load/fulfilled",
      payload: json
    })
  }
}