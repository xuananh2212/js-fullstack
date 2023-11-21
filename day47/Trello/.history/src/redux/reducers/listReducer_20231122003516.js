const initalState = {
     listColumn: []
}
export default function trelloList(state = initalState, action) {
     switch (action.type) {
          case 'list/getList': {
               const listNew = action.payload.columns.map((item) => {
                    item.tasks = [];
                    action.payload.tasks.forEach((task) => {
                         if (task.column === item.column) {
                              const { _id, content, column } = task;
                              item.tasks.push({ _id, content, column, isEdit: false });
                         }
                    })
                    return item;
               })
               return { ...state, listColumn: listNew };
          }
          case "list/addTasks": {
               const newListColumn = JSON.parse(JSON.stringify(state.listColumn));
               const listFind = newListColumn.find(list => list._id === action.payload.columnId);
               listFind.push({ ...action.payload.newTask, isEdit: true })
               return { ...state, listColumn: newListColumn };
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
               const newListColumn = JSON.parse(JSON.stringify(state.listColumn));
               if (type === "list") {
                    const list = newListColumn.splice(droppableIndexStart, 1);
                    newListColumn.splice(droppableIndexEnd, 0, ...list);
                    return { ...state, listColumn: newListColumn };
               }
               if (droppableIdStart === droppableIdEnd) {
                    const listFind = newListColumn.find(list => list._id === droppableIdStart);
                    console.log(listFind);
                    const tasks = listFind.tasks.splice(droppableIndexStart, 1);
                    console.log(listFind, tasks);
                    listFind.tasks.splice(droppableIndexEnd, 0, ...tasks);
               }
               if (droppableIdStart !== droppableIdEnd) {
                    const listStart = newListColumn.find(list => droppableIdStart === list._id);
                    const tasks = listStart.tasks.splice(droppableIndexStart, 1);
                    const listEnd = newListColumn.find(list => droppableIdEnd === list._id);
                    listEnd.tasks.splice(droppableIndexEnd, 0, ...tasks);
               }
               return { ...state, listColumn: newListColumn };
          }
          default: {
               return state;
          }
     }
}
