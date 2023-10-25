import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import store from './redux/store/store.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-mnltohiryggl7674.us.auth0.com'
      clientId='A5kuowI5gFwGpqWdIOhoEVOMJy8JAEva'
      authorizationParams={{        //Nuevo redireccionamiento
        redirect_uri: window.location.origin + window.location.pathname ,
        audience:'https://puravidaapireact',
        scope:'openid profile email',
      }}
      >
      <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
)
