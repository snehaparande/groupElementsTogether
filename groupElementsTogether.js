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
    if (areEqual(groupedElement[0], array[index])) {
      groupedElement.push(array[index]);
    } else {
      remainingElements.push(array[index]);
    }
  }
  return [groupedElement].concat(groupElementsTogether(remainingElements));
};

console.log(groupElementsTogether([[1, 1], 1, [1, 1], 1, 2, 6]));
