import { createSlice } from "@reduxjs/toolkit";

// initial state

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    // here we don't need to define type second here we haven't defined action also instead we define our identifier
    increment(state) {
      // here we are mutating our state we don't have to do this
      // but redux tool kit use built library which name is emmer which will don't mutate this behind the scene
      // so thank to  redux toolkit we can mutate by immutable way
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // now here we  providing action because here we need to pass our action if you see upper code there is no need action there
    // if  i m using action i have to write always payload not costume value because react will understand in payload object
    customIncrement(state, action) {
      state.counter = state.counter + action.payload;
    },
    handleToggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
