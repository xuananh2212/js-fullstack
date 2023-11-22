const initalState = {
     isLogin: false,
     apiKey: '',
}
export default function trelloList(state = initalState, action) {
     switch (action.type) {
          case 'api/getEmail': {
               return { ...state, isLogin: true, apiKey: action.payload }

          }
          case 'api/restApiKey': {
               return { ...state, isLogin: false, apiKey: "" }

          }
          default: {
               return state;
          }
     }
}
