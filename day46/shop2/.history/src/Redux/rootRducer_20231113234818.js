const initalState = {
     carts: JSON.parse(localStorage.getItem('carts')) || [],
     isLoading: false
}
const rootReducer = (state = initalState, action) => {
     switch (action.type) {
          case 'carts/add': {
               return { ...state, carts: action.payLoad };
          }
          case 'loading/setLoading': {
               return { ...state, isLoading: !state.isLoading };
          }
          default: {
               return state;
          }
     }

}
export default rootReducer;