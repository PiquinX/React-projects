import { useParams } from "react-router";
import allProducts from '../mocks/products.json'
import { useState, useRef } from "react";
import { applyDiscount } from '../services/applyDiscount'
import { useCart } from '../Hooks/useCart'
import { ProductImages } from '../components/ProductImages'
import { Rating } from '../components/products/Rating'

const getWholeProduct = ({ id }) => {
    // We look for the position of the product.
    const productIndex = allProducts.products.findIndex(product => product.id === id)

    return allProducts.products[productIndex]
}

export function Product (){
    const { id } = useParams()
    const [quantity, setQuantity] = useState(1)
    const { addToCart } = useCart()
    const [isAdding, setIsAdding] = useState(false)

    const product = getWholeProduct({ id: parseInt(id) })

    const handleAdd = () => {
        setIsAdding(true)
        
        setTimeout(() => {
          addToCart(product, quantity)
          setQuantity(1)
          setIsAdding(false)
        }, 1000);
    }

    return (
        <div key={product.id} className='flex w-full h-full gap-4 py-5 min-h-[30rem]'>
          <div className='w-[50%] px-3'>
            <ProductImages
              imgs={product.images} 
            />
          </div>

          <div className='flex flex-col justify-between w-[50%]'>
            <h3 className="w-full text-2xl font-bold">{product.title}</h3>
            <Rating rating={product.rating}></Rating>
            <p className='flex justify-between w-[20%]'>
              <span className='font-bold text-blue-700'>{applyDiscount(product)}$</span>
              <span className='text-gray-600 line-through'>{product.price},00$</span>
            </p>
            <p className="grid gap-1">
              <span className="text-lg underline">Description:</span>
              <span>{product.description}.</span>
            </p>
            <div className="flex gap-2">
              <div className='flex items-center gap-2 border border-black rounded-3xl w-max'>
                <button disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)} className='px-2 pt-0.5 pb-1 text-2xl font-bold'> - </button>
                <p className='w-8 px-2 text-center'>{quantity}</p>
                <button onClick={() => setQuantity(quantity + 1)} className='px-2 pt-0.5 pb-1 text-2xl font-bold'> + </button>
              </div>
              <div className="relative grow">
                <button 
                  className='w-full py-3 text-blue-700 duration-75 border-2 border-blue-700 rounded-lg hover:text-white hover:bg-blue-700 focus:text-white focus:bg-blue-700' 
                  onClick={handleAdd} >
                      Add to Cart <i className='fa-solid fa-cart-shopping' />
                </button>
                {
                  isAdding &&
                  <div className='absolute top-0 right-0 z-10 grid w-full h-full py-3 text-white duration-75 bg-blue-800 border-2 border-blue-800 rounded-lg place-items-center'>
                        <i className="fa-solid fa-arrows-rotate animate-spin"></i>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
    )
}