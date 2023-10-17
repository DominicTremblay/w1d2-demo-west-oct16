// Write a node program that takes in an unlimited number
// of command line arguments, goes through each and prints
// out the sum of them. If any argument is not a whole number,
// skip it. Do support negative numbers though. If any argument
// is not a number, output an error message. We need at least 2 arguments.

// extract and store the command-line arguments
// (we will need to remove the first 2 elements of the array)

const args = process.argv.slice(2);

console.log('args:', args);
// Edge case: We need at least 2 arguments.
if (args.length < 2) {
  console.error(`Error: please enter at least 2 args`);
  process.exit();
}

// declare a container for total
let total = 0;

// iterate over the arguments
// for of
// c-style => for (let i=0; i< arr.lenght; i++)
// forEach
// for in

for (let arg of args) {
  // Edge case: If any argument is not a number, output an error message.
  if (isNaN(Number(arg))) {
    console.error(`Error: please enter only numbers`);
    // stop the execution here
    process.exit();
  }

  // Edge case: If any argument is not a whole number, skip it
  // add the arguments to the total
  if (Number.isInteger(Number(arg))) {
    total += Number(arg); // typecasting
  }
  console.log('arg:', arg, 'Total:', total);
}

// print out the total
console.log('Total:', total);
