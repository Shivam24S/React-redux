import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";

const Counter = () => {
  // 10.importing useSelector from react-redux it will subscribe this component to the store
  // 11.useSelector will give store slice means  data which want in this component
  const counter = useSelector((state) => state.counter);

  // 12 importing useDispatch from react-redux it will dispatch our action to store

  const dispatch = useDispatch();

  const handleIncrement = () => {
    //13. dispatching actions
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  // handling payload
  const input = useRef();

  const handleIncrementByInput = () => {
    const CustomNumber = input.current.value;
    console.log(CustomNumber);
    dispatch({ type: "customIncrementByInput", amount: +CustomNumber });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <input type="number" ref={input} />
      <div className={classes.value}>{counter}</div>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleIncrementByInput}>
        increase By Custom Number
      </button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
