/**
 * Building a function
 *
 * 1. Naming: choose a function name
 * based on what the function is doing, a
 * function is a step by step process
 * to carry out a particular task
 * hence the name should be based
 *  on the task its performing.
 *
 * 2. Resources: since you would be building
 *  an algoithm, hence you should
 * know the datas needed for
 *  that particular task to function,
 * this are called parameters, next you identify
 * if there are any constant varaibles/data needed
 *  also this help us to identify
 * our needed return data for the function
 *
 * 3.Pseudocode or flowchart: next you need to organise your
 * thought on how to write an algorithm, preferably most
 * developer use pen and papper to write a pseudocode or
 * draw a flowchart
 *    psedocode: this is writing your step by step process to
 *     reach a task in a next to code base languague. it helps
 *      picture and write down all your steps before even
 *     attempting to build it in your computer
 *
 *     flowchart:  this can be imagined as the using of symboled
 *      shapes to address the different steps in your algorithm
 *      flow. there are different shape, like the square means start
 *       or stop etc
 */

/**
Exercise 1: Sum of Two Numbers
Task: Write a function sumTwoNumbers(a, b)
 that returns the sum of two numbers.
Hint:

Define the function with two parameters.
Use the return statement to return the result of adding the two parameters.
 */

/**
 *
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 * @description{returns the sum of two numbers (a,b)}
 *
 * @Pseudocode
 * {
 * - first identify the first and second number (a, b)
 * - return the sum of a and b (a +b)
 * }
 *
 * flowchat
 *
 */
function sumTwoNumbers(a, b) {
  const c = a + b;
  return c;
}

/**
 Exercise 3: Find the Largest Number in an Array
Task: Write a function findLargestNumber(arr) that returns the largest number in an array.
Hint:

Initialize a variable to store the largest number.
Loop through the array.
Compare each element with the current largest number.
Update the largest number if a larger number is found.
Return the largest number.

 */

/**
 *
 * @param {Array[Numbers]} arr
 * @returns {Number}
 * @description {find the largest index in array of numbers }
 * @constant { large, prev, curr}
 * @alias {prev = previous, curr = current}
 *
 * @psedocode {
 * - collect arr as a param/augument
 * - define large,prev, curr as let varibales
 * - loop  through the array using foreach || for || while
 * - write a function to take an item and compare it
 *      - assign prev = item
 *      - check if prev is greater the current{then large is prev}
 *      - compare large and the the output
 *      - else large is current if its larger than current
 * - assign element to curr
 * - assign the output to large
 * -return large after the loop is done
 * }
 */
function findLargestNumber(arr) {
  let large = 0;
  let prev = 0;
  let curr = 0;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    //assign previous  to current elemeent
    prev = element;

    //compare if prev is greater than large and curr
    if (prev > curr && prev > large) {
      large = prev;
      //compare if curr is greater than prev and large
    } else if (curr > large && curr > prev) {
      large = curr;
    } else {
      large = large;
    }

    //assign element to curr
    curr = element;
  }
  return large;
}

module.exports = { sumTwoNumbers, findLargestNumber };
