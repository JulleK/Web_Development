// weather api docs https://openweathermap.org/current
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=

const apiKey = "--- API KEY HERE ---";

const cityForm = document.querySelector("#cityForm");
const cityInput = document.querySelector("#cityInput");
const temperature = document.querySelector("#temperature");
const weatherImg = document.querySelector("#weatherImg");
const cityButton = document.querySelector("#cityButton");
const weatherDescription = document.querySelector("#description");
const cityName = document.querySelector("#cityName");

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchedCity = cityInput.value;
  searchCityCoordinates(searchedCity);
  disableButton();
});

const searchCityCoordinates = async (searchedCity) => {
  try {
    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${searchedCity}&appid=${apiKey}`
    );
    const data = await res.json();
    let lat = data[0].lat;
    let lon = data[0].lon;
    searchWeather(lat, lon);
  } catch (e) {
    console.log("ERROR!! I DON'T KNOW THIS CITY!", e);
    alert("Something went wrong! please try again with different city name.");
  }
};

const searchWeather = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();
    console.log(data);
    temperature.innerText = Math.round(data.main.temp) + "°C";
    weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherDescription.innerText = data.weather[0].description;
    cityName.innerText = data.name;
  } catch (e) {
    console.log("SOMETHING WENT WRONG!", e);
    alert("Something went wrong! please try again with different city name.");
  }
};

function disableButton() {
  cityButton.disabled = true;
  setTimeout(function () {
    cityButton.disabled = false;
  }, 1500);
}
