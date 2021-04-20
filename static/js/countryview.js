function populate_countryview(country_code) {
    // Set svg height and width 
    // var svgWidth = '100%';
    var svgWidth = 800;
    var svgHeight = 500;

    var svg = d3.select('#country_dashboard')
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

}

populate_countryview("AUS")