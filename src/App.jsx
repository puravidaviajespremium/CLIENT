import { Route, Routes, Navigate, useLocation  } from 'react-router-dom'
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
import MetricsDetail from './components/Dashboard/Users/Metrics/MetricsDetail/MetricsDetail'

function App() {
  const {pathname} = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  const userLogued = user && (user.role === "Administrador" || user.role === "Colaborador");

  return (
    <>
      {!pathname.startsWith('/admin/') && <Header/>}
      <main className='main'>
        <Routes>
          <Route path='/admin/*' element={userLogued ? <AdminPanel /> : <Navigate to="/" element={<Home />} />} />
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
          <Route path='/admin/metrics/detail/:id' element={<MetricsDetail />} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </main>
      {!pathname.startsWith('/admin/') && <Footer/>}
    </>
  )
}


export default App