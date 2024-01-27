import { useState } from 'react'

export function AddToCartButton ({ handleAdd }) {
  const [isAdding, setIsAdding] = useState(false)
  const [succes, setSucces] = useState(false)

  const handleClick = () => {
    setIsAdding(true)

    setTimeout(() => {
      setSucces(true)
      setTimeout(() => {
        setIsAdding(false)
        handleAdd()
        setSucces(false)
      }, 800)
    }, 800)
  }

  return (
    <div className="relative grow">
        <button
        className='w-full px-8 py-3 text-blue-700 duration-75 border-2 border-blue-700 rounded-lg md:px-0 hover:text-white hover:bg-blue-700 focus:text-white focus:bg-blue-700'
        onClick={handleClick} >
            <span className='hidden xs:inline-block'>Add to Cart</span> <i className='fa-solid fa-cart-shopping' />
        </button>
        {
        isAdding && !succes
          ? <div className='absolute top-0 right-0 z-10 grid w-full h-full py-3 text-white duration-75 bg-blue-800 border-2 border-blue-800 rounded-lg place-items-center' >
                <i className="text-xl fa-solid fa-arrows-rotate animate-spin"></i>
            </div>
          : succes && <div className='absolute top-0 right-0 z-10 grid w-full h-full py-3 text-white duration-75 bg-blue-800 border-2 border-blue-800 rounded-lg place-items-center' >
                <i className='text-2xl fa-solid fa-check' />
                <span className='absolute animate-succes top-0 left-[44%] bg-blue-800 w-[50px] h-full' />
            </div>
        }
    </div>
  )
}
