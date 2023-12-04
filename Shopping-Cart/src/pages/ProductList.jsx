import allProducts from '../mocks/products.json'
import { useFilters } from '../Hooks/useFilters'
import { useCart } from '../Hooks/useCart'
import { ImagesProduct } from '../components/products/ImagesProduct'
import { Rating } from '../components/products/Rating'
import { useSort } from '../Hooks/useSort'
import { applyDiscount } from '../services/applyDiscount'
import { Sort } from '../components/products/Sort'
import { AsideFilters } from '../components/products/Filter/AsideFilters'
import { Link } from 'react-router-dom'
import { AddOneToCartButton } from '../components/products/AddOneToCartButton'


export function ProductsList () {
  const { sortProducts } = useSort()
  // We call the customHook to get the function which Filters the products.
  const { filterProducts } = useFilters()
  // We call the function addOneToCart from the useCart custom Hook.
  const { addOneToCart } = useCart()

  // We filter the products.
  const filteredProducts = filterProducts(allProducts.products)

  const sortedProducts = sortProducts(filteredProducts)

  return (
    <>
      <div className='flex justify-between'>
          <AsideFilters />
          <Sort />
      </div>
      <div className='grid gap-10 place-items-center grid-cols-responsive'>
        {
          sortedProducts.length === 0 
          
            ? <p className='text-2xl text-center'>No matching results</p>

            : sortedProducts.map(product => (
              <div key={product.id} className='flex flex-col justify-center gap-2 px-5 pb-3 bg-white border rounded max-w-[500px] w-full'>
                <ImagesProduct 
                  link={`product/${product.title}/${product.id}`} 
                  imgs={product.images} 
                />
                <Link 
                  to={`product/${product.title}/${product.id}`} 
                  className='font-bold w-max hover:underline'
                >
                  {product.title}
                </Link>
                <p className='font-bold text-green-400'>{Math.round(product.discountPercentage)}% OFF</p>
                <Rating rating={product.rating} />
                <p className='flex gap-3'>
                  <span className='font-bold text-blue-700'>{applyDiscount(product)}$</span>
                  <span className='text-gray-600 line-through'>{product.price},00$</span>
                </p>
                <AddOneToCartButton addOneToCart={() => addOneToCart(product)} />
              </div>
            ))
        }
      </div>
    </>
  )
}
