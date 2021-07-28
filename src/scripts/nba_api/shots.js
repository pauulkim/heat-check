class Shots {
  constructor(svg) {
    this.svg = svg
  }

  
}



let shotLocations;

export const getShotLocations = (playerId, yearId) => {
  fetch(`/getShotChart/${playerId}/${yearId}`)
    .then( apiResponse => apiResponse.json() )
    .then( data => {
      shotLocations = data.resultSets[0].rowSet;
      console.log(shotLocations)
    })
}



// 201939
// 2020-21

