async function getWeather() 
{
    const city = document.getElementById("city").value;

    if (city === "") 
    {
        alert("Please enter a city name");
        return;
    }

    const url = 'https://wttr.in/${city}?format=j1&lang=en';

    try 
    {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("weather").style.display = "block";

        document.getElementById("cityName").innerText = city;
        document.getElementById("temp").innerText = "Temperature: " + data.current_condition[0].temp_C + " °C";
        document.getElementById("desc").innerText = "Condition: " + data.current_condition[0].weatherDesc[0].value;
        document.getElementById("humidity").innerText = "Humidity: " + data.current_condition[0].humidity + "%";
        document.getElementById("wind").innerText = "Wind Speed: " + data.current_condition[0].windspeedKmph + " km/h";

    }
     catch (error) 
    {
        alert("Error fetching data");
    }
}
