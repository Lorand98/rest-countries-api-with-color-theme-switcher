import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountryRegions } from '../types';

type CountryFilter = {
  filteredRegion: CountryRegions;
  searchedCountry: string;
};

const countryFilterSlice = createSlice({
  name: 'filter',
  initialState: {
    filteredRegion: CountryRegions.ALL,
    searchedCountry: '',
  } as CountryFilter,
  reducers: {
    enableFilter(state, action: PayloadAction<CountryRegions>) {
      state.filteredRegion = action.payload;
    },

    setSearchedCountry(state, action: PayloadAction<string>) {
      state.searchedCountry = action.payload;
    },
  },
});

export const countryFilterActions = countryFilterSlice.actions;

export default countryFilterSlice.reducer;
