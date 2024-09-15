async function getCountryInfo() {
    let cityName = document.getElementById('cityName').value;
    let resultDiv = document.getElementById('result');

    if (cityName) {

        try {
            let response = await axios.get(`https://restcountries.com/v3.1/capital/${cityName}`);
            let country = response.data[0];
            let flag = country.flags.svg;
            let countryName = country.name.common;
            let population = country.population.toLocaleString();
            let region = country.region;
            let languages = Object.values(country.languages).join(', ');

            resultDiv.innerHTML = `
            <img src="${flag}" alt="${countryName}">
            <h2>${countryName}</h2>
            <p><strong>Population:</strong> ${population}</p>
            <p><strong>Region:</strong> ${region}</p>
            <p><strong>Languages:</strong> ${languages}</p>
        `;
        } catch (error) {
            resultDiv.innerHTML = '<p>City not found or API error occurred.</p>';
        }
    }
}
