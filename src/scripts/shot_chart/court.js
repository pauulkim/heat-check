import * as d3 from "d3";

class Court {
  constructor(svg) {
    this.svg = svg;
  }
  
  display() {
    this.svg.append("rect")
      .attr('x', 170)
      .attr('y', 250)
      .attr('width', 160)
      .attr('height', 190)
  }

  display_backup() {
    const courtWidth = 500;
    const courtHeight = 470;

    // container dimensions
    const paintWidth = 160;
    const paintHeight = 190;

    const threePointSideYPos = 330;
    const threePointSideHeight = 140;

    const pi = Math.PI;

    // key 
    this.svg.append('rect')
        .attr('x', 170)
        .attr('y', 0)
        .attr('width', paintWidth)
        .attr('height', paintHeight)
        .attr('stroke', 'red')
        .attr("fill", "white")

    // three- point side left line
    this.svg.append("line")
        .attr("x1", 30)
        .attr("y1", 0)
        .attr("x2", 30)
        .attr("y2", threePointSideHeight)
        .attr("stroke", "red")

    // three - point side right line
    this.svg.append("line")
        .attr("x1", 470)
        .attr("y1", 0)
        .attr("x2", 470)
        .attr("y2", threePointSideHeight)
        .attr("stroke", "red");

    const threePointArc = d3.arc()
        .innerRadius(239)
        .outerRadius(240)
        .startAngle(-90 * (pi / 180))
        .endAngle(90 * (pi / 180))

    this.svg.append("path")
        .attr("d", threePointArc)
        .attr("fill", "red")
        .attr("transform", "rotate(180) translate(-250, -45)")

    // cover arc
    this.svg.append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 29.5)
        .attr('height', 140)
        .attr('fill', 'white');

    this.svg.append('rect')
        .attr('x', 470.5)
        .attr('y', 0)
        .attr('width', 29)
        .attr('height', 140)
        .attr('fill', 'white');

    // backboard
    this.svg.append("line")
        .attr("x1", 220)
        .attr("y1", 40)
        .attr("x2", 280)
        .attr("y2", 40)
        .attr("stroke", "red")
        .attr("stroke-width", "0.3%");

    // rim 
    this.svg.append("circle")
        .attr("cx", 250)
        .attr("cy", 52.5)
        .attr("r", 7.5)
        .attr("stroke", "red")
        .attr("fill", "none")

    // rim extension
    this.svg.append('rect')
        .attr('x', 246.5)
        .attr('y', 40)
        .attr('width', 7)
        .attr('height', 5)
        .attr('fill', 'red');

    // rim arc
    const rimArc = d3.arc()
        .innerRadius(40)
        .outerRadius(41)
        .startAngle(-90 * (pi / 180))
        .endAngle(90 * (pi / 180))

    this.svg.append("path")
        .attr("d", rimArc)
        .attr("fill", "red")
        .attr("transform", "rotate(180) translate(-250, -40)")

    // outside lines
    this.svg.append("rect")
          .attr("width", "100%")
          .attr("height", "100%")
          .style("stroke", "red")
          .style("stroke-width", 2)
          .style("fill", "none")
  }
}

export default Court;