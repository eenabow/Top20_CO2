function optionChanged(country_code) {
    // All other country view functions populate on option changed in dropdown here
    populate_countryview(country_code)

    console.log(country_code)
};

function init_dashboard() {
    var countrySelector = d3.select("#selDataset");
    d3.csv("data/top20_CO2df.csv").then(countries=> {
        countries.forEach(row => {
            countrySelector.append("option").text(row["Country Name"]).property("value", row["Country Code"])
        });
    });
};

init_dashboard();