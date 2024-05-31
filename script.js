const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];
  let subArray = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // If adding the current element doesn't exceed n, add it to the subarray
    if (currentSum + arr[i] <= n) {
      subArray.push(arr[i]);
      currentSum += arr[i];
    } else {
      // If adding the current element exceeds n, start a new subarray
      result.push(subArray);
      subArray = [arr[i]];
      currentSum = arr[i];
    }
  }

  // Push the last subarray into the result
  if (subArray.length > 0) {
    result.push(subArray);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
