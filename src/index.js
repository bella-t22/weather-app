import './app.css';

const location = document.querySelector('#location');
const extendLocation = document.querySelector('#extend-location');
const temp = document.querySelector('#temp');
const condition = document.querySelector('#condition');
const icon = document.querySelector('#condition-icon');
const feelsLike = document.querySelector('#feels-like');
const wind = document.querySelector('#wind');
const precip = document.querySelector('#precip');
const humidity = document.querySelector('#humidity');
const uv = document.querySelector('#uv');
const lastUpdated = document.querySelector('#last-updated');

const defaultLocation = async () => {
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=17a1fc3fa922438dbbe01411211711&q=London&days=3&aqi=yes&alerts=no', {mode: 'cors'});
    const data = await response.json();
    location.textContent = `${data.location.name},`;
    extendLocation.textContent = `${data.location.region}, ${data.location.country}`;
    temp.textContent = data.current.temp_f;
    condition.textContent = data.current.condition.text;
    icon.src = data.current.condition.icon;
    feelsLike.textContent = data.current.feelslike_f;
    wind.textContent = `${data.current.wind_mph}, ${data.current.wind_dir}`;
    precip.textContent = data.current.precip_in;
    humidity.textContent = data.current.humidity;
    uv.textContent = data.current.uv;
    lastUpdated.textContent = data.current.last_updated;
}

defaultLocation();

const searchLocation = async (userInput) => {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=17a1fc3fa922438dbbe01411211711&q=${userInput}&days=3&aqi=yes&alerts=no`, {mode: 'cors'});
    const data = await response.json();
    console.log(data);
    console.log('location:', data.location.name, data.location.region, data.location.country);
    console.log('temp:', data.current.temp_f);
    console.log('condition:', data.current.condition.text);
    console.log('icon:', data.current.condition.icon)
    console.log('feels like:', data.current.feelslike_f);
    console.log('wind:', data.current.wind_mph, data.current.wind_dir);
    console.log('precip:', data.current.precip_in);
    console.log('humidity:', data.current.humidity);
    console.log('uv index:', data.current.uv);
    console.log('last updated:', data.current.last_updated);
}

const switchToCelsius = (data) => {
    console.log('temp:', data.current.temp_c);
    console.log('feels like:', data.current.feelslike_c);
}