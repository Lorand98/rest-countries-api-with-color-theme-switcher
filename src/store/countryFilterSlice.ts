import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { COUNTRY_REGIONS } from '../types';

type CountryFilter = {
  filteredRegion: COUNTRY_REGIONS;
  searchedCountry: string;
};

const countryFilterSlice = createSlice({
  name: 'filter',
  initialState: {
    filteredRegion: COUNTRY_REGIONS.ALL,
    searchedCountry: '',
  } as CountryFilter,
  reducers: {
    enableFilter(state, action: PayloadAction<COUNTRY_REGIONS>) {
      state.filteredRegion = action.payload;
    },

    setSearchedCountry(state, action: PayloadAction<string>) {
      state.searchedCountry = action.payload;
    },
  },
});

export const countryFilterActions = countryFilterSlice.actions;

export default countryFilterSlice.reducer;
