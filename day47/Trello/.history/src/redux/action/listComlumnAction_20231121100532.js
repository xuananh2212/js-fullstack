export const getList = (step) => {
     return {
          type: 'list/getList', playLoad: step
     }
}
export const dragHanppened = (step) => {
     return {
          type: 'list/dragHanppened', playLoad: step
     }
}