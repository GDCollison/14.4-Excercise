//Refactor
// function filterOutOddss() {
//     const nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num){
//         return num % 2 === 0
//     });
// }
//ES2015 Version
const filterOutOdds = (...arguments) => arguments.filter(v => v % 2 === 0);

//findMin
const findMin = (...arguments) => Math.min(...arguments);

//mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

//doubleAndReturnArguments
const doubleAndReturnArguments = (arr, ...arguments) => [...arr, ...arguments.map(v => v * 2)];

//Slice and Dice
  //Challenge 1
  const removeRandom = items => {
  let sacr = Math.floor(Math.random() * items.length);
    return [...items.slice(0, sacr), ...items.slice(sacr + 1)];
    };

  //Challenge 2
  const extend = (array1, array2) => {
    return [...array1, ...array2];
    };

  //Challenge 3
  const addKeyVal = (obj, key, val) => {

    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  };

  //Challenge 4
  const removeKey = (obj, key) => {

    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
  };

  //Challenge 5
  const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  };
  
  //Challenge 6
  const update = (obj, key, val) => {
  
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  };
