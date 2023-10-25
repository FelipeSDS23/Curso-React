import './App.css'

// 4 - importação de components
import FirstComponent from './components/FirstComponent';

// 5 - desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';

// 6 - useState
import State from './components/State';
import { createContext } from 'react';

// 10 = utilizando contexto
import Context from './components/Context';

// 8 - type
type textOrNull = string | null;

type fixed = "isso" | "ou" | "aquilo";

// 9 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variaveis
  const name: string = "Felipe";
  const age: number = 24;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreating = (name: string): string => {
    return `Olá ${name}!`;
  }

  // 8 - type
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  mySecondText = "opa";

  const testandoFixed: fixed = "isso";

  // 9 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <>
        <h1>TypeScript com React</h1>
        <h2>{name} tem {age} anos e {isWorking ? (<span>está trabalhando</span>) : (<span>não está trabalhando</span>)}</h2>
        <h3>{userGreating(name)}</h3>
        <FirstComponent />
        <SecondComponent name={name} />
        <Destructuring
          title={"Primeiro post"}
          content={"Algum conteúdo"}
          commentQty={10}
          tags={["ts", "js"]}
          category={Category.TS}
        />
        <Destructuring
          title={"Segundo post"}
          content={"Mais outro conteúdo"}
          commentQty={5}
          tags={["python"]}
          category={Category.P}
        />
        <State />
        {myText && <p>Tem texto na variavel</p>}
        {mySecondText && <p>Tem texto na variavel</p>}
        <Context />
      </>
    </AppContext.Provider>
  )
}

export default App
