import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import Detail from './views/Detail/Detail'
import Faqs from './views/FAQs/Faqs'
import Contact from './views/Contact/Contact'
import Destinations from './views/Destinations/Destinations'
import Login from './views/Login/Login'
import Error from './views/Error/Error'
import CheckoutPayment from './views/CheckoutPayment/CheckoutPayment'
import './App.css'
import PaymentSuccess from './views/CheckoutPayment/PaymentSuccess/PaymentSuccess'
import AdminPanel from './views/AdminPanel/AdminPanel'
import PaymentCancel from './views/CheckoutPayment/PaymentCancel/PaymentCancel'

function App() {
  const isDashboardRoute = location.pathname.startsWith('/admin');
  return (
    <>
      {!isDashboardRoute && <Header/>}
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/detalle/:id' element={<Detail />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/destinos' element={<Destinations />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/payment' element={<CheckoutPayment />} />
          <Route path='/payment/cancel' element={<PaymentCancel/>} />
          <Route path='/payment/success' element={<PaymentSuccess/>} />
          <Route path='/admin/*' element={<AdminPanel />} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </main>
      {!isDashboardRoute && <Footer/>}
    </>
  )
}


export default App