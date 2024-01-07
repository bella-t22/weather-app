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
const btn = document.querySelector('button');

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

const searchLocation = async (value) => {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=17a1fc3fa922438dbbe01411211711&q=${value}&days=3&aqi=yes&alerts=no`, {mode: 'cors'});
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
    } catch {
        alert('Oops! That does not work. Try again!');
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const userInput = document.querySelector('input');
    searchLocation(userInput.value);
})

// const switchToCelsius = (data) => {
//     console.log('temp:', data.current.temp_c);
//     console.log('feels like:', data.current.feelslike_c);
// }