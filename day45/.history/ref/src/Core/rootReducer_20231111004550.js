
export default function rootReducer(state, action) {
     switch (action.type) {
          case "remaining/decrease":
               console.log({
                    ...state, remaining: action.payLoad - 1
               })
               return {
                    ...state, remaining: action.payLoad - 1
               };
          case "listNumberRandom/add":
               return {
                    ...state, listNumberRandom: action.payLoad
               };
          default:
               return state;
     }

}
