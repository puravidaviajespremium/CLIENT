import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import Detail from './views/Detail/Detail'
import Faqs from './views/FAQs/Faqs'
import Contact from './views/Contact/Contact'
import Destinations from './views/Destinations/Destinations'
import Login from './views/Login/Login'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/faqs' element={<Faqs />} />
            <Route path='/detalle/:id' element={<Detail/>} />
            <Route path='/contacto' element={<Contact/>}/>
            <Route path='/destinos' element={<Destinations />} />
            <Route path='/signin' element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}


export default App