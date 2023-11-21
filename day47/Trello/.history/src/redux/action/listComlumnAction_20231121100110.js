export const increment = (step) => {
     return {
          type: 'list/getList', playLoad: step
     }
}
export const decrement = (step) => {
     return {
          type: 'counter/decrement', playLoad: step
     }
}