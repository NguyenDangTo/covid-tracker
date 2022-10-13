import axios from "axios";

const url = "https://api.covid19api.com";

export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/total/dayone/country/${country}`;
    try {
      const {data} = await axios.get(changeableUrl);
      return data;
    } catch (error) {
      return error;
    }
  } else {
    try {
      const {data} = await axios.get(`${url}/summary`);
      const test = await axios.get(`${url}/summary`);
      console.log(test);
      return data;
    } catch (error) {
      return error;
    }
  }
};

export const fetchCountries = async () => {
  try {
    const {data} = await axios.get(`${url}/countries`);
    return data;
  } catch (error) {
    return error;
  }
};
