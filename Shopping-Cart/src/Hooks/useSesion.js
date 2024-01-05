import { useContext } from 'react'
import { SesionContext } from '../contexts/sesionContext'

export function useSesion () {
  const { account, handleLogOut, handleLogIn, handleFavourites } = useContext(SesionContext)

  return { account, handleLogOut, handleLogIn, handleFavourites }
}
