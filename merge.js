function merge(arr1, arr2) {
  let result = [];
  let pos1 = 0;
  let pos2 = 0;

  while (pos1 < arr1.length && pos2 < arr2.length) {
    if (arr1[pos1] < arr2[pos2]) {
      result.push(arr1[pos1]);
      pos1++;
    } else {
      result.push(arr2[pos2]);
      pos2++;
    }
  }

  while (pos1 < arr1.length) {
    result.push(arr1[pos1]);
    pos1++;
  }

  while (pos2 < arr2.length) {
    result.push(arr2[pos2]);
    pos2++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
}

module.exports = { merge, mergeSort };
