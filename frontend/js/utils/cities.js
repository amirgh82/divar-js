const fetchPopularCities = async () => {
  const res = await fetch("http://localhost:4000/api/cities/popular");
  const popularCities = await res.json();

  return popularCities;
};

const setCityCookie = (city) => {
  document.cookie = `city = ${city}; path=/`;
};

const getCityCookie = () => {
  const cookieName = "city = ";
  const cookiesArray = document.cookie.split("; ");
  let result = null;
  cookiesArray.forEach((cookie) => {
    if (cookie.indexOf(cookieName) === 0) {
      result = cookie.substring(cookieName.length);
    }
  });
  return result;
};

export { fetchPopularCities, setCityCookie, getCityCookie };
