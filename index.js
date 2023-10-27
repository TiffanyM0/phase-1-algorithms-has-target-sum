function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    let result =  target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === result) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  for 2 iterations = O(n^2);
*/

/* 
  Add your pseudocode here
  iterate over array; taking first element
    find the difference of target - first element;
    loops over array, check for element === difference;
      return true or false;
*/

/*
  Add written explanation of your solution here
  iterate over the array; 
    to get the no that when added to array[i] = target; get the difference;
    loop through array, check if any element match the difference;
    return true;
  if none; exit loop, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
