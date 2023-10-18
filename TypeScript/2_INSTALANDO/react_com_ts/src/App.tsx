import './App.css'

// 4 - importação de components
import FirstComponent from './components/FirstComponent';

// 5 - desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring from './components/Destructuring';

function App() {

  // 1 - variaveis
  const name: string = "Felipe";
  const age: number = 24;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreating = (name: string): string => {
    return `Olá ${name}!`;
  }

  return (
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
      />
      <Destructuring
        title={"Segundo post"}
        content={"Mais outro conteúdo"}
        commentQty={5}
        tags={["python"]}
      />
    </>
  )
}

export default App
