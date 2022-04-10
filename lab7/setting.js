const input_text = document.getElementById("search_text");
const header = document.getElementById("header");
const tempr = document.getElementById("temp");
let city_name = "Москва";

const button = document.getElementById("button");
button.addEventListener("click", function(e) {
    city_name = input_text.value;
    header.textContent = city_name;
    console.log(city_name);
    let response = fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city_name + "&limit=5&appid=5005c41ae2aa1d2711fdd7359a984e81");
    let temp = response.main.temp;
    tempr.textContent = temp;
});
