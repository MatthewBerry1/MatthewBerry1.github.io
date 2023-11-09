const apiKey = '96889c07a2fe067a9bf225b0cca41dfc';

const cityInput = document.getElementById('cityInput');

const searchBtn = document.getElementById('btn');

const weatherInfoDiv = document.getElementById('weather-info');

// EventListener to give the button function

searchBtn.addEventListener('click', () => {

    const cityName = cityInput.value.trim();

    // This checks if the name is empty. If so, the user is asked to enter a city name

    if (!cityName) {

        alert('Please enter a city name');

        return;

    }

    // This makes a fetch request to the OpenWeatherMap API

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)

        .then(response => {

            // This checks if the HTTP response is ok

            if (!response.ok) {

                throw new Error(`HTTP error! Status: ${response.status}`);

            }

            // This parses the response as JSON so that we can access the data within the code

            return response.json();

        })

        // This extracts the data from the response

        .then(data => {

            const weatherDescription = data.weather[0].description;

            const cityMainTemperature = data.main.temp;

            const windSpeed = data.wind.speed;

            // This updates the info with the data that has just been parsed

            weatherInfoDiv.innerHTML =
                `
    <p>Weather Description: ${weatherDescription}</p>
   
    <p>Main Temperature: ${cityMainTemperature} K</p>
   
    <p>Wind Speed: ${windSpeed} m/s</p>
    `
                ;

        })

        // If there is an issue, with fetching the information, an error message is displayed

        .catch(error => {

            console.error('Error:', error.message);
            
            alert('Could not fetch data, please search again');

        });

});



