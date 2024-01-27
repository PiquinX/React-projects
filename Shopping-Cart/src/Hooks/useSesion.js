import { useContext } from 'react'
import { SesionContext } from '../contexts/sesionContext'

export function useSesion () {
  const { account, handleLogOut, handleLogIn, handleFavourites, isInFavs } = useContext(SesionContext)

  return { account, handleLogOut, handleLogIn, handleFavourites, isInFavs, favourites: account.favourites }
}
