export const getShotLocations = async (playerId, yearId) => {
  const response = await fetch(`/getShotChart/${playerId}/${yearId}`) 
  console.log(response)
}



// 201939
// 2020-21

