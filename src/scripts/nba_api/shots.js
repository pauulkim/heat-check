// class Shots {
//   constructor(svg, playerId, ) {
//     this.svg = svg
//   }


// }



let shotLocations;

export const getShotLocations = (yearId, playerId) => {
  fetch(`/getShotChart/${yearId}/${playerId}`)
    .then( apiResponse => apiResponse.json() )
    .then( data => {
      shotLocations = data.resultSets[0].rowSet;
      console.log(shotLocations)
    })
}



// 201939
// 2020-21

