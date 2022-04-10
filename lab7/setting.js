const input_text = document.getElementById("search_text");
const header = document.getElementById("header");
const tempr = document.getElementById("temp");
const temp_desc = document.getElementById("desc");
const icon = document.getElementById("icon");
const other = document.getElementById("other");
let city_name = "Москва";
let apiKey = "5005c41ae2aa1d2711fdd7359a984e81";
let city_id = 0;

function getWeather(e) {
    if (input_text.value != "") {
        city_name = input_text.value;
        header.textContent = city_name;
    }
    fetch("https://api.openweathermap.org/data/2.5/find?q=" + city_name + "&lang=ru&type=like&APPID=" + apiKey)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        let temperature = data["list"][0]["main"].temp;
        let weather_text = (Math.round(temperature - 273)).toString() + String.fromCharCode(176);
        temp_desc.textContent = data["list"][0]["weather"][0].description;
        console.log(temp_desc.textContent);
        tempr.textContent = weather_text;
        console.log(data);
        console.log("https://openweathermap.org/img/wn/" + data["list"][0]["weather"][0].icon + "@2x.png");
        icon.src = "https://openweathermap.org/img/wn/" + data["list"][0]["weather"][0].icon + "@2x.png";
        other.textContent = Math.round(data["list"][0]["wind"].speed) + "   м/c";
        console.log(data);
    });
}

getWeather();

const button = document.getElementById("button");
button.addEventListener("click", getWeather);
