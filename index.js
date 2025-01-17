const updateTime = () => {
  let cityName = document.querySelector(".city-name");
  let cityDate = document.querySelector(".city-date");
  let cityTime = document.querySelector(".city-time");

  cityDate.innerHTML = moment().format("MMM Do, YYYY");
  cityTime.innerHTML = moment()
    .tz("Europe/Berlin")
    .format("HH:mm:ss [<small>]A[</small>]");
};

updateTime();
setInterval(updateTime, 1000);

// let cities = ["Berlin 🇩🇪", "Brasilia 🇧🇷", "New York 🇺🇸", "Tokyo 🇯🇵"];

const updateCity = (event) => {
  let { value } = event.target;
  let cityName = value.replace("_", " ").split("/")[1];
  console.log(cityName);
  let cityTime = moment().tz(cityName);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="main-container">
          <div class="city-container">
            <h2 class="city-name">${cityName}</h2>
            <p class="city-date">${cityTime.format("MMM Do, YYYY")}</p>
          </div>
          <div class="city-time">${cityTime.format(
            "HH:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
  `;
};

let citySelectionElement = document.querySelector("#city-select");

citySelectionElement.addEventListener("change", updateCity);
