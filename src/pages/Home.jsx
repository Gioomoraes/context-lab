// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext.jsx";
import ChangeCounter from "../components/ChangeCounter.jsx";

import { useCounterContext } from "../hooks/useCounterContext.jsx";

import { useTitleColorContext } from "../hooks/useTitleColorContext.jsx";

const Home = () => {
  //   const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();

  const { color } = useTitleColorContext();

  console.log(color);

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Home;
