import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountryRegions } from '../types';

type CountryFilter = {
  filteredRegion: CountryRegions | null;
  searchedCountry: string;
};

const countryFilterSlice = createSlice({
  name: 'filter',
  initialState: {
    filteredRegion: null,
    searchedCountry: '',
  } as CountryFilter,
  reducers: {
    enableFilter(state, action: PayloadAction<CountryRegions>) {
      state.filteredRegion = action.payload;
    },

    disableFilter(state) {
      state.filteredRegion = null;
    },

    setSearchedCountry(state, action: PayloadAction<string>) {
      state.searchedCountry = action.payload;
    },
  },
});

export const countryFilterActions = countryFilterSlice.actions;

export default countryFilterSlice.reducer;
