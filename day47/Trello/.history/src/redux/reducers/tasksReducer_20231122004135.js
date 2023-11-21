const initalState = {
     tasks: []
}
export default function trelloTasks(state = initalState, action) {
     switch (action.type) {
          case 'tasks/getTasks': {
               return { ...state, tasks: action.payload }
          }
          case 'tasks/addTask': {
               const newTasks = JSON.parse(JSON.stringify(state.tasks));

               return { ...state, tasks: action.payload }
          }
          default: {
               return state;
          }
     }
}
