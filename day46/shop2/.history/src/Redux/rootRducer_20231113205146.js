const initalState = {
     count: 0
}
const rootReducer = (state = initalState, action) => {
     switch (action.type) {
          case 'counter/increment': {
               return { ...state, count: state.count + 1 };
          }
          case 'counter/decrement': {
               return { ...state, count: state.count - 1 };
          }
          default: {
               return state;
          }
     }

}
export default rootReducer;