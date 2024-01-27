import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { FiltersProvider } from './contexts/filterContext'
import { Header } from './components/Header'
import { Footer } from './components/footer'
import { ProductsList } from './pages/ProductList'
import { Product } from './pages/Product'
import { Login } from './pages/Login'
import { FavsList } from './pages/FavsList'
import { useEffect, useState } from 'react'

function App () {
  const location = useLocation()

  const [isLoading, setIsLoading] = useState(false)

  const mainStyle = isLoading ? 'opacity-0' : 'opacity-100 duration-[1.25s]'

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 10)
  }, [location])

  return (
    <FiltersProvider>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className={`${mainStyle} min-h-[70vh] px-6 grow xs:px-10 lg:px-24 2xl:px-44`}>
          <Routes>
            <Route path='/product/:productName/:id' element={<Product />} />
            <Route path='/' element={<ProductsList />} />
            <Route path='/favourites' element={<FavsList />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<h1 className='text-3xl font-bold'>Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </FiltersProvider>
  )
}

export default App
