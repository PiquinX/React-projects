import { CartProvider } from './contexts/cartContext'
import { SesionProvider } from './contexts/sesionContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <BrowserRouter>
      <SesionProvider>
        <App />
      </SesionProvider>
    </BrowserRouter>
  </CartProvider>
)
