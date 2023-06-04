// https://api.weatherapi.com/v1/search.json?lang=pt&key=8bbec4b9670d48bc952180248232505&q=Lon

const TOKEN = import.meta.env.VITE_TOKEN;

// cidade = term
export const searchCities = async (term) => {
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
  const data = await response.json();

  if (!data.length) window.alert('Nenhuma cidade encontrada');

  return data;
};

export const getWeatherByCity = async (cityURL) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`);
  const data = await response.json();
  console.log(data);

  const novoObj = {
    name: data.location.name,
    country: data.location.country,
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    url: cityURL,
  };

  return novoObj;
};

export const getWeatherSevenDays = async (URL_CIDADE) => {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${TOKEN}&q=${URL_CIDADE}&days=7`);
  const data = await response.json();

  const newObject = data.forecast.forecastday.map((dia) => {
    return {
      date: dia.date,
      maxTemp: dia.day.maxtemp_c,
      minTemp: dia.day.mintemp_c,
      condition: dia.day.condition.text,
      icon: dia.day.condition.icon,
    };
  });

  return newObject;
};
