const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries()


const displayCountries = (countries) => {
    const countriesContainer = document.getElementById('all-countries');
    countries.forEach(country => {
        // console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');

        countryDiv.innerHTML = `
            <h5>Name: ${country.name.common}</h5>
            <h6>Capital: ${country.capital ? country.capital[0] : "No Capital"}</h6>
            <h6>Region: ${country.region}</h6>
            <h6>Language: ${Object.values(country.languages)[0]}</h6>
        `
        countriesContainer.appendChild(countryDiv);

        getRegions(country.region)
        console.log(country.region);
    });
}



function getRegions(region) {
    // const countryRegion = region.filter(region => region == "Europe");
    // console.log(countryRegion);
    let regions = [];
    for (region of regions) {
        if (regions.includes(region)) {
            console.log("Already Added");
        } else {
            regions.append(region)
        }
    }
    console.log(regions);
    return regions;
}