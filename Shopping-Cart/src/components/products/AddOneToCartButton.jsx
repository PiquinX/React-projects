import { useState } from "react";

export function AddOneToCartButton ({ addOneToCart }) {
    const [isAdding, setIsAdding] = useState(false)
    
    const handleAdd = () => {
        setIsAdding(true)
        
        setTimeout(() => {
            addOneToCart()
            setIsAdding(false)
        }, 1000);
    }
      
    return (
        <div className="relative grow">
            <button 
            className='w-full py-3 text-blue-700 duration-75 border-2 border-blue-700 rounded-lg hover:text-white hover:bg-blue-700 focus:text-white focus:bg-blue-700' 
            onClick={() => handleAdd()} >
                Add to Cart <i className='fa-solid fa-cart-shopping' />
            </button>
            {
            isAdding &&
            <div className='absolute top-0 right-0 z-10 grid w-full h-full py-3 text-white duration-75 bg-blue-800 border-2 border-blue-800 rounded-lg place-items-center' >
                    <i className="fa-solid fa-arrows-rotate animate-spin"></i>
            </div>
            }
        </div>
    )
}