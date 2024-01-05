import { createContext, useEffect, useState } from 'react'

// We create the context to be called with the useContext().
export const SesionContext = createContext()

export function SesionProvider ({ children }) {
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
  }

  const handleFavourites = ({ product }) => {
    const productIndex = account.favourites.findIndex(fav => fav === product)

    const newAccount = account

    if (productIndex >= 0) newAccount.favourites.splice(productIndex, 1)
    else newAccount.favourites.push(product)

    setAccount(newAccount)
  }

  useEffect(() => {
    localStorage.setItem('account', JSON.stringify(account))
  }, [account])

  return (
    <SesionContext.Provider value={{
      account,
      handleLogIn,
      handleLogOut,
      handleFavourites
    }}
    >
      {children}
    </SesionContext.Provider>
  )
}
