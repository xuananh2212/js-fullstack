const initalState = {
     todoList: []
}
export default function trelloList(state = initalState, action) {
     switch (action.type) {
          case 'list/getList': {
               const listNew = [...action.payload.columns].map((item) => {
                    item.tasks = [];
                    // action.payload.tasks.forEach((task) => {
                    //      if (task.colum) {

                    //      }
                    // })
               })

               return {}
          }
          default: {
               return state;
          }
     }
}
