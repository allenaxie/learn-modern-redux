// DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Type of our state
interface CounterState {
    value: number;
}

// initial state
const initialState: CounterState = {
    value: 10,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // it's ok to "mutate" state directly because immer makes it immutable 
        // under the hood
        incremented(state) {
            state.value++;
        },
        amountAdded(state, action: PayloadAction<number>) {
            state.value += action.payload;
        }
     
    }
})

// actions
export const { incremented, amountAdded } = counterSlice.actions;

export default counterSlice.reducer;