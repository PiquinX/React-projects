import { ProductsList } from '../pages/ProductList'
import { Product } from '../pages/Product'
import { SortProvider } from '../contexts/sortContext'
import { Link, Route, useParams, Routes, Outlet } from 'react-router-dom'

export function Main () {
  return (
    <SortProvider>
      <main className='px-6 grow xs:px-10 lg:px-24 2xl:px-44'>
        <Routes>
          <Route path='/product/:productName/:id' element={<Product />} />
          <Route path='/' element={<ProductsList />} />
          <Route path='*' element={<h1 className='text-3xl font-bold'>Not Found</h1>} />
        </Routes>
      </main>
    </SortProvider>
  )
}
