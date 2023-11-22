const initalState = {
     tasks: []
}
export default function trelloTasks(state = initalState, action) {
     switch (action.type) {
          case 'tasks/getTasks': {
               const newTotalTasks = action.payload.tasks?.map((task) => {
                    const itemsColumn = action.payload.columns?.find(itemColumn => itemColumn?.column === task?.column);
                    const { column, content } = task;
                    return { _id, column, content, columnName: itemsColumn?.columnName };
               })
               return { ...state, tasks: action.payload }
          }
          default: {
               return state;
          }
     }
}
