function stringChop(str, size) {
  // your code here
	size = parseInt(size); // Ensure size is a number
  if (str === null || size <= 0) {
    return [];
  }

  // Step 2: Create an array to store the chunks
  let result = [];

  // Step 3: Iterate over the string and slice it into chunks
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  } 

  // Step 4: Return the array of chunks
  return result;

}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size)); 
