import classes from "./Counter.module.css";
import { useSelector } from "react-redux";

const Counter = () => {
  const toggleCounterHandler = () => {};

  // importing useSelector from react-redux it will subscribe this component to the store
  // useSelector will give store slice means  data which want in this component
  const counter = useSelector((state) => state.counter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
