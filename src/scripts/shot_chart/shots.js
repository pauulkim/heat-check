class Shots {
  constructor(svg, yearId, playerId) {
    this.svg = svg;
    this.yearId = yearId;
    this.playerId = playerId;
  }

  display() {
    fetch(`/getShotChart/${this.yearId}/${this.playerId}`)
      .then( apiResponse => apiResponse.json() )
      .then( data => {
        let result = data.resultSets[0].rowSet;
        let coordinates = result.map( ele => [ele[17], ele[18]])
        console.log(coordinates);

        this.svg.append("rect")
          .attr("width", "100%")
          .attr("height", "100%")
          .style("stroke", "red")
          .style("stroke-width", 2)
          .style("fill", "none")

        this.svg.append("g")
          .selectAll("circle")
          .data(coordinates)
          .enter()
          .append("circle")
            .attr("cx", function (d) { return d[0]; } )
            .attr("cy", function (d) { return d[1]; } )
            .attr("r", 2)
            .attr('transform', 'translate(250, 52.5)')
            .style("fill", "#69b3a2")
      })    
  }
}

export default Shots;



// test data:
// 201939
// 2020-21