import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Country } from '../types';

const countrySlice = createSlice({
  name: 'countries',
  initialState: { countries: [] as Country[] },
  reducers: {
    setCountries(state, action: PayloadAction<Country[]>) {
      state.countries = action.payload;
    },
  },
});

export const countryActions = countrySlice.actions;

export default countrySlice.reducer;
