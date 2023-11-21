export const getList = (step) => {
     return {
          type: 'list/getList',
          payload: step
     }
}
export const dragHanppened = (step) => {
     console.log(step, "step")
     return {
          type: 'list/dragHanppened',
          payload: step
     }
}