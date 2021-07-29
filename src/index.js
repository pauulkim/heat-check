import * as d3 from "d3";
import Shots from "./scripts/shot_chart/shots"
import Court from "./scripts/shot_chart/court"

document.addEventListener("DOMContentLoaded", () => {
  // YEAR SELECTION DROPDOWN
  const years = ["", "2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020", "2020-2021"]
  
  const yearContainerEle = document.getElementById("year-select-container");  

  const selectYearEle = document.createElement("select");
  yearContainerEle.append(selectYearEle)
  
  years.forEach( year => {
    const optionYearEle = document.createElement("option");
    selectYearEle.appendChild(optionYearEle)
    optionYearEle.text = year
  })

  
  selectYearEle.addEventListener("change", (event) => {
    let selectedYear = event.target.value
    // return selectedYear;
    console.log(selectedYear)
  })
  
  


  // SHOT CHART
  // shot chart svg container
  const svg = d3.select("#shot-chart-container")
    .append("svg")                    
      .attr('width', 500)             
      .attr('height', 500)

  // display court
  let court = new Court(svg)
  court.display_backup()

  // display shots
  let shots = new Shots(svg, "2020-21", "201939")
  shots.display()
})