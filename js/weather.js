const APIKey = "7ZLQPNyz5nr6c588msEu6Jtv63XKreLr";
const baseUrl = "http://dataservice.accuweather.com/";

const getCityUrl = (cityName) =>
  `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`;

const getWeatherUrl = (cityKey) =>
  `${baseUrl}currentconditions/v1/${cityKey}?language=pt-br&apikey=${APIKey}`;

const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Não foi possível obter os dados");
    }

    return await response.json();
  } catch ({ name, message }) {
    alert(`${name}: ${message}`);
  }
};

const getCityData = (cityName) => fetchData(getCityUrl(cityName));

const getCityWeather = (cityKey) => {
  // const [cityData] = await getCityData(cityName);
  return fetchData(getWeatherUrl(cityKey));
};
