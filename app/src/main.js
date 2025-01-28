import * as d3 from "d3";
import axios from "axios";

const fetchFiles = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/files");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch GitHub stars:", error);
    return [];
  }
};

const data = await fetchFiles();

// console.log(data);

const svg = d3.select("svg"),
  margin = { top: 20, right: 30, bottom: 50, left: 40 },
  width = +svg.attr("width") - margin.left - margin.right,
  height = +svg.attr("height") - margin.top - margin.bottom,
  g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

const x = d3
  .scaleBand()
  .domain(data.map((d) => d.name))
  .range([0, width])
  .padding(0.1);

const y = d3
  .scaleLinear()
  .domain([0, d3.max(data, (d) => d.size)])
  .nice()
  .range([height, 0]);

g.append("g")
  .attr("class", "axis axis--x")
  .attr("transform", `translate(0,${height})`)
  .call(d3.axisBottom(x));

g.append("text")
  .attr("class", "axis-label")
  .attr("x", width / 2)
  .attr("y", height + margin.bottom - 10)
  .attr("text-anchor", "middle")
  .style("font-size", "14px")
  .text("Applications");

g.append("g").attr("class", "axis axis--y").call(d3.axisLeft(y));

g.append("text")
  .attr("class", "axis-label")
  .attr("transform", "rotate(-90)")
  .attr("y", -margin.left + 10)
  .attr("x", -height / 2)
  .attr("text-anchor", "middle")
  .style("font-size", "14px")
  .text("Sizes");

g.selectAll(".bar")
  .data(data)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", (d) => x(d.name))
  .attr("y", (d) => y(d.size))
  .attr("width", x.bandwidth())
  .attr("height", (d) => height - y(d.size));
