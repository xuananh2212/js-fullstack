const initalState = {
     tasks: []
}
export default function trelloTasks(state = initalState, action) {
     switch (action.type) {
          case 'tasks/getTasks': {
               console.log(action.payload.columns, action.payload.tasks, action.payload)
               const newTotalTasks = action.payload.tasks?.map((task) => {
                    const itemsColumn = action.payload.columns?.find(itemColumn => itemColumn?.column === task?.column);
                    const { _id, column, content } = task;
                    return { _id, column, content, columnName: itemsColumn?.columnName };
               })
               return { ...state, tasks: newTotalTasks }
          }
          default: {
               return state;
          }
     }
}
