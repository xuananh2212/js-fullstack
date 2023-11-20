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
               if (droppableIdStart === droppableIdEnd) {
                    const listFind = state.listColumn.find(list => list._id === droppableIdStart);
                    const tasks = listFind.tasks.splice(droppableIndexStart, 1);
                    listFind.tasks.splice(droppableIndexEnd, 0, ...tasks);
               }
               if (droppableIdStart !== droppableIdEnd) {
                    const listStart = state.listColumn.find(list => droppableIdStart === list._id);
                    const tasks = listStart.tasks.splice(droppableIndexStart, 1);
                    const listEnd = state.listColumn.find(list => droppableIdEnd === list._id);
                    listEnd.tasks.splice(droppableIndexEnd, 0, ...tasks);
               }

               return { ...state, listColumn: newState };
          }
          default: {
               return state;
          }
     }
}
