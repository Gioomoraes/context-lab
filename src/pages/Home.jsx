// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext.jsx";
import ChangeCounter from "../components/ChangeCounter.jsx";

import { useCounterContext } from "../hooks/useCounterContext.jsx";

import { useTitleColorContext } from "../hooks/useTitleColorContext.jsx";

const Home = () => {
  //   const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();

  const { color, dispatch } = useTitleColorContext();

  console.log(color);

  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      0<h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Vermelho</button>
      </div>
    </div>
  );
};

export default Home;
