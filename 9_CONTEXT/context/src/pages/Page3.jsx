import { useContext } from "react";
import { CounterContext } from "../context/CouterContext";


const Page3 = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <div>Page3</div>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Page3;