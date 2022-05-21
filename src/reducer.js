export const initialState = {
    authUser: [],
  };
  
  const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
      case "AUTH":
        localStorage.setItem(
          "localCart",
          JSON.stringify({
            ...state,
            authUser: action.item,
          })
        );
        return {
          ...state,
          authUser: action.item,
        };
  
      case "SIGNOUT":
        localStorage.setItem(
          "localCart",
          JSON.stringify({
            ...state,
            authUser: [],
          })
        );
        return {
          ...state,
          authUser: [],
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  