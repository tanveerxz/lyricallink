import {  createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi', 
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '75a8005234msh953f4e810ca12afp1b0a8ajsnc533f35c9b5b');
                
                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/world' }),
            getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
            getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
            getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
            getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
            getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}`}),
            getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
        }),
    });

    export const {
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
        useGetArtistDetailsQuery,
        useGetSongsByCountryQuery,
        useGetSongsByGenreQuery,
        useGetSongsBySearchQuery,
    } = shazamCoreApi;