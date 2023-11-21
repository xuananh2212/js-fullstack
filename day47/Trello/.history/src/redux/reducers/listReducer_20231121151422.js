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
          case "list/dragHanppened": {
               const { droppableIdStart,
                    droppableIdEnd,
                    droppableIndexStart,
                    droppableIndexEnd,
                    draggableId, type } = action.payload;
               console.log("droppableIdStart", droppableIdStart, "droppableIdEnd", droppableIdEnd,
                    " droppableIndexStart", droppableIndexStart,
                    "droppableIndexEnd", droppableIndexEnd,
                    draggableId, type)
               const newListColumn = [...state.listColumn];
               if (type === "list") {
                    const list = newListColumn.splice(droppableIndexStart, 1);
                    newListColumn.splice(droppableIndexEnd, 0, ...list);
                    return { ...state, listColumn: newListColumn };
               }
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

               return { ...state, listColumn: newListColumn };
          }
          default: {
               return state;
          }
     }
}
