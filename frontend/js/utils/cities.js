const fetchPopularCities = async () => {
  const res = await fetch("http://localhost:4000/api/cities/popular");
  const popularCities = await res.json();

  return popularCities;
};

const setCityCookie = (city) => {
  document.cookie = `city = ${city}; path=/`;
};

const getCityCookie = (city)=>{

}

export { fetchPopularCities, setCityCookie , setCityCookie };
