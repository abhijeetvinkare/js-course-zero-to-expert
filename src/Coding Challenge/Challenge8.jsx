import React from "react";

function Challenge8() {
  //     Welcome. In this challenge, you are asked to square every digit of a number and concatenate them.

  // For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

  // Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

  // Note: The function accepts an integer and returns an integer.

  // Happy Coding!


  // solution
  // function squareDigits(num) {

  //   const digit1 = num.toString().split("");
  //   const digit2 = digit1.map(Number);

  //   const result1 = digit2.map((n) => n * n);
  //   const result2 = result1.join("");
  //   const finalResult = Number(result2);

  //   console.log(digit1, digit2, result1, result2, finalResult);

  //   return finalResult;
  // }

  // // Test cases
  // console.log(squareDigits(9119)); // Output: 811181
  // console.log(squareDigits(765)); // Output: 493625
  // console.log(squareDigits(91545545));
  // console.log(squareDigits(0));




//  You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"


//solution

// function getMiddle(string) {
//   const splitString = string.split("")
//   const stringLength = splitString.length;
//   const getMiddleNum = stringLength / 2;
//   const checkisDecimal = getMiddleNum % 1 !== 0;

//   const middleLetters = [];
//   if (checkisDecimal) {
//     const round = Math.trunc(getMiddleNum)
//     middleLetters.push(splitString[round]);
//   }else{
//     middleLetters.push(splitString[getMiddleNum - 1]);
//     middleLetters.push(splitString[getMiddleNum]);
//   }

//   return middleLetters.join("")
// }

// getMiddle("Hello");
// console.log(getMiddle("Hellooooo"))



// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


//solution

// function test(pin) {

//   var isFourSixCheck = false; 
//   if (pin !== Number) {
//     const pintoString = pin.toString()
//     const pinLength = pintoString.length
//     if (pinLength >= 4 && pinLength <= 6) {
//       isFourSixCheck = true;
//     }
//   }else{
//     const pinLength = pin.length
//     if (pinLength >= 4 && pinLength <= 6) {
//       isFourSixCheck = true;
//     }
//   }

//   return isFourSixCheck;
// }
  
// console.log(test(1234))
// console.log(test("1234"))
// console.log(test(123))
// console.log(test("a123"))
// test(1234)


// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


// function digitize(n) {
//   const array = n.toString().split("");

//   const resultArray = []
  
//   for (let index = array.length - 1; index >= 0 ; index--) {
//     const element = array[index];
//     resultArray.push(element)
//   }

//   return resultArray.map(Number)
// }

// digitize(35231);
// console.log(digitize(35231))
// console.log(digitize(0))


// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOdd(num) {
  return num % 2 == 0 ? 'even' : 'odd';
}

console.log(evenOdd(10))

  return <div>Challenge8</div>;
}

export default Challenge8;
