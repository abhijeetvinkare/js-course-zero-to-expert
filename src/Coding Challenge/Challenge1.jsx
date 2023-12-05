import React from "react";

function Challenge1() {
  const markData = {
    height: 1.69,
    weight: 78,
  };

  const johnData = {
    height: 1.95,
    weight: 92,
  };

  const markBMI = markData.weight / (markData.height * markData.height);
  const johnBMI = johnData.weight / (johnData.height * johnData.height);
  const markHeigherBMI = markBMI > johnBMI;

  console.log(markBMI, johnBMI, markHeigherBMI);

  if (markHeigherBMI) {
    console.log(
      `Mark's BMI (${markBMI.toFixed(
        1
      )}) is higher than John's BMI (${johnBMI.toFixed(1)})`
    );
  } else {
    console.log(
      `John's BMI (${johnBMI.toFixed(
        1
      )}) is higher than Marks's BMI (${markBMI.toFixed(1)})`
    );
  }

  const number1 = 0;
  console.log(Boolean(number1));

  const number2 = 1;
  console.log(Boolean(number2));

  // const number3 = prompt("Enter a Number: ");
  // console.log(typeof number3);

  // if (number3 === 18) {  // '18' === 18  Strict Check with type
  //   console.log("Number");
  // } else {
  //   console.log("String");
  // }

  // if (number3 == 18) {  // '18' == 18 Loose check 
  //   console.log("Number");
  // } else {
  //   console.log("String");
  // }


  return <div>Challenge1</div>;
}

export default Challenge1;
