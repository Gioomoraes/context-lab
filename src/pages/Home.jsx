// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext.jsx";
import ChangeCounter from "../components/ChangeCounter.jsx";

import { useCounterContext } from "../hooks/useCounterContext.jsx";

const Home = () => {
  //   const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Home;
