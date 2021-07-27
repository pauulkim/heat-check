import { testapi } from "./scripts/nba_api/shotchart_data"
import * as d3 from "d3";

document.addEventListener("DOMContentLoaded", () => {
  // document.getElementById("year").innerHTML = "Select a year";

  // testing

  // create the shot chart container
  let svg = d3.select("#shot-chart-container")
              .append("svg")                    
              .attr('width', 400)             
              .attr('height', 400)

  svg.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .style("stroke", "red")
    .style("stroke-width", 2)
    .style("fill", "none")

  svg.append("line")
    .attr("x1", 100)
    .attr("y1", 100)
    .attr("x2", 200)
    .attr("y2", 200)
    .style("stroke", "red")
    .style("stroke-width", 2)

  fetch('/test')
    .then(res => res.json())
    .then(data => console.log(data))
    
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