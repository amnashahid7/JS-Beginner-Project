const API_key = `5a765d5e9641e0fe4855f478957c636f`;
// const API= `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
let form= document.querySelector("form");
let search = document.querySelector("#search");
let displayArea= document.querySelector("#displayArea");

const getWeather= async (city)=>{
    displayArea.innerHTML=`<h1>Loading....</h1>`;
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    let respone= await fetch(url);
    let data = await respone.json();
    showWeather(data);
}

const showWeather=(data)=>{
    if(data.cod=="404"){
        displayArea.innerHTML=`<h2>City Not Found</h2>`;
        return;
    };
   displayArea.innerHTML=`<div class="name_weather">
   <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="picccc" width="150px" height="150px">
   <h2 class="temp">${data.main.temp} <sup>o</sup>C</h2>
   <h3 class="city">${data.name}</h3>
   <h3 class="type"><span>${data.weather[0].description}</span></h3>

</div>

<div class="quality">
   <img class="imgQuality" src="img/humidity.png" alt="picccc"><label
       class="hum">Humidity: ${data.main.humidity}%</label>
   <img class="imgQuality"  src="img/storm.png"alt="picccc"><label class="Speed">Wind
       Speed: ${data.wind.speed} km/h</label>
</div>`;
}

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value);
        event.preventDefault();
    }
)