// This function runs when the "Find" button is clicked
function getAction() {

    // Hide the title text
    document.getElementById("text").style.display = "none";

    // Hide the input box
    document.getElementById("countryname").style.display = "none";

    // Hide the button
    document.getElementById("button").style.display = "none";

    // Hide the gif
    document.getElementById("gif1").style.display = "none";

    // Get the country name entered by the user
    let countryname = document.getElementById("countryname").value;

    // Fetch country data from REST Countries API
    fetch(`https://restcountries.com/v3.1/name/${countryname}`)

        // Convert the response to JSON
        .then(res => res.json())

        // Work with the JSON data
        .then(data => {

            // Print full data in browser console (for debugging)
            console.log(data);

            // Loop through each country returned
            data.forEach(element => {

                // Print currencies object
                console.log(element.currencies);

                // Show the country flag
                document.getElementById("imgflag").innerHTML =
                    `<img src="${element.flags.png}" width="200" alt="Country Flag">`;

                // Create table rows with country details
                document.getElementById("table").innerHTML =
                    `
                    <tr>
                        <td>Country Name</td>
                        <td>${element.name.common}</td>
                    </tr>

                    <tr>
                        <td>Official Name</td>
                        <td>${element.name.official}</td>
                    </tr>

                    <tr>
                        <td>Currencies</td>
                        <td>
                            ${Object.values(element.currencies)[0].name}
                            (${Object.values(element.currencies)[0].symbol})
                        </td>
                    </tr>

                    <tr>
                        <td>Capital</td>
                        <td>${element.capital}</td>
                    </tr>

                    <tr>
                        <td>Languages</td>
                        <td>${Object.values(element.languages)[0]}</td>
                    </tr>

                    <tr>
                        <td>Population</td>
                        <td>${element.population}</td>
                    </tr>

                    <tr>
                        <td>Logo</td>
                        <td>
                            <img src="${element.coatOfArms.png}" width="50" alt="Coat of Arms">
                        </td>
                    </tr>
                    `;

                // Show Google Map of the country
                document.getElementById("mapimg").innerHTML =
                    `<iframe 
                        src="https://www.google.com/maps?q=${encodeURIComponent(element.name.common)}&output=embed">
                    </iframe>`;
            });
        });
}
