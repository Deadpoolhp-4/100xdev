// // Simulating an asynchronous operation with a promise
function simulateAsyncOperation(success) {
  return new Promise((resolve, reject) => {
    // Simulating a delay (e.g., fetching data from a server)
    setTimeout(()=> {
      if (success) {
        resolve("Operation completed successfully!");
      } else {
        reject("Operation failed!");
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
}
// Using the Promise
simulateAsyncOperation(true)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

// The code that fetches data goes here
  // If successful, you call 'resolve' with the result
  // If there's an issue, you call 'reject' with an error

//   We either run and resolve the promise, or
// Some error occurs along the line and the promise is rejected
// in async func we dont have to write whole console.log to return the promise statement
// let value = await promise; 