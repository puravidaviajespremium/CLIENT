import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import store from './redux/store/store.js'
import './index.css'
const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN;
const auth0ClientId= import.meta.env.VITE_AUTH0_CLIENTID
const auth0Audience= import.meta.env.VITE_AUTH0_AUDIENCE;



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0Domain}
      clientId={auth0ClientId}
      authorizationParams={{        //Nuevo redireccionamiento
        redirect_uri: window.location.origin,
        audience:`${auth0Audience}`,
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
