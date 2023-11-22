const initalState = {
     tasks: []
}
export default function trelloTasks(state = initalState, action) {
     switch (action.type) {
          case 'tasks/getTasks': {
               const newTotalTasks = action.payload.tasks?.map((task) => {
                    const itemsColumn = action.payload.columns?.find(itemColumn => itemColumn?.column === task?.column);
                    const { _id, column, content } = task;
                    return { _id, column, content, columnName: itemsColumn?.columnName };
               })
               return { ...state, tasks: newTotalTasks }
          }
          case 'tasks/addTask': {

               return { ...state, tasks: newTotalTasks }
          }
          default: {
               return state;
          }
     }
}
