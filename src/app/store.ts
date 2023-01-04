import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import { apiSlice } from "../features/dogs/dogs-api-slice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        // an array of APIs
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    }
})

export type AppDispatch = typeof store.dispatch;
// using TypeScript inference to automatically update our store types
export type RootState = ReturnType<typeof store.getState>;