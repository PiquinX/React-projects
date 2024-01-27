import { useParams } from 'react-router'
import allProducts from '../mocks/products.json'
import { useState } from 'react'
import { applyDiscount } from '../services/applyDiscount'
import { useCart } from '../Hooks/useCart'
import { ProductImages } from '../components/Product/ProductImages'
import { Rating } from '../components/bothProducts/Rating'
import { AddToCartButton } from '../components/Product/AddToCartButton'

const getWholeProduct = ({ id }) => {
  // We look for the position of the product.
  const productIndex = allProducts.products.findIndex(product => product.id === id)

  return allProducts.products[productIndex]
}

export function Product () {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const product = getWholeProduct({ id: parseInt(id) })

  const handleAdd = () => {
    addToCart(product, quantity)
    setQuantity(1)
  }

  return (
        <div key={product.id} className='flex flex-col lg:flex-row w-full h-full gap-4 pt-10 pb-5 min-h-[30rem]'>
          <h3 className="w-full text-2xl font-bold lg:hidden">{product.title}</h3>

          <div className='lg:w-[50%] h-[26rem] lg:h-[40rem] lg:px-3'>
            <ProductImages
              imgs={product.images}
            />
          </div>

          <div className='flex flex-col pt-10 lg:pt-0 lg:h-[40rem] justify-between gap-10 lg:gap-0 lg:w-[50%]'>
            <h3 className="hidden w-full text-2xl font-bold lg:flex">{product.title}</h3>
            <Rating rating={product.rating} size='text-xl'></Rating>
            <p className='flex gap-5 text-xl'>
              <span className='font-bold text-blue-700'>{applyDiscount(product)}$</span>
              <span className='text-gray-600 line-through'>{product.price},00$</span>
            </p>
            <p className="grid gap-1">
              <span className="text-lg underline">Description:</span>
              <span>{product.description}.</span>
            </p>
            <div className="flex flex-row w-full gap-2">
              <div className='flex items-center gap-2 border border-black rounded-3xl w-max'>
                <button disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)} className='px-2 pt-0.5 pb-1 text-2xl font-bold'> - </button>
                <p className='w-8 px-2 text-center'>{quantity}</p>
                <button onClick={() => setQuantity(quantity + 1)} className='px-2 pt-0.5 pb-1 text-2xl font-bold'> + </button>
              </div>
              <AddToCartButton handleAdd={handleAdd} />
            </div>
          </div>
        </div>
  )
}
