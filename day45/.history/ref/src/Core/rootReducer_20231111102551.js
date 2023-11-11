
export default function rootReducer(state, action) {
     console.log(action.payLoad)
     switch (action.type) {
          case "remaining/decrease":
               console.log({
                    ...state, remaining: action.payLoad - 1
               })
               return {
                    ...state, remaining: action.payLoad - 1
               };
          case "listPlays/add":
               return {
                    ...state, listPlays: action.payLoad
               };
          case "remaiming/reset":
               return {
                    ...state, remaining: action.payLoad
               };

          default:
               return state;
     }

}
