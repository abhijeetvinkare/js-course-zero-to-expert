import React from "react";

function Challenge3() {
  const testData = {
    billAmount1: 275,
    billAmount2: 40,
    billAmount3: 430,
  };

  // var billAmount1Tip;
  // if (testData.billAmount1 >= 50 && testData.billAmount1 <= 300) {
  //     billAmount1Tip = (testData.billAmount1)*(15/100);
  // }else{
  //     billAmount1Tip = (testData.billAmount1)*(20/100);
  // }

  // console.log(`Your Bill is ${testData.billAmount1} and your Tip is ${billAmount1Tip} and your Total is ${testData.billAmount1 + billAmount1Tip}`)

  const billAmount1Tip =
    testData.billAmount1 >= 50 && testData.billAmount1 <= 300
      ? testData.billAmount1 * (15 / 100)
      : testData.billAmount1 * (20 / 100);

  console.log(
    `Your Bill is ${
      testData.billAmount1
    } and your Tip is ${billAmount1Tip} and your Total is ${
      testData.billAmount1 + billAmount1Tip
    }`
  );


  const billAmount2Tip =
  testData.billAmount2 >= 50 && testData.billAmount2 <= 300
    ? testData.billAmount2 * (15 / 100)
    : testData.billAmount2 * (20 / 100);

console.log(
  `Your Bill is ${
    testData.billAmount2
  } and your Tip is ${billAmount2Tip} and your Total is ${
    testData.billAmount2 + billAmount2Tip
  }`
);

const billAmount3Tip =
testData.billAmount3 >= 50 && testData.billAmount3 <= 300
  ? testData.billAmount3 * (15 / 100)
  : testData.billAmount3 * (20 / 100);

console.log(
`Your Bill is ${
  testData.billAmount3
} and your Tip is ${billAmount3Tip} and your Total is ${
  testData.billAmount3 + billAmount3Tip
}`
);

  return <div>Challenge3</div>;
}

export default Challenge3;
