const initalState = {
     todoList: []
}
export default function trelloList(state = initalState, action) {
     switch (action.type) {
          case 'list/getList': {
               const listNew = [...action.payload.columns].map(())

               return {}
          }
          default: {
               return state;
          }
     }
}
