import { Sort } from '../components/ProductsList/Sort'
import { AsideFilters } from '../components/ProductsList/Filter/AsideFilters'
import { useNavigate } from 'react-router-dom'
import { useSesion } from '../Hooks/useSesion'
import { FavProductsController } from '../components/FavProductsController'

export function FavsList () {
  const { account } = useSesion()

  const navigate = useNavigate()

  setTimeout(() => {
    console.log(!account)
    if (!account) navigate('/login')
  }, 100)

  return (
    <>
      <div className='flex justify-between'>
          <AsideFilters />
          <Sort />
      </div>
      <FavProductsController />
      {/* <div className='grid gap-10 place-items-center grid-cols-responsive'>
        {
          account.favourites.length === 0

            ? <p className='text-2xl text-center'>{"You don't have any items in your fav list."}</p>

            : sortedFavs.length === 0

              ? <p className='text-2xl text-center'>No matching results.</p>

              : sortedFavs.map(product => (
              <div key={product.id} className='flex relative flex-col justify-center gap-2 px-5 pb-3 bg-white border rounded max-w-[500px] w-full'>
                <ImagesProduct
                  link={`/product/${product.title}/${product.id}`}
                  imgs={product.images}
                />
                <Link
                  to={`/product/${product.title}/${product.id}`}
                  className='w-full font-bold truncate hover:underline'
                >
                  <span className='overflow-hidden'>{product.title}</span>
                </Link>
                <div className='absolute right-5 bottom-28'>
                    <FavButton
                        handleFavourites={() => handleFavourites({ product })}
                        isInFavs={true}
                    />
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
      </div> */}
    </>
  )
}
