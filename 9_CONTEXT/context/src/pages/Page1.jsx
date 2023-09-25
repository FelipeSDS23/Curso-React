// import { useContext } from "react";
// import { CounterContext } from "../context/CouterContext";
import ChangeCounter from "../context/ChangeCounter";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Page1 = () => {
  // const {counter} = useContext(CounterContext);
  const {counter} = useCounterContext();

  // 5 - context mais complexo
  const {color, dispatch} = useTitleColorContext();

  // 6 - alterando contexto complexo
  const setTitleColor = (color) => {
    dispatch({ type: color })
  }

  return (
    <div>
      <h1 style={{color: color}}>Page1</h1>
      <p>Valor do contador: {counter}</p>
       {/* 3 - alterando valor do contexto */}
       <ChangeCounter/>
        {/* 6 - alterando contexto complexo */}
       <div>
          <button onClick={() => setTitleColor("RED")}>Vermelho</button>
          <button onClick={() => setTitleColor("BLUE")}>Vermelho</button>
       </div>
    </div>
  )
}

export default Page1;