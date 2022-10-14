import React, {useState, useEffect} from "react";
import {FormControl, NativeSelect} from "@mui/material";
import {fetchCountries} from "../api/index.jsx";

const SearchBox = ({fetchCases}) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchAPI();
  }, []);
  const sortCountries = countries.sort((prev, curr) => {
    if (prev.Country < curr.Country) return -1;
    if (prev.Country > curr.Country) return 1;
    return 0;
  });
  return (
    <div className="my-6 flex items-center justify-center w-full">
      <FormControl>
        <NativeSelect defaultValue="1" onChange={(e) => fetchCases(e.target.value)}>
          <option value="Global">Global</option>
          {sortCountries?.map((country, i) => (
            <option key={i} value={country.Slug}>
              {country.Country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default SearchBox;
