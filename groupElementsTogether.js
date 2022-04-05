const areEqual = function (firstItem, secondItem) {
  if (Array.isArray(firstItem) && Array.isArray(secondItem)) {
    if (firstItem.length !== secondItem.length) {
      return false;
    }
    for (let index = 0; index < firstItem.length; index++) {
      if (!areEqual(firstItem[index], secondItem[index])) {
        return false;
      }
    }
    return true;
  }
  return firstItem === secondItem;
};

const groupElementsTogether = function (array) {
  if (array.length === 0) {
    return [];
  }
  const groupedElement = [array[0]];
  const remainingElements = [];
  
  for (let index = 1; index < array.length; index++) {
    let arrayToBePushed = remainingElements;
    if (areEqual(groupedElement[0], array[index])) {
      arrayToBePushed = groupedElement;
    }
    arrayToBePushed.push(array[index]);
  }
  return [groupedElement].concat(groupElementsTogether(remainingElements));
};

console.log(groupElementsTogether([])); // []
console.log(groupElementsTogether([1])); // [[1]]
console.log(groupElementsTogether([1, 2, 2])); // [[1], [2, 2]]
console.log(groupElementsTogether([1, 2, 2, 3, 1])); // [[1, 1], [2, 2], 3]
console.log(groupElementsTogether([[1, 1], 1, [1, 1], 1, 2, 6])); // [[[1, 1], [1, 1]], [1, 1], [2], [6]]
