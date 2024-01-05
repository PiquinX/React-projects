import { useState } from 'react'
import { Link } from 'react-router-dom'

export function ImagesProduct ({ imgs, link = ''}) {
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
    <div className='relative z-10 flex flex-col items-center justify-around w-full gap-5 bg-transparent rounded h-80' >
      {
        imgs.length > 1
        &&
        <>
          <button onClick={handleDecrease} className={`${image === 0 ? 'text-gray-400 cursor-default opacity-50' : 'hover:scale-[130%] duration-75'}  absolute z-10 -left-2 top-[37%]`}>
            <i className='fa-regular fa-circle-left' />
          </button>
          <button onClick={handleIncrease} className={`${image === imgs.length - 1 ? 'text-gray-400 cursor-default opacity-50' : 'hover:scale-[130%] duration-75'} absolute z-10 -right-2 top-[37%]`}>
            <i className='fa-regular fa-circle-right' />
          </button>
        </>
      }
      

      <Link to={link} className='relative grid w-[85%] h-56 overflow-hidden bg-white rounded place-content-center'>
        {
            imgs.map((img, index) => {
              const imgClass = index === image
                ? '-translate-x-1/2'
                : index > image
                  ? 'translate-x-1/2'
                  : '-translate-x-96'
              return (
                <img key={index} src={img} className={`${imgClass} object-cover duration-75 absolute -translate-x-1/2 -translate-y-1/2 h-56 w-full top-1/2 left-1/2`} />
              )
            })
          }
      </Link>
      <div className='flex justify-center gap-2'>
        {
            imgs.map((img, index) => {
              const buttonColor = index === image ? 'bg-slate-500' : 'bg-slate-300'
              return (
                <button key={index} onClick={() => setImage(index)} className={`${buttonColor} w-3 h-3 rounded-full`} />
              )
            })
          }
      </div>
    </div>
  )
}
