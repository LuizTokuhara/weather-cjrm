const body = document.querySelector("body");
const cityForm = document.querySelector('[data-js="change-location"]');
const cityNameContainer = document.querySelector('[data-js="city-name"]');
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]');
const cityTemperatureContainer = document.querySelector(
  '[data-js="city-temperature"]'
);
const cityCard = document.querySelector('[data-js="city-card"]');
let timeImg = document.querySelector('[data-js="time"]');
const timeIconContainer = document.querySelector('[data-js="time-icon"]');

const showWeatherCard = () => {
  if (cityCard.classList.contains("d-none")) {
    cityCard.classList.remove("d-none");
  }
};

const addWeatherDataToDom = (
  WeatherIcon,
  IsDayTime,
  LocalizedName,
  WeatherText,
  Temperature
) => {
  const timeIcon = `<img src="../src/icons/${WeatherIcon}.svg" />`;

  timeImg.src = IsDayTime ? "./src/day.svg" : "./src/night.svg";

  body.style.backgroundImage = IsDayTime
    ? "url('./src/day-b.jpg')"
    : "url('./src/night-b.jpg')";

  timeIconContainer.innerHTML = timeIcon;
  cityNameContainer.textContent = LocalizedName;
  cityWeatherContainer.textContent = WeatherText;
  cityTemperatureContainer.textContent = Temperature;
};

const fetchWeatherData = async (event) => {
  event.preventDefault();

  const inputValue = event.target.city.value;
  const [{ Key, LocalizedName }] = await getCityData(inputValue);
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] =
    await getCityWeather(Key);

  showWeatherCard();

  addWeatherDataToDom(
    WeatherIcon,
    IsDayTime,
    LocalizedName,
    WeatherText,
    Temperature.Metric.Value
  );

  cityForm.reset();
};

cityForm.addEventListener("submit", fetchWeatherData);
