import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

//Practicando el GITFlow
//Hola que hace!
//Cambiando cosas

export default App