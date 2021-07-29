import * as d3 from "d3";

// DROPDOWN
const dropdown = (type, selections) => {
  let selectEle = d3.select(`#${type}-select-container`).append("select");

  if (type === "years") {
    selections.forEach( year => {
      let option = selectEle.append("option");
      option.text(year)
      option.property("value", year.slice(0, 4) + "-" + year.slice(-2))
    })
  }
}



// // SELECT PLAYER DROPDOWN
// const players = {
//   "": "",
//   "Stephen Curry": "201939",
//   "LeBron James": "2544",
//   "Kevin Durant": "201142",
//   "Kyrie Irving": "202681"
// };

// const playerContainerEle = document.getElementById("player-select-container");  

// const selectPlayerEle = document.createElement("select");
// playerContainerEle.append(selectPlayerEle);

// for ( const player in players ) {
//   const optionPlayerEle = document.createElement("option");
//   selectPlayerEle.append(optionPlayerEle);
//   optionPlayerEle.text = player;
//   optionPlayerEle.value = players[player];
// };

export default dropdown;