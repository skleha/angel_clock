

let margin = { top: 10, right: 30, bottom: 20, left: 30 },
  width = 500 - margin.left - margin.right,
  height = 300 - margin.top - margin.bottom;

let svg = d3.select("#my_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")")
  
let x = d3.scaleLinear()
  .domain([-10, 10])
  .range([0, width])

let xAxisCall = d3.axisBottom(x);
svg.append("g")
  .attr("class", "x-axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxisCall)

let y = d3.scaleLinear()
  .domain([-10, 10])
  .range([height, 0])

let yAxisCall = d3.axisLeft(y);
svg.append("g")
  .attr("class", "y-axis")
  .call(yAxisCall);

let minuteHandLine = svg
  .append("g")
  .append("path")
  .datum(minuteHand)
  .attr("d", d3.line()
    .x((d) => { return x(d.xPoint) })
    .y((d) => { return y(d.yPoint) }))
  .attr("stroke", "#8b4ef5")
  .style("fill", "none")
  .style("stroke-width", 5)

let hourHandLine = svg
  .append("g")
  .append("path")
  .datum(hourHand)
  .attr("d", d3.line()
    .x((d) => { return x(d.xPoint) })
    .y((d) => { return y(d.yPoint) }))
  .attr("stroke", "#8b4ef5")
  .style("fill", "none")
  .style("stroke-width", 5)

d3.select("#calc-button").on("click", () => {
  console.log('hi');
  console.log(minuteHand);

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
