import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountriesState } from '../types';
import { fetchCountries } from './action';

const initialState: CountriesState = {
    countries: [],
    loading: false,
    error: null,
    currentPage: 1,
    lastPage: 1,
    perPage: 6,
    hasMore: true,
    total: 0,
    selectedContinent: 'All'
};

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        setPerPage: (state, action: PayloadAction<number>) => {
            state.perPage = action.payload;
            state.currentPage = 1;
            state.countries = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                const { countries, pagination, continent } = action.payload;
                state.loading = false;


                if (pagination.currentPage === 1 || continent !== state.selectedContinent) {
                    state.countries = countries;
                    if (continent !== undefined) {
                        state.selectedContinent = continent;
                    }
                } else {
                    state.countries = [...state.countries, ...countries];
                }

                state.currentPage = pagination.currentPage;
                state.lastPage = pagination.lastPage;
                state.total = pagination.total;
                state.hasMore = pagination.currentPage < pagination.lastPage;
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    }
});

export const { setPerPage } = countriesSlice.actions;
export default countriesSlice.reducer;
