import React from 'react'

function Challenge2() {

    const teamDolphin = ((96+108+89)/3).toFixed();
    const teamColas = ((88+91+110)/3).toFixed();

    console.log(teamDolphin, teamColas)

    if (teamColas === teamDolphin) {
        console.log("Draw")
    }else if (teamColas > teamDolphin) {
        console.log("Team Colas Wins.")
    }else{
        console.log("Team Dolphin Wins.")
    }


  return (
    <div>Challenge2</div>
  )
}

export default Challenge2