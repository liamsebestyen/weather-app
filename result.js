document.addEventListener('DOMContentLoaded', function() {
    // Parse the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const cityName = urlParams.get('cityName');
    const temperature = urlParams.get('temperature');
    const weatherDescription = urlParams.get('weatherDescription');
    const highTemp = urlParams.get('high');
    const lowTemp = urlParams.get('low');
    const conditionShort = urlParams.get('weatherDescriptionSmall');
    const condition = urlParams.get('weatherDescription');
    const country = urlParams.get('country');


    //Variables into format of a string
    cityNameOutput = cityName+ ', ' + country;
    document.getElementById('cityName').textContent = cityNameOutput;
    currentOutput = "Current: "+ Math.round(temperature)+"C";
    document.getElementById('current').textContent = currentOutput;
    summaryOutput = 'H: '+Math.round(highTemp)+'C  , L: '+Math.round(lowTemp)+'C';
    document.getElementById('summary').textContent = summaryOutput;

   //Test to see if conditions correspond to image
    console.log(condition);
    console.log(conditionShort);
    // Logic to display correct image based on the conditions
   const imageElement = document.getElementById('weatherImage');

    // Set the source of the image based on the condition
   if (condition == "clear sky") {
        imageElement.src = "sunny.png"; 
    } else if (condition.includes('rain')) {
        imageElement.src = "rainy.png"; 
        console.log('rainy');
    } else if (condition === "overcast clouds"){
        console.log('cloudy');
        imageElement.src = "cloudy.png"; 

    } else if (condition.includes("clouds")){
        imageElement.src = "mostly-cloudy.png"
    }else{
        // Default image if condition does not match any known condition

        imageElement.src = "partly-cloudy.png"; // Replace "default.jpg" with the URL of the default image
    }

    


});