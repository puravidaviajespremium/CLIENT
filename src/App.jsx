import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Detail from './views/Detail/Detail'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detalle' element={<Detail/>} />
      </Routes>
    </>
  )
}

//Practicando el GITFlow
//Hola que hace!
//Cambiando cosas

export default App