const initalState = {
     listColumn: [],
     isLoading: false,
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
          case 'list/Loading': {
               return { ...state, isLoading: action.payload }
          }
          case "list/postTasks": {

               let taskEditId = null;
               console.log(action.payload.feature);
               if (action.payload.feature === "addTask") {
                    taskEditId = action.payload.data.tasks[action.payload.data.tasks.length - 1]._id;
                    console.log(taskEditId);
               } else if (action.payload.feature === "editTask") {
                    taskEditId = action.payload.data.tasks[action.payload.index]._id;

               }
               const listNew = JSON.parse(JSON.stringify(state.listColumn)).map((item) => {
                    item.tasks = [];
                    action.payload.data.tasks.forEach((task) => {
                         let isEdit = false;
                         if (task.column === item.column) {
                              if (taskEditId === task._id) {
                                   isEdit = true;
                              }
                              const { _id, content, column } = task;
                              item.tasks.push({ _id, content, column, isEdit });
                         }
                    })
                    return item;
               })
               return { ...state, listColumn: listNew };
          }
          case "list/addColumn": {
               const newListColumn = JSON.parse(JSON.stringify(state.listColumn));
               newListColumn.push(action.payload)
               return { ...state, listColumn: newListColumn };
          }
          case "list/editContentColumn": {
               const newListColumn = JSON.parse(JSON.stringify(state.listColumn));
               const columnFind = newListColumn.find(column => column._id === action.payload._id);
               columnFind.columnName = action.payload.value;
               return { ...state, listColumn: newListColumn };
          }
          case "list/removeColumn": {
               const newListColumn = JSON.parse(JSON.stringify(state.listColumn));
               const index = newListColumn.findIndex(column => column._id === action.payload);
               newListColumn.splice(index, 1);
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
