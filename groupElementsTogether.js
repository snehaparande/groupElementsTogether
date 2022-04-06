const isArray = Array.isArray;

const areEqual = function (firstItem, secondItem) {
  const areArrays = isArray(firstItem) && isArray(secondItem);
  if (!areArrays) {
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

const locateGroup = function (element, set) {
  for (let index = 0; index < set.length; index++) {
    if (areEqual(element, set[index][0])) {
      return index;
    }
  }
  return -1;
};

const groupByIdentity = function (set) {
  const groupedElements = [];
  for (let index = 0; index < set.length; index++) {
    let position = locateGroup(set[index], groupedElements);
    if (position === -1) {
      position = groupedElements.length;
      groupedElements.push([]);
    }
    groupedElements[position].push(set[index]);
  }
  return groupedElements;
};

console.log(groupByIdentity([])); // []
console.log(groupByIdentity([1])); // [[1]]
console.log(groupByIdentity([1, 2, 2])); // [[1], [2, 2]]
console.log(groupByIdentity([1, 2, 2, 3, 1])); // [[1, 1], [2, 2], 3]
console.log(groupByIdentity([[1, 1], 1, [1, 1], 1, 2, 6])); // [[[1, 1], [1, 1]], [1, 1], [2], [6]]
