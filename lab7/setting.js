const input_text = document.getElementById("search_text");
const header = document.getElementById("header");
const tempr = document.getElementById("temp");
const temp_desc = document.getElementById("desc");
const icon = document.getElementById("icon");
const other = document.getElementById("other");
let cityName = "Москва";
let apiKey = "5005c41ae2aa1d2711fdd7359a984e81";

function getWeather(e) {
    if (input_text.value != "")
        cityName = input_text.value;
    header.textContent = cityName + "  ";
    fetch("https://api.openweathermap.org/data/2.5/find?q=" + cityName + "&lang=ru&type=like&APPID=" + apiKey)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        let temperature = data["list"][0]["main"].temp;
        let weatherText = (Math.round(temperature - 273)).toString() + String.fromCharCode(176);
        temp_desc.textContent = data["list"][0]["weather"][0].description;
        console.log(temp_desc.textContent);
        tempr.textContent = weatherText;
        console.log(data);
        console.log("https://openweathermap.org/img/wn/" + data["list"][0]["weather"][0].icon + "@2x.png");
        icon.src = "https://openweathermap.org/img/wn/" + data["list"][0]["weather"][0].icon + "@2x.png";
        let windSpeed = Math.round(data["list"][0]["wind"].speed) + "м/c";
        let pressure = Math.round(data["list"][0]["main"].pressure * 100 / 133) + "мм.рт.ст.";
        let humidity = data["list"][0]["main"].humidity + "%";
        other.textContent = windSpeed + " " + humidity + " " + pressure;
        console.log(data);
    });
}

getWeather();

const button = document.getElementById("button");
button.addEventListener("click", getWeather);
