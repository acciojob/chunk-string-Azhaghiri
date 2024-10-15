function stringChop(str, size) {
  // your code here
	let chunks = [];

    // Loop through the string and slice it into chunks
    for (let i = 0; i < str.length; i += length) {
        // Slice the string from the current index 'i' up to 'i + length'
        chunks.push(str.slice(i, i + length));
    }

    // Return the array of chunks
    return chunks;

	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size)); 
