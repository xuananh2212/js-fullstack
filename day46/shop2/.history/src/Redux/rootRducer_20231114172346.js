const initalState = {
     carts: JSON.parse(localStorage.getItem('carts')) || [],
     isLoading: false
}
const rootReducer = (state = initalState, action) => {
     switch (action.type) {
          case 'carts/add': {
               if (state.carts.length > 0) {
                    const cartNew = JSON.parse(JSON.stringify(state.carts));
                    const cartFind = cartNew.find(({ _id }) => {
                         console.log(_id, action.payLoad._id)
                         return _id === action.payLoad._id
                    });
                    if (cartFind) {
                         cartFind.quantity = cartFind.quantity + 1;
                         cartFind.amount = cartFind.amount - 1;
                         localStorage.setItem('carts', JSON.stringify(cartNew));
                         return { ...state, carts: [...cartNew] }

                    }
               }
               localStorage.setItem('carts', JSON.stringify([...state.carts, action.payLoad]));
               return { ...state, carts: [...state.carts, action.payLoad] };
          }
          case 'carts/checkOut': {
               localStorage.removeItem('carts');
               return { ...state, carts: [] };
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