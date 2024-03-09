// redux basic how in js we work with redux

// import redux from "redux";

// const counterReducer = (state, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//     };
//   }
//   return state;
// };

// const store = redux.createStore(counterReducer);
// console.log(store.getState());

// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.dispatch(counterSubscriber);

// store.action({ type: "increment" });
// store.action({ type: "decrement" });

// now here working with react -redux

import { createStore } from "redux";

// 2. creating reducer function and passing as argument to createStore
// 3. reducer function has two arguments first state and second action
//here i m assigning initial value to my state

const initialValue = { counter: 0, showCounter: true };

const counterReducer = (state = initialValue, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      state: state.showCounter,
    };
  } else if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      state: state.showCounter,
    };
  } else if (action.type === "customIncrementByInput") {
    return {
      counter: state.counter + action.amount,
      state: state.showCounter,
    };
    // handling another state
  } else if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  } else {
    return state;
  }
};

// 1. creating store central state management
// 5. passing reducer function as argument to createStore

const store = createStore(counterReducer);

// 6. in react we subscribe component dispatch and action will do in other
// 7. exporting store and wrapping around high level components index
export default store;
