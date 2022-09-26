import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@mui/material";
import { fetchCountries } from "../../api";

const CountryPicker = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountriesAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchCountriesAPI();
  }, []);

  return (
    <>
      <FormControl>
        <NativeSelect>
          <option>Global</option>
          {countries.length
            ? countries.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))
            : null}
        </NativeSelect>
      </FormControl>
    </>
  );
};

export default CountryPicker;
