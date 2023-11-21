export const increment = (step) => {
     return {
          type: 'counter/increment', playLoad: step
     }
}
export const decrement = (step) => {
     return {
          type: 'counter/decrement', playLoad: step
     }
}