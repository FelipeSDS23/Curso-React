//estilo global
import './App.css'

//componentes
import CarDetails from './components/carDetails'

function App() {

  const carList = [
    { id : 1, fabricante: "Ferrari", cor: "Vermelha", quilometragem: 30000 },
    { id : 2, fabricante: "Lamborghini", cor: "Amarela", quilometragem: 150000 },
    { id : 3, fabricante: "Porsche", cor: "Laranja", quilometragem: 100000 },
  ];

  return (
    <div>
      <h1>Desafio CSS</h1>
      {carList.map((car) => (
        <CarDetails key={car.id} fabricante={car.fabricante} cor={car.cor} quilometragem={car.quilometragem} />
      ))}
    </div>
  )
}

export default App
