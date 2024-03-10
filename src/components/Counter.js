import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions } from "../store/Slicer/CounterSlicer";

const Counter = () => {
  // 10.importing useSelector from react-redux it will subscribe this component to the store
  // 11.useSelector will give store slice means  data which want in this component
  const counter = useSelector((state) => state.counter.counter);

  // importing another state

  const show = useSelector((state) => state.counter.showCounter);

  // 12 importing useDispatch from react-redux it will dispatch our action to store

  const dispatch = useDispatch();

  const handleIncrement = () => {
    //13. dispatching actions
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  // attaching payload
  const input = useRef();

  const handleIncrementByInput = () => {
    const CustomNumber = input.current.value;
    console.log(CustomNumber);
    // passing my payload value as customIncrement method argument
    // now i have to use at that .payload
    dispatch(counterActions.customIncrement(+CustomNumber));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.handleToggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <>
          <input type="number" ref={input} />
          <div className={classes.value}>{counter}</div>
        </>
      )}
      <button onClick={handleIncrement}>increment by 1</button>
      <button onClick={handleIncrementByInput}>
        increase By Custom Number
      </button>
      <button onClick={handleDecrement}>decrement by 1</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
