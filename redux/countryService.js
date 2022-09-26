import apiService from "./apiService";

const getCountries = async () => {
  const { data } = await apiService.get("/all");

  return data;
};

const getCountryByName = async (name) => {
  const res = await apiService.get(`/name/${name}`);
  const [data] = res.data;

  return data;
};

const getCountryBySearch = async (name) => {
  const { data } = await apiService.get(`/name/${name}`);

  return data;
};

const countryService = {
  getCountries,
  getCountryByName,
  getCountryBySearch,
};

export default countryService;
