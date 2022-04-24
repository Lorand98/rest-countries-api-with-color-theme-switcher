import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Country } from '../types';

const countryListSlice = createSlice({
  name: 'countries',
  initialState: { countries: [] as Country[] },
  reducers: {
    setCountries(state, action: PayloadAction<Country[]>) {
      state.countries = action.payload;
    },
  },
});

export const countryListActions = countryListSlice.actions;

export default countryListSlice.reducer;
