function stringChop(str, size) {
  // your code here
	size = parseInt(size);

  // Initialize an empty array to store the chunks
  let chunks = [];

  // If the size is invalid (e.g., less than 1), return an empty array
  if (size < 1) {
    return chunks;
  }

  // Loop through the string and slice it into chunks
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }

  // Return the array of chunks
  return chunks;

}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size)); 
