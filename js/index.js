var arrayWeather = [];

async function getData(term) {
  var weather = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=2070ce4abcac4289a2c161128230608&q=${term}&days=3`
  );
  arrayWeather = await weather.json();

  firstCard();
  secondCard();
  thirdCard();
}

document.getElementById("search").addEventListener("keyup", function (e) {
  getData(e.target.value);
});
function secondCard() {
  document.querySelector(
    "#contentTwo"
  ).innerHTML = ` <img src="${arrayWeather.forecast.forecastday[1].day.condition.icon}">
                         <p class="max">${arrayWeather.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</p>
                         <p>${arrayWeather.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></p>
                         <p>${arrayWeather.forecast.forecastday[1].day.condition.text}</p>
                     `;
}

function thirdCard() {
  document.querySelector(
    "#contenthree"
  ).innerHTML = ` <img src="${arrayWeather.forecast.forecastday[2].day.condition.icon}">
                         <p class="max">${arrayWeather.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</p>
                         <p>${arrayWeather.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></p>
                         <p>${arrayWeather.forecast.forecastday[2].day.condition.text}</p>
                     `;
}
function firstCard() {
  document.querySelector(
    "#content"
  ).innerHTML = ` <div class="location">${arrayWeather.location.name}</div>
                        <div class="degree ">
                            <div class="num">
                                ${arrayWeather.current.temp_c} <sup>o</sup>C
                            </div>
                            <div class="icon">
                                <img src="${arrayWeather.current.condition.icon}" alt="${arrayWeather.current.condition.text}">
                            </div>
                        </div>
                        <div class="custom">${arrayWeather.current.condition.text}</div>`;
}

// Function to format the date as "Monday 7th August"
function formatDate(dateObj) {
  const options = { weekday: "long", day: "numeric", month: "long" };
  return dateObj.toLocaleDateString("en-US", options);
}

// Get the current date
const today = new Date();
const formattedToday = formatDate(today);

// Get the date for tomorrow
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const formattedTomorrow = formatDate(tomorrow);

const afterTomorrow = new Date(tomorrow);
afterTomorrow.setDate(tomorrow.getDate() + 1);
const formattedafterTomorrow = formatDate(afterTomorrow);
// Extract day and month separately
const todayDay = today.toLocaleDateString("en-US", { weekday: "long" });
const todayMonth = today.toLocaleDateString("en-US", { day: "numeric" });
const todayNameOfMonth = today.toLocaleDateString("en-us", { month: "long" });

document.querySelector(".weakday").textContent = todayDay;
document.querySelector(".number").textContent = todayMonth;
document.querySelector(".month").textContent = todayNameOfMonth;

const tomorrowDay = tomorrow.toLocaleDateString("en-US", { weekday: "long" });
document.querySelector(".dayTwo").textContent = tomorrowDay;
const tomorrowafter = afterTomorrow.toLocaleDateString("en-US", {
  weekday: "long",
});
document.querySelector(".dayThree").textContent = tomorrowafter;
getData("cairo");
