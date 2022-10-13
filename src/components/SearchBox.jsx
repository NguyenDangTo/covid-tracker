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

  return (
    <div className="my-6 flex items-center justify-center w-full">
      <FormControl className="w-1/2">
        <NativeSelect defaultValue="1" onChange={(e) => fetchCases(e.target.value)}>
          <option>Global</option>
          {countries?.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default SearchBox;
