const apiKey = '7bb987b05cf9dc56495fd7b264adb12a';
// const api = 'https://api.openweathermap.org/data/2.5/weather?q=london&appid=7bb987b05cf9dc56495fd7b264adb12a';
const apiHead = 'https://api.openweathermap.org/data/2.5/weather?q=';
const cityName = document.querySelector('.city');
const temp = document.querySelector('.temp');
const des = document.querySelector('.description');
const humid = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const icon = document.querySelector('.icon');

const btn = document.getElementById('submitBtn');
var city = 'Warangal';
var api = "";

function fetchData(){
    fetch(
        api
    )
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
        cityName.innerHTML = 'Weather in ' + city;
        var t = (data.main.temp - 273);
        temp.innerHTML = Math.round(t) + '°C';
        des.innerHTML = data.weather[0].description;
        humid.innerHTML = 'Humidity :' + data.main.humidity + '%';
        // icon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + '@2x.png';
        wind.innerHTML = 'Wind Speed : ' + data.wind.speed + ' Km/Hr';
    });
}



btn.addEventListener('click', ()=>{
    city = document.getElementById('srchSpace').value;
    // console.log(city);
    api = apiHead + city + '&appid=' + apiKey;
    // console.log(api);
    fetchData();
});

window.addEventListener('load', (event) => {
    api = apiHead + city + '&appid=' + apiKey;
    fetchData();
  });
  