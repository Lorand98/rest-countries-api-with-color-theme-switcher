import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country, CountryRegions } from "../types";

const countryListSlice = createSlice({
  name: "countries",
  initialState: {
    allCountries: [] as Country[],
    filteredCountries: [] as Country[],
  },
  reducers: {
    setCountries(state, action: PayloadAction<Country[]>) {
      state.allCountries = action.payload;
      state.filteredCountries = action.payload;
    },

    filterCountries(
      state,
      action: PayloadAction<{
        filteredRegion: CountryRegions;
        searchedCountry: string;
      }>
    ) {
      const { filteredRegion, searchedCountry } = action.payload;
      const searchedCountryLowerCase = searchedCountry.toLowerCase();
      if (filteredRegion !== CountryRegions.ALL) {
        if (searchedCountryLowerCase.trim() !== "") {
          state.filteredCountries = state.allCountries.filter(
            (country) =>
              country.region.includes(filteredRegion) &&
              country.name.common
                .toLowerCase()
                .includes(searchedCountryLowerCase)
            // ||
            // country.name.official
            //   .toLowerCase()
            //   .includes(searchedCountryLowerCase)
          );
        } else {
          state.filteredCountries = state.allCountries.filter((country) =>
            country.region.includes(filteredRegion)
          );
        }
      }

      if (filteredRegion === CountryRegions.ALL) {
        if (searchedCountry.trim() !== "") {
          state.filteredCountries = state.allCountries.filter(
            (country) =>
              country.name.common
                .toLowerCase()
                .includes(searchedCountryLowerCase)
            // ||
            // country.name.official.toLowerCase().includes(searchedCountryLowerCase)
          );
        } else {
          state.filteredCountries = state.allCountries;
        }
      }
    },
  },
});

export const countryListActions = countryListSlice.actions;

export default countryListSlice.reducer;
