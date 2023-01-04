import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const DOGS_API_KEY = 'cbfb51a2-84b6-4025-a3e2-ed8616edf311';

interface Breed {
    id: string;
    name: string;
    image: {
        url: string
    }
}

export const apiSlice = createApi({
    // where are we keeping the data
    reducerPath: 'api',
    // how are we going to fetch the data
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders(headers) {
            headers.set('x-api-key', DOGS_API_KEY);
            return headers;
        }
    }),
    endpoints(builder) {
        return {
            // return type of API response and parameters
            // number|void means optional number
            fetchBreeds: builder.query<Breed[], number|void>({
                query(limit = 10) {
                    return `/breeds?limit=${limit}`;
                }
            })
        }
    }
})

// auto generate new react hooks based on apiSlice
export const { useFetchBreedsQuery} = apiSlice;