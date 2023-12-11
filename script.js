
const options = {
    method: 'GET',
    headers: {
            'X-RapidAPI-Key': '2158312a39msh01acda96ecf4e83p125a01jsn106d10cc15a4',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getDelhiWeather = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            temp3.innerHTML = response.temp;
            humidity3.innerHTML = response.humidity;
            wind_speed3.innerHTML = response.wind_speed;
        })
        .catch(err => console.error(err));
};

const getBangaloreWeather = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bengaluru', options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            temp4.innerHTML = response.temp;
            humidity4.innerHTML = response.humidity;
            wind_speed4.innerHTML = response.wind_speed;
        })
        .catch(err => console.error(err));
};


const getWeather = (city)=>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        //cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        //temp3.innerHTML = (city.toLowerCase() === 'delhi') ? response.temp : '';
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}

Submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value,temp,temp2,humidity,humidity2,wind_speed,wind_speed2);
    getDelhiWeather();
    getBangaloreWeather();
})

document.addEventListener("DOMContentLoaded", () => {
    // Set temp3 to Delhi temperature when the page loads
    getDelhiWeather();
});

document.addEventListener("DOMContentLoaded", () => {
    getBangaloreWeather();
});