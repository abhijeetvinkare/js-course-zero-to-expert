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

  // function evenOdd(num) {
  //   return num % 2 == 0 ? 'even' : 'odd';
  // }

  // function maps(x){
  //   return x.map((num) => num * 2);
  // }

  // console.log(maps([1, 2, 3]))

  // A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

  // For example, take 153 (3 digits), which is narcissistic:

  //     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
  // and 1652 (4 digits), which isn't:

  //     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
  // The Challenge:

  // Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

  // This may be True and False in your language, e.g. PHP.

  // Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

  // function armStrong(number) {
  //   const numSplit = number.toString().split("").map(Number);
  //   const numlength = numSplit.length;

  //   const newArray = numSplit.map((num) => num ** numlength);
  //   const additon = newArray.reduce((accumulator, currentvalue) => {
  //     return accumulator + currentvalue;
  //   });

  //   return number === additon ? 'True' : 'False';

  // }

  // console.log(armStrong(153));
  // console.log(armStrong(1652));
  // console.log(armStrong(7));
  // console.log(armStrong(122));



//   An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// function isIsogram(str){
//   const letters = str.toLowerCase().split('');
//   return letters.every((letter, index) => letters.indexOf(letter) === index);
// }

// console.log(isIsogram("Hello"))
// console.log(isIsogram("Dermatoglyphics"))
// console.log(isIsogram("moose"))
// console.log(isIsogram("aba"))


// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

  return <div>Challenge8</div>;
}

export default Challenge8;
