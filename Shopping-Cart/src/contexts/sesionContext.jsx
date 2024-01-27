import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// We create the context to be called with the useContext().
export const SesionContext = createContext()

export function SesionProvider ({ children }) {
  const navigate = useNavigate()
  const [account, setAccount] = useState(() => {
    // const localSesion = JSON.parse(localStorage.getItem('sesion'))

    // if (localSesion) return localSesion
    // else return false

    return JSON.parse(localStorage.getItem('account')) || false
  })

  const handleLogIn = ({ newAccount }) => {
    setAccount(newAccount)
  }

  const handleLogOut = () => {
    setAccount(false)
    navigate('/login')
  }

  const handleFavourites = ({ product }) => {
    const productIndex = account.favourites.findIndex(fav => fav.id === product.id)

    const newAccount = structuredClone(account)

    if (productIndex >= 0) newAccount.favourites.splice(productIndex, 1)
    else newAccount.favourites.push(product)

    console.log(newAccount)

    setAccount(newAccount)
  }

  const isInFavs = ({ product }) => account.favourites.findIndex(fav => fav.id === product.id) >= 0

  useEffect(() => {
    localStorage.setItem('account', JSON.stringify(account))
    console.log(account)
  }, [account])

  return (
    <SesionContext.Provider value={{
      account,
      handleLogIn,
      handleLogOut,
      handleFavourites,
      isInFavs
    }}
    >
      {children}
    </SesionContext.Provider>
  )
}
