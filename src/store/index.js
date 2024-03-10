// now here i m using redux tool kit to use redux more convenient way in large and complex application
import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
});

// here we  using configureStore instead of createStore
// because we can use add multiple slicer in one reducer function
// configureStore doing this thing
// but here as you can see in this example we have only one state slice we can send single slice also in configure store
//  here you have to use only reducer not reducers and any thing because configureStore will only identify reducer function
// using reducer

const store = configureStore({
  // here we have single state that why we used like this
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },

  /*{ but if we want to use multiple slicer as reducer here we can do that by simply
    reducer:{counter:counterSlice.reducer),whateverNameYouWantToSet : slicerName.reducer()}
    }*/
});

// now here i m dispatching my slice actions

export const counterActions = counterSlice.actions;

export const authActions = authSlice.actions;

export default store;
