import React from "react";

function Challenge7() {
  /*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

  const markData = {
    fullName: "Mark Miller",
    height: 1.69,
    weight: 78,
    calBmi: function () {
      this.bmi = this.weight / (this.height * this.height);
      return this.bmi;
    },
  };

  const johnData = {
    fullName: "John Smith",
    height: 1.95,
    weight: 92,
    calBmi: function () {
      this.bmi = this.weight / (this.height * this.height);
      return this.bmi;
    },
  };

  markData.calBmi();
  johnData.calBmi();

  console.log(markData.bmi, johnData.bmi);

  if (markData.bmi > johnData.bmi) {
    console.log(
      `${markData.fullName}'s ${markData.bmi} BMI is higher than ${johnData.fullName}'s BMI ${johnData.bmi} `
    );
  } else {
    console.log(
      `${johnData.fullName}'s ${johnData.bmi} BMI is higher than ${markData.fullName}'s BMI ${markData.bmi} `
    );
  }

  return <div>Challenge7</div>;
}

export default Challenge7;
