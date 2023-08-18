console.log(
  "===================================================================bai1====================================================="
);

const isNumber = function (arr) {
  return arr.every((items) => {
    return !Number.isNaN(items) && items !== Infinity;
  });
};

function sum(...argsNumber) {}
