const input_text = document.getElementById("search_text");
const header = document.getElementById("header");
const tempr = document.getElementById("temp");
let city_name = "Москва";
let apiKey = "5005c41ae2aa1d2711fdd7359a984e81";
let city_id = 0;

const button = document.getElementById("button");
button.addEventListener("click", function(e) {
    city_name = input_text.value;
    header.textContent = city_name;
    fetch("https://api.openweathermap.org/data/2.5/find?q=" + city_name + ",RU&type=like&APPID=" + apiKey)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        let temperature = data["list"][0]["main"].temp;
        tempr.textContent = (Math.round(temperature - 273)).toString() + String.fromCharCode(176);
        console.log(data["list"][0]["main"].temp);
    });
});
