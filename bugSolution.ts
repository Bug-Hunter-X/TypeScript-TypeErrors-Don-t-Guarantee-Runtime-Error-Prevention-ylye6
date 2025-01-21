function printNumber(num: number): void {
  console.log(num);
}

function printNumberSafe(num: any): void {
  if (typeof num === 'number') {
    console.log(num);
  } else {
    console.error("Invalid input: Expected a number.");
  }
}

printNumber(10); // Works fine
printNumberSafe("10"); // Handles the string input gracefully
printNumberSafe(10); // Works fine