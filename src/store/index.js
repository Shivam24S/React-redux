// now here i m using redux tool kit to use redux more convenient way in large and complex application
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slicer/CounterSlicer.js";
import AuthReducer from "./Slicer/AuthSlicer.js";

// here we  using configureStore instead of createStore
// because we can use add multiple slicer in one reducer function
// configureStore doing this thing
// but here as you can see in this example we have only one state slice we can send single slice also in configure store
//  here you have to use only reducer not reducers and any thing because configureStore will only identify reducer function
// using reducer

const store = configureStore({
  // here we have single state that why we used like this
  reducer: { counter: counterReducer, auth: AuthReducer },

  /*{ but if we want to use multiple slicer as reducer here we can do that by simply
    reducer:{counter:counterSlice.reducer),whateverNameYouWantToSet : slicerName.reducer()}
    }*/
});

// now here i m dispatching my slice actions

export default store;
