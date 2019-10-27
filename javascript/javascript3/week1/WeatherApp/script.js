const APIkey = '820242d447faf0f65b4cb7dd2b9224fd';
const APIurl = 'http://api.openweathermap.org/data/2.5/weather?q=';
const APIurl2= '&appid=' + APIkey;


const getLocationButton = document.getElementById('getLocation');
getLocationButton.addEventListener('click' , getLocation);

const weatherByCityButton = document.getElementById('getCityName')
weatherByCityButton.addEventListener('click' , getWeather);


var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

async function getWeather() {
    const cityName = document.getElementById('cityName').value;
    const address = APIurl + cityName + APIurl2;
    console.log(address);
    const response = await fetchURL(address).then((value) => {return value});
    // const response = fetchURL(address);    
    console.log(response);
    exportData(response);
    return response;
}

async function fetchURL(address) {
    const data = await fetch(address).then((value) => {return value.json()});
    return data;
}

function exportData(response) {
    const city = document.createElement('p');
    city.textContent = `City : ${response.name}`
    document.body.appendChild(city)

    const temperature = document.createElement('p');
    temperature.textContent = `Temperature : ${response.main.temp - 273}`
    document.body.appendChild(temperature)

    const weatherIcon = document.createElement('img');
    weatherIcon.src = 'http://openweathermap.org/img/wn/' + response.weather[0].icon + '@2x.png'
    document.body.appendChild(weatherIcon);

    const windSpeed = document.createElement('p');
    windSpeed.textContent = `Wind speed : ${response.wind.speed}`;
    document.body.appendChild(windSpeed);

    const cloudPercent = document.createElement('p');
    cloudPercent.textContent = `cloud percent : ${response.clouds.all}%`;
    document.body.appendChild(cloudPercent);

    const sunRise = document.createElement('p');
    sunRise.textContent = `Sunrise : ${unix2time(response.sys.sunrise)}`;
    document.body.appendChild(sunRise);

    const sunSet = document.createElement('p');
    sunSet.textContent = `Sunset : ${unix2time(response.sys.sunset)}`;
    document.body.appendChild(sunSet);
}

function unix2time(unix_timestamp) {
    const date = new Date(unix_timestamp*1000);
    // Hours part from the timestamp
    const hours = date.getHours();
    // Minutes part from the timestamp
    const minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    const seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
}