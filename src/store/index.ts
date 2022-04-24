import { configureStore } from '@reduxjs/toolkit';
import countryFilterSlice from './countryFilterSlice';
import countryListSlice from './countrySlice';

const store = configureStore({
  reducer: { countryFilter: countryFilterSlice, countries: countryListSlice },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
