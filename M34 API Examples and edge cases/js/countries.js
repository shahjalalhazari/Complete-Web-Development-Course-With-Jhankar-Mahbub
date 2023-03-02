const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

loadCountries()


const displayCountries = (countries) => {
    const countriesContainer = document.getElementById('all-countries');
    countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        console.log(country.cca2);

        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <h4>Capital: ${country.capital ? country.capital[0] : "No Capital"}</h4>
            <button onclick="countryDetails('${country.cca2}'f)">Get Details</button>
        
        `
        countriesContainer.appendChild(countryDiv);
    });
}


const countryDetails = (code) => {
    console.log(`Details coming soon of ${code}`);
}