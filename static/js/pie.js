// PIE CHART FOR CO2 data 

function d3PieChart(){
  url = "/top20CO2"
  d3.json(url, function(data) {
      
      console.log(data);

      // set the dimensions and margins of the graph
      var width = 2800;
      var height = 800;
      var margin = 40;

      // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
      var radius = Math.min(width, height) / 2 - margin;
      console.log("here");
      // append the svg object to the div called 'pieChart'
      var svg = d3.select("#myPieChart")
      .append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      // Create dummy data
      var pie_data = {}
      data
      // .slice(0,4)
      .map(obj=>{
          pie_data[obj.country_code] = obj["2015"]
      });

      // set the color scale
      var color = d3.scaleOrdinal()
      .domain(pie_data)
      .range(data.map(obj=>obj.color))
      


      // Compute the position of each group on the pie:
      var pie = d3.pie()
      .value(function(d) {return d.value; })
      var data_ready = pie(d3.entries(pie_data))

      // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
      
      var arcGenerator = d3.arc()
        .innerRadius(0)
        .outerRadius(radius)
      
      svg.selectAll('mySlices')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', arcGenerator
      .innerRadius(0)
      .outerRadius(radius)
      )
      .attr('fill', function(d){ return(color(d.data.key)) })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7)

      svg.selectAll('mySlices')
      .data(data_ready)
      .enter()
      .append('text')
      .text(function(d){ return (d.data.key)})
      // .attr("x",300)
      // .attr("y",300)
      // .attr("fill", "white")
      .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
      .style("text-anchor", "middle")
      .style("font-size", 11)


      
  })
}