import { useState } from 'react';

// styles / css
import './App.css'

// images
import City from './assets/city.jpg'

// components
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';


function App() {

  const [userName] = useState("Felipe");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234},
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const pessoas = [
    {id: 1, nome: "Felipe", idade: 24, profissao: "Programador"},
    {id: 2, nome: "João", idade: 15, profissao: "Estudante"},
    {id: 3, nome: "Maria", idade: 32, profissao: "Médica"},
  ];

  return (
    <div className='App'>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* props */}
      <ShowUserName name={userName}/>
      {/* destructuring */}
      <CarDetails brand="vw" km={100000} color="Azul" newCar={false}/>
      {/* reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false}/>
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar} 
        />
      ))}
      {/* fragment */}
      <Fragment propFragment="teste"/>
      {/* children */}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <p>E este é o conteúdo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage}/>
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/* desafio */}
      {pessoas.map((pessoa) => (
        <UserDetails
          key={pessoa.id}
          nome={pessoa.nome}
          idade={pessoa.idade}
          profissao={pessoa.profissao}
        />
      ))}
    </div>
  )
}

export default App;
