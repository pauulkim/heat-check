import * as d3 from "d3";
import Shots from "./scripts/nba_api/shots"


document.addEventListener("DOMContentLoaded", () => {
  // document.getElementById("year").innerHTML = "Select a year";

  // create the shot chart container
  const svg = d3.select("#shot-chart-container")
    .append("svg")                    
      .attr('width', 500)             
      .attr('height', 900)

  // create new shot instance to plot shots
  let shots = new Shots(svg, "2020-21", "201939")
  shots.display()

  

  
  // testing

  


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