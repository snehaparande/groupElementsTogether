const areEqual = function (firstItem, secondItem) {
  if (!(Array.isArray(firstItem) && Array.isArray(secondItem))) {
    return firstItem === secondItem;
  }
  if (firstItem.length !== secondItem.length) {
    return false;
  }
  for (let index = 0; index < firstItem.length; index++) {
    if (!areEqual(firstItem[index], secondItem[index])) {
        return false;
      }
    }
    return true;
};

const groupElementsTogether = function (set) {
  if (set.length === 0) {
    return [];
  }
  let remainingSet = set.slice(0);
  const groupedElements = [];
  
  for (let index = 0; index < remainingSet.length; index++) {
    const identicalElements = [remainingSet[0]];
    const remainingElements = [];

    for (let index = 1; index < remainingSet.length; index++) {
      let arrayToBePushed = remainingElements;
      if (areEqual(identicalElements[0], remainingSet[index])) {
        arrayToBePushed = identicalElements;
      }
      arrayToBePushed.push(remainingSet[index]);
    }
    groupedElements.push(identicalElements);
    remainingSet = remainingElements.slice(0);
    index = -1;
  }
  return groupedElements;
};

console.log(groupElementsTogether([])); // []
console.log(groupElementsTogether([1])); // [[1]]
console.log(groupElementsTogether([1, 2, 2])); // [[1], [2, 2]]
console.log(groupElementsTogether([1, 2, 2, 3, 1])); // [[1, 1], [2, 2], 3]
console.log(groupElementsTogether([[1, 1], 1, [1, 1], 1, 2, 6])); // [[[1, 1], [1, 1]], [1, 1], [2], [6]]
