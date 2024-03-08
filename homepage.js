document.getElementById('searchBar').addEventListener('submit', function(event) {
    event.preventDefault();
    var user_input = document.getElementById('searchInput').value;
    console.log("envoked");
    const api_url = "https://api.openweathermap.org/data/2.5/weather?q=" + user_input + "&appid=f6ce2db0d61d857687cf1fa323391ab2";
    fetch(api_url)
        .then(response => {
            if (response.ok) {
                console.log('success');
                return response.json(); // Return the parsed JSON data
            } else {
                console.log('Error');
                window.alert('Please Try Again: City Not Found');
                throw new Error('City not found');
            }
        })
        .then(data => {
            // Process the response data and update your webpage
            console.log(data); // Log the response data
            const cityName = data.name;
            const country = data.sys.country; 
            const temperature = data.main.temp - 273.15;
            const high = data.main.temp_max - 273.15;
            const low =  data.main.temp_min - 273.15;
            const weatherDescription = data.weather[0].description;
            const weatherDescriptionSmall = data.weather[0].main;
            


            // Manipulate the DOM to display the weather information

            console.log(cityName);
            console.log(temperature);
            console.log(weatherDescription);
            console.log(weatherDescriptionSmall);
            const dataParams = `?cityName=${cityName}&country=${country}&temperature=${temperature}&high=${high}&low=${low}&weatherDescription=${weatherDescription}&weatherDescriptionSmall=${weatherDescriptionSmall}`
            window.location.href = "result.html"+dataParams;

        })
        .catch(error => {
            console.error('Error:', error);
        });
});
