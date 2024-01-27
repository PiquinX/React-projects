import { useCart } from '../../Hooks/useCart'
import { ProductListImages } from '../../components/ProductsList/ProductListImages'
import { Rating } from '../../components/bothProducts/Rating'
import { applyDiscount } from '../../services/applyDiscount'
import { Link } from 'react-router-dom'
import { AddOneToCartButton } from '../../components/ProductsList/AddOneToCartButton'
import { FavButton } from '../../components/bothProducts/FavButton'
import { useSesion } from '../../Hooks/useSesion'

export function Products ({ products }) {
  // We call the function addOneToCart from the useCart custom Hook.
  const { addOneToCart } = useCart()

  const { account, handleFavourites, isInFavs } = useSesion()

  return (
        <div className='grid gap-10 place-items-center grid-cols-responsive'>
        {
            products.map(product => (
              <div key={product.id} className='flex relative flex-col justify-center gap-2 px-5 pb-3 bg-white border rounded max-w-[500px] w-full'>
                <ProductListImages
                  link={`product/${product.title}/${product.id}`}
                  imgs={product.images}
                />
                <Link
                  to={`product/${product.title}/${product.id}`}
                  className='w-full font-bold truncate hover:underline'
                >
                  <span className='overflow-hidden'>{product.title}</span>
                </Link>
                <div className='absolute right-5 bottom-28'>
                  {
                    account
                      ? <FavButton
                          handleFavourites={() => handleFavourites({ product })}
                          isInFavs={isInFavs({ product })}
                        />
                      : <Link to='/login' className="text-2xl text-red-700">
                          <i className="fa-regular fa-heart"></i>
                        </Link>
                  }
                </div>
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
  )
}
