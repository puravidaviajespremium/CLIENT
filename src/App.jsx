import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import Detail from './views/Detail/Detail'
import Faqs from './views/FAQs/Faqs'
import Contact from './views/Contact/Contact'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/faqs' element={<Faqs />} />
            <Route path='/detalle' element={<Detail/>} />
            <Route path='/contacto' element={<Contact/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

//Practicando el GITFlow
//Hola que hace!
//Cambiando cosas

export default App