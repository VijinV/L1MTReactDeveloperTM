import { createAsyncThunk } from '@reduxjs/toolkit';
import {  PaginatedResponse, FetchCountriesParams } from '../types';

export const fetchCountries = createAsyncThunk(
    'countries/fetchCountries',
    async ({ page = 1, continent = '' }: FetchCountriesParams) => {
        const continentParam = continent && continent !== 'All' ? `&continent=${continent}` : '';

        const url = `${import.meta.env.VITE_API_KEY}/v1/countries?per_page=6&page=${page}${continentParam}`;

        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer 2473|oYy4IpPfWU9YnThuNG2OHgQRmDfxP3neOHZ9Q37G`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch countries');
        }

        const data: PaginatedResponse = await response.json();

        return {
            countries: data.data,
            pagination: {
                currentPage: data.meta.current_page,
                lastPage: data.meta.last_page,
                total: data.meta.total,
                from: data.meta.from,
                to: data.meta.to
            },
            continent
        };
    }
);

export const loadNextPage = createAsyncThunk(
    'countries/loadNextPage',
    async (_, { getState, dispatch }) => {
        const { countries } = getState() as {
            countries: {
                currentPage: number,
                selectedContinent: string
            }
        };

        const nextPage = countries.currentPage + 1;

        return dispatch(fetchCountries({
            page: nextPage,
            continent: countries.selectedContinent
        }));
    }
);

export const filterByContinent = createAsyncThunk(
    'countries/filterByContinent',
    async (continent: string, { dispatch }) => {
        return dispatch(fetchCountries({
            page: 1,
            continent
        }));
    }
);
