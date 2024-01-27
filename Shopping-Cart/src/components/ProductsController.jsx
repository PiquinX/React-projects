import { useProducts } from '../Hooks/useProducts'
import { ProductError } from './ProductsController/ProductError'
import { ProductsLoading } from './ProductsController/ProductsLoading'
import { Products } from './ProductsController/Products'

export function ProductsController () {
  const { isLoading, products } = useProducts()

  if (isLoading) return <ProductsLoading />
  else if (!products || products.length === 0) return <ProductError />
  else return <Products products={products} />
  // return (
  //     <div className='grid gap-10 place-items-center grid-cols-responsive'>
  //     {
  //         products.map(product => (
  //           <div key={product.id} className='flex relative flex-col justify-center gap-2 px-5 pb-3 bg-white border rounded max-w-[500px] w-full'>
  //             <ImagesProduct
  //               link={`product/${product.title}/${product.id}`}
  //               imgs={product.images}
  //             />
  //             <Link
  //               to={`product/${product.title}/${product.id}`}
  //               className='w-full font-bold truncate hover:underline'
  //             >
  //               <span className='overflow-hidden'>{product.title}</span>
  //             </Link>
  //             <div className='absolute right-5 bottom-28'>
  //               {
  //                 account
  //                   ? <FavButton
  //                       handleFavourites={() => handleFavourites({ product })}
  //                       isInFavs={isInFavs({ product })}
  //                     />
  //                   : <Link to='/login' className="text-2xl text-red-700">
  //                       <i className="fa-regular fa-heart"></i>
  //                     </Link>
  //               }
  //             </div>
  //             <p className='font-bold text-green-400'>{Math.round(product.discountPercentage)}% OFF</p>
  //             <Rating rating={product.rating} />
  //             <p className='flex gap-3'>
  //               <span className='font-bold text-blue-700'>{applyDiscount(product)}$</span>
  //               <span className='text-gray-600 line-through'>{product.price},00$</span>
  //             </p>
  //             <AddOneToCartButton addOneToCart={() => addOneToCart(product)} />
  //           </div>
  //         ))
  //     }
  //   </div>
  // )
}
