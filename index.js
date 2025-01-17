const updateTime = () => {
  let spDate = document.querySelector("#sp-date");
  let spTime = document.querySelector("#sp-time");

  spDate.innerHTML = moment().tz("America/Sao_Paulo").format("MMM Do, YYYY");
  spTime.innerHTML = moment()
    .tz("America/Sao_Paulo")
    .format("HH:mm:ss [<small>]A[</small>]");

  //Update Sydney

  let sydneyDate = document.querySelector("#sydney-date");
  let sydneyTime = document.querySelector("#sydney-time");

  sydneyDate.innerHTML = moment().tz("Australia/Sydney").format("MMM Do, YYYY");
  sydneyTime.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("HH:mm:ss [<small>]A[</small>]");
};

const updateCity = (event) => {
  let { value } = event.target;

  if (value === "current") {
    value = moment.tz.guess();
  }

  let cityName = value.replace("_", " ").split("/")[1];

  let cityTime = moment().tz(value);
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
updateTime();
setInterval(updateTime, 1000);

let citySelectionElement = document.querySelector("#city-select");

citySelectionElement.addEventListener("change", updateCity);
