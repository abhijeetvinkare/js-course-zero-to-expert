import React from 'react'

function Challenge6() {

  const jonas = {
    firstName:"jonas",
    lastName:"shew",
    age:2037-1991,
    job:"teacher",
    friends:["michel", "peter", "steven"]
  }

  console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`)

  return (
    <div>Challenge6</div>
  )
}

export default Challenge6