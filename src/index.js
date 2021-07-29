import * as d3 from "d3";
import Shots from "./scripts/shot_chart/shots"
import Court from "./scripts/shot_chart/court"

document.addEventListener("DOMContentLoaded", () => {
  // EMPTY SHOT CHART
  // shot chart svg container
  const svg = d3.select("#shot-chart-container")
    .append("svg")                    
      .attr('width', 500)             
      .attr('height', 500)

  // display court
  let court = new Court(svg)
  court.display_backup()



  // SELECT YEAR DROPDOWN
  const years = ["", "2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020", "2020-2021"];
  
  const yearContainerEle = document.getElementById("year-select-container");  

  const selectYearEle = document.createElement("select");
  yearContainerEle.append(selectYearEle);
  
  years.forEach( year => {
    const optionYearEle = document.createElement("option");
    selectYearEle.append(optionYearEle);
    optionYearEle.text = year;
    optionYearEle.value = year.slice(0, 4) + "-" + year.slice(-2);
  });

  // SELECT PLAYER DROPDOWN
  const players = {
    "": "",
    "Stephen Curry": "201939",
    "LeBron James": "2544",
    "Kevin Durant": "201142",
    "Kyrie Irving": "202681"
  };
  
  const playerContainerEle = document.getElementById("player-select-container");  

  const selectPlayerEle = document.createElement("select");
  playerContainerEle.append(selectPlayerEle);

  for ( const player in players ) {
    const optionPlayerEle = document.createElement("option");
    selectPlayerEle.append(optionPlayerEle);
    optionPlayerEle.text = player;
    optionPlayerEle.value = players[player];
  };
  

  // EVENT LISTENERS FOR SELECTED YEAR/PLAYER
  selectYearEle.addEventListener("change", (e) => {
    let selectedYear = e.target.value;
    console.log(selectedYear);

   




  })
  
  



  // // display shots
  // let shots = new Shots(svg, "2020-21", "201939")
  // shots.display()
})