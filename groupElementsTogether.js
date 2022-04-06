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

const locate = function (element, set) {
  for (let index = 0; index < set.length; index++) {
    if (areEqual(element, set[index][0])) {
      return index;
    }
  }
};

const isPresent = function (element, set) {
  for (let index = 0; index < set.length; index++) {
    if (areEqual(element, set[index][0])) {
      return true;
    }
  }
  return false;
};

const groupByIdentity = function (set) {
  if (set.length === 0) {
    return [];
  }
  const groupedElements = [[set[0]]];
  for (let index = 1; index < set.length; index++) {
    if (isPresent(set[index], groupedElements)) {
      const position = locate(set[index], groupedElements);
      groupedElements[position].push(set[index]);
    } else {
      groupedElements.push([set[index]]);
    }
  }
  return groupedElements;
};

console.log(groupByIdentity([])); // []
console.log(groupByIdentity([1])); // [[1]]
console.log(groupByIdentity([1, 2, 2])); // [[1], [2, 2]]
console.log(groupByIdentity([1, 2, 2, 3, 1])); // [[1, 1], [2, 2], 3]
console.log(groupByIdentity([[1, 1], 1, [1, 1], 1, 2, 6])); // [[[1, 1], [1, 1]], [1, 1], [2], [6]]
