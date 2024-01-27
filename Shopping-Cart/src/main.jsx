import { CartProvider } from './contexts/cartContext'
import { SesionProvider } from './contexts/sesionContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SortProvider } from './contexts/sortContext.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <SesionProvider>
        <SortProvider>
          <App />
        </SortProvider>
      </SesionProvider>
    </CartProvider>
  </BrowserRouter>
)
