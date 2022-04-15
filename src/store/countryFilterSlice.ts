import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { COUNTRY_REGIONS } from '../types';

//TODO: store here the filters, and in UI highlight the selected filter. Instead of clicking on Show All to show all countrys, disable the filter by clicking on the highlighted one

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

    disableFilter(state) {
      state.filteredRegion = COUNTRY_REGIONS.ALL;
    },

    setSearchedCountry(state, action: PayloadAction<string>) {
      state.searchedCountry = action.payload;
    },
  },
});

export const countryFilterActions = countryFilterSlice.actions;

export default countryFilterSlice.reducer;
