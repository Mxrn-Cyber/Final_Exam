function createCounter() {
  let count = 0;

  return function () {
    console.log("Student Name: Lao Thomorn"); // Replace with your name
    count++;
    return count;
  };
}

// Create a counter instance
const counter = createCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter());
