const initalState = {
     listColumn: []
}
export default function trelloList(state = initalState, action) {
     switch (action.type) {
          case 'list/getList': {
               const listNew = [...action.payload.columns].map((item) => {
                    item.tasks = [];
                    action.payload.tasks.forEach((task) => {
                         if (task.column === item.column) {
                              item.tasks.push(task);
                         }
                    })
                    return item;
               })
               return { ...state, listColumn: listNew };
          }
          case "drag/hanppened": {
               const { droppableIdStart,
                    droppableIdEnd,
                    droppableIndexStart,
                    droppableIndexEnd,
                    draggableId } = action.payload;
               const newState = [...state.listColumn];
               return { ...state, listColumn: listNew };
          }
          default: {
               return state;
          }
     }
}
