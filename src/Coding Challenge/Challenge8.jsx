import React from "react";

function Challenge8() {
  //     Welcome. In this challenge, you are asked to square every digit of a number and concatenate them.

  // For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

  // Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

  // Note: The function accepts an integer and returns an integer.

  // Happy Coding!

  function squareDigits(num) {

    const digit1 = num.toString().split("");
    const digit2 = digit1.map(Number);

    const result1 = digit2.map((n) => n * n);
    const result2 = result1.join("");
    const finalResult = Number(result2);

    console.log(digit1, digit2, result1, result2, finalResult);

    return finalResult;
  }

  // Test cases
  console.log(squareDigits(9119)); // Output: 811181
  console.log(squareDigits(765)); // Output: 493625
  console.log(squareDigits(91545545)); // 
  
  return <div>Challenge8</div>;
}

export default Challenge8;
