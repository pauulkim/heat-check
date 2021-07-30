import * as d3 from "d3";
import Shots from "./scripts/shot_chart/shots";
import Court from "./scripts/shot_chart/court";
import dropdown from "./scripts/other_info/dropdown"

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

  // CREATE DROPDOWNS
  // year
  const years = ["", "2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020", "2020-2021"];
  dropdown("years", years);

  // players
  const players = {
    "": "",
    "Stephen Curry": "201939",
    "LeBron James": "2544",
    "Kevin Durant": "201142",
    "Kyrie Irving": "202681"
  };
  dropdown("players", players)

  // EVENT LISTENER FOR SELECTED YEAR/PLAYER
  let year;
  let player;
  
  const selectDivs = d3.select("#sc-select-container").selectAll("div")
  selectDivs.on("change", (e) => {  
    if (e.target.id === "years") year = e.target.value;
    if (e.target.id === "players") player = e.target.value;
  
    if ((year !== "" && player !== "" && year !== undefined && player !== undefined)) {
      svg.select("#coordinates-container").remove()
      let shots = new Shots(svg, year, player)
      shots.display()
    }
  })
})