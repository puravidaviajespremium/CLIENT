import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Faqs from './views/FAQs/Faqs'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faqs' element={<Faqs />} />
      </Routes>
    </>
  )
}

//Practicando el GITFlow
//Hola que hace!
//Cambiando cosas

export default App