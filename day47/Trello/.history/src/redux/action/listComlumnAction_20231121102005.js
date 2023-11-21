export const getList = (step) => {
     return {
          type: 'list/getList',
          playload: step
     }
}
export const dragHanppened = (step) => {
     console.log(step, "step")
     return {
          type: 'list/dragHanppened',
          playload: step
     }
}