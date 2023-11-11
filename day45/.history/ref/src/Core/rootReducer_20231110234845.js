
export default function rootReducer(state, action) {
     switch (action.type) {
          case "remaining/decrease":
               return {
                    ...state, remaining: action.payLoad - 1
               };
          default:
               return state;
     }

}
