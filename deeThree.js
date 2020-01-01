
let svg = d3.select("#my_dataviz")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400)
  .append("g")
  
let x = d3.scaleLinear()
  .domain([-10, 10])
  .range([0, 400])

let y = d3.scaleLinear()
  .domain([-10, 10])
  .range([400, 0])

let minuteHandLine = svg
  .append("g")
  .append("path")
  .datum(minuteHand)
  .attr("d", d3.line()
    .x((d) => { return x(d.xPoint) })
    .y((d) => { return y(d.yPoint) }))
  .attr("stroke", "#000000")
  .style("fill", "none")
  .style("stroke-width", 5)

let hourHandLine = svg
  .append("g")
  .append("path")
  .datum(hourHand)
  .attr("d", d3.line()
    .x((d) => { return x(d.xPoint) })
    .y((d) => { return y(d.yPoint) }))
  .attr("stroke", "#000000")
  .style("fill", "none")
  .style("stroke-width", 5)

let clockRing = svg
  .append("circle")
  .attr("cx", d => { return x(0) })
  .attr("cy", d => { return y(0) })
  .attr("r", 160)
  .attr("stroke", "#8b4ef5")
  .style("stroke-width", 7)
  .style("fill", "none")

let centerPoint = svg
  .append("circle")
  .attr("cx", d => { return x(0) })
  .attr("cy", d => { return y(0) })
  .attr("r", 8)
  .style("fill", "#000000")

d3.select("#calc-button").on("click", () => {
  
  minuteHandLine
    .datum(minuteHand)
    .attr("d", d3.line()
      .x((d) => { return x(d.xPoint) })
      .y((d) => { return y(d.yPoint) }))

  hourHandLine
    .datum(hourHand)
    .attr("d", d3.line()
      .x((d) => { return x(d.xPoint) })
      .y((d) => { return y(d.yPoint) }))
})
