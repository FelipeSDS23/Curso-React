//react
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//styles
import './App.css';

//components
import Navbar from './components/Navbar';

//pages
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Page1/>}/>
            <Route path='/page2' element={<Page2/>}/>
            <Route path='/page3' element={<Page3/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;
