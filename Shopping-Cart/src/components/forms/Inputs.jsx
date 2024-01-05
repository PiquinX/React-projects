import { useId, useState } from 'react'

export function Input ({ value, handleChange, placeholder, type = 'text' }) {
  const id = useId()

  return (
        <div className="relative">
            <input
                className={`w-full h-full px-3 py-2 outline-1 duration-75 text-md text-black outline-gray-500 rounded outline-none 
                        focus:outline-blue-700 focus:outline-2
                        placeholder:pointer-events-none placeholder:text-transparent placeholder:select-none
                        peer`}
                value={value}
                onChange={handleChange}
                required
                type={type}
                id={id}
                placeholder={placeholder}
            />
            <label
                htmlFor={id}
                className={`text-sm select-none absolute px-1 text-gray-400 duration-150 bg-white pointer-events-none left-3 -top-[.87rem] 
                        peer-focus:text-blue-700 peer-focus:text-sm peer-focus:-top-4 
                        peer-placeholder-shown:text-base peer-placeholder-shown:left-3 peer-placeholder-shown:top-[.37rem]`}
            >
            {placeholder}
            </label>
        </div>
  )
}

export function InputPassword ({ placeholder = 'password', handleChange, value }) {
  const [type, setType] = useState('password')
  const id = useId()

  const handleClick = () => {
    if (type === 'password') setType('text')
    else setType('password')
  }

  return (
        <div className="relative">
            <input
                className={`w-full h-full px-3 py-2 outline-1 duration-75 text-md text-black outline-gray-500 rounded outline-none 
                        focus:outline-blue-700 focus:outline-2
                        placeholder:pointer-events-none placeholder:text-transparent placeholder:select-none
                        peer`}
                value={value}
                onChange={handleChange}
                required
                type={type}
                id={id}
                placeholder={placeholder}
            />
            <label
                htmlFor={id}
                className={`text-sm select-none absolute px-1 text-gray-400 duration-150 bg-white pointer-events-none left-3 -top-[.87rem] 
                        peer-focus:text-blue-700 peer-focus:text-sm peer-focus:-top-4 
                        peer-placeholder-shown:text-base peer-placeholder-shown:left-3 peer-placeholder-shown:top-[.37rem]`}
            >
                {placeholder}
            </label>
            <div onClick={handleClick} className='absolute duration-75 text-gray-600 grid place-content-center -top-[2px] w-[41px] h-[41px] rounded-md cursor-pointer -right-[2px] hover:bg-gray-500/20'>
                {
                    type === 'password'
                      ? (
                            <i className="fa-solid fa-eye"></i>
                        )
                      : (
                            <i className="fa-solid fa-eye-slash"></i>
                        )
                }
            </div>
        </div>
  )
}
