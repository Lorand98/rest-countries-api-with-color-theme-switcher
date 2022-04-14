import { createSlice } from '@reduxjs/toolkit';
import { COUNTRY_REGIONS } from '../types';

//TODO: store here the filters, and in UI highlight the selected filter. Instead of clicking on Show All to show all countrys, disable the filter by clicking on the highlighted one

type CountryFilter = {
  filteredRegion: COUNTRY_REGIONS;
  searchedCountry: string;
};

const cointryFilterSlice = createSlice({
  name: 'filter',
  initialState: <CountryFilter>{
    filteredRegion: COUNTRY_REGIONS.ALL,
    searchedCountry: '',
  },
  reducers: {},
});
