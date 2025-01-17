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

// let updateCity = () => {
//   let select = document.querySelector(".select");

//   cities.map((city, index) => {
//     let option = document.createElement("#city-option");
//     option.textContent = city;

//     option.value = city; // Define o valor do <option>
//     select.appendChild(option);
//   });

//   return select;
// };

// console.log("city===>", updateCity());

// console.log("kamila");
