// import { useContext } from "react";
// import { CounterContext } from "../context/CouterContext";
import { useCounterContext } from "../hooks/useCounterContext";

import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Page2 = () => {
  // const { counter } = useContext(CounterContext);
  const {counter} = useCounterContext();

    // 5 - context mais complexo
    const {color, dispatch} = useTitleColorContext();

  return (
    <div>
      <div style={{color: color}}>Page2</div>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Page2;