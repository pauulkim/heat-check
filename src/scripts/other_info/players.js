import fetch from "node-fetch";

// get list of all players in a year
const getAllPlayers = async (year) => {
  fetch(`/getAllPlayers/${year}`)
    .then()
}



const getAllPlayers = async() => {
  const response = await fetch('getAllPlayers');
}

getAllPlayers()

  // .then(res => res.json())
  // .then(data => {
  //   let test = JSON.parse(data);
  //   return test;
  // })
  

  // async function test() {
  //   let t = await fetch('/getAllPlayers')
  //   return t
  // }


  // test().then(apiResponse => (data = apiResponse.json()))
    // .then(data => data.resultSets[0].rowSet)