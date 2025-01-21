# TypeScript TypeErrors Don't Guarantee Runtime Error Prevention

This repository demonstrates a scenario where a TypeScript TypeError doesn't prevent a runtime error.  While TypeScript's type system catches many errors during development, it's crucial to remember that it's a static type system; it doesn't guarantee the complete absence of runtime issues.

The `bug.ts` file contains a function `printNumber` that expects a number. However, it accepts a string argument without throwing an error during compilation.  The runtime will still attempt to execute `console.log("10")`, which will not result in an error but it is not the behavior expected by the function.

The `bugSolution.ts` file shows how to improve the function to handle both valid and invalid inputs, preventing potential runtime issues. 

This example highlights the importance of comprehensive testing even with static typing.