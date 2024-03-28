function searchCountry() {
    const searchInput = document.getElementById('searchInput').value;
    fetch(`https://restcountries.com/v3.1/name/${searchInput}`)
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.error('Error:', error));
}

function displayResults(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    data.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');

        const countryName = document.createElement('h2');
        countryName.textContent = country.name.common;

        const moreDetailsBtn = document.createElement('button');
        moreDetailsBtn.textContent = 'More Details';
        moreDetailsBtn.addEventListener('click', () => showCountryDetails(country));

        countryDiv.appendChild(countryName);
        countryDiv.appendChild(moreDetailsBtn);
        resultsContainer.appendChild(countryDiv);
    });
}
function showCountryDetails(country) {
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('country-details');
    detailsContainer.classList.add('center'); 

    const flagImg = document.createElement('img');
    flagImg.src = country.flags.svg;
    flagImg.alt = `Flag of ${country.name.common}`;
    flagImg.classList.add('flag-img'); 

    const countryName = document.createElement('h3');
    countryName.textContent = country.name.common;

    const capital = document.createElement('p');
    capital.textContent = `Capital: ${country.capital}`;

    const population = document.createElement('p');
    population.textContent = `Population: ${country.population.toLocaleString()}`;

    const currency = document.createElement('p');
    currency.textContent = `Currency: ${Object.values(country.currencies)[0].name}`;

    const language = document.createElement('p');
    language.textContent = `Language: ${Object.values(country.languages)[0]}`;

    detailsContainer.appendChild(flagImg);
    detailsContainer.appendChild(countryName);
    detailsContainer.appendChild(capital);
    detailsContainer.appendChild(population);
    detailsContainer.appendChild(currency);
    detailsContainer.appendChild(language);

 
    const resultsContainer = document.getElementById('results');
    resultsContainer.insertAdjacentElement('afterend', detailsContainer);
}

