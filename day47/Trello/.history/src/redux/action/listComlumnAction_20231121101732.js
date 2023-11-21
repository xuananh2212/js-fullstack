export const getList = (step) => {
     return {
          type: 'list/getList',
          playload: step
     }
}
export const dragHanppened = (step) => {
     return {
          type: 'list/dragHanppened',
          playload: step
     }
}