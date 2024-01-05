import { useState } from 'react'

export function ProductImages ({ imgs }) {
  // We set the state that contains which image will be displayed
  const [image, setImage] = useState(0)

  // This functions updates the image state by decreasing the number.
  const handleDecrease = () => {
    if (image === 0) return
    setImage(image - 1)
  }

  // This functions updates the image state by increasing the number.
  const handleIncrease = () => {
    if (image === imgs.length - 1) return
    setImage(image + 1)
  }

  return (
    <div className='flex flex-col w-full h-full gap-5'>
        <div className='z-10 flex items-center w-full bg-transparent grow' >
            {
                imgs.length > 1 &&
                <>
                <button onClick={handleDecrease}
                    className={`${image === 0 ? 'cursor-default opacity-50' : 'hover:bg-black duration-300 hover:bg-opacity-5'} text-gray-600 w-8 lg:w-12 h-full z-10 order-1`}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button onClick={handleIncrease}
                    className={`${image === imgs.length - 1 ? 'cursor-default opacity-50' : 'hover:bg-black duration-300 hover:bg-opacity-5'} text-gray-600 w-8 lg:w-12 h-full z-10 order-3`}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
                </>
            }

            <div className='relative grid order-2 h-full overflow-hidden bg-white grow place-content-center'>
                {
                    imgs.map((img, index) => {
                      const imgClass = index === image
                        ? '-translate-x-1/2'
                        : index > image
                          ? 'translate-x-1/2'
                          : '-translate-x-96'
                      return (
                        <img key={index} src={img} className={`${imgClass} object-cover duration-75 absolute -translate-x-1/2 -translate-y-1/2 h-full w-full top-1/2 left-1/2`} />
                      )
                    })
                }
            </div>
        </div>

        <div className='flex justify-center w-full gap-4 sm:gap-10'>
            {
                imgs.map((img, index) => (
                    <div key={index}
                        className={`${image === index ? 'border-blue-700' : 'border-transparent'} 
                                    border-2 p-[2px] rounded w-20 h-20 cursor-pointer duration-150`}
                        onClick={() => setImage(index)}>
                        <img src={img} className='w-full h-full' />
                    </div>
                ))
            }
        </div>
    </div>
  )
}
