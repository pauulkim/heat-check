import { testapi } from "./scripts/nba_api/shots"
import * as d3 from "d3";
import fetch from "node-fetch";
import { getShotLocations } from "./scripts/nba_api/shots"

document.addEventListener("DOMContentLoaded", () => {
  // document.getElementById("year").innerHTML = "Select a year";

  // create the shot chart container
  const svg = d3.select("#shot-chart-container")
    .append("svg")                    
      .attr('width', 500)             
      .attr('height', 500)

  svg.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .style("stroke", "red")
    .style("stroke-width", 2)
    .style("fill", "none")

  const data = [
    [10, 20], [20, 100], [200, 50],
    [25, 80], [10, 200], [150, 75],
    [10, 70], [30, 150], [100, 15],
    [5,5], [10,5], [1,1]
  ]

  svg.append("g")
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return d[0]; } )
      .attr("cy", function (d) { return d[1]; } )
      .attr("r", 2)
      .attr('transform', 'translate(250, 52.5)')
      .style("fill", "#69b3a2")

  
  // testing

  


  getShotLocations("2020-21", "201939")


  // const fruits = ['apple', 'mango', 'banana', 'orange'];

  // d3.select('ul')
  //   .selectAll('li')
  //   .data(fruits)
  //   .enter()
  //   .append('li')
  //   .text(function(d) { return d; });

  // end testing
})


// createElement