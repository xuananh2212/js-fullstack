const initalState = {
     todoList: []
}
export default function trelloTask(state = initalState, action) {
     switch (action.type) {
          case 'todo/fetch': {
               return { ...state, todoList: action.payload }
          }
          default: {
               return state;
          }
     }
}
