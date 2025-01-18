"use strict";

try {
  // Replace 'Sok Dara' with your full name
  console.log("Student Name: Lao Thomorn");
  x = 10; // ReferenceError: x is not defined
} catch (error) {
  console.error(error.message); // Output: "x is not defined"
}

function demo() {
  "use strict";

  try {
    y = 28; // ReferenceError: y is not defined
  } catch (error) {
    console.error(error.message); // Output: "y is not defined"
  }
}

demo();

try {
  eval("var z = 58; delete z;"); // SyntaxError: Cannot delete variable declared with var
} catch (error) {
  console.error(error.message); // Output: "Cannot delete property 'z' of #<Object>"
}
