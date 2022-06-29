const api = {
  key: `${process.env.REACT_APP_API_KEY}`,
  base: "https://api.openweathermap.org/data/2.5/",
};

export const getWeatherDataForCity = async (city) => {
    const url = `${api.base}weather?q=${city}&units=metric&appid=${api.key}`;
  const response = await fetch(url);
  return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
    const url = `${api.base}weather?lat=${lat}&lon=${lon}&appid=${api.key}`;
  const response = await fetch(url);
  return await response.json();
};