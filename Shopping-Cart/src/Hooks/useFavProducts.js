import { useEffect, useRef, useState } from 'react'
import { getFavProducts } from '../services/getFavProducts'
import { useSort } from './useSort'
import { useFilters } from './useFilters'

export const useFavProducts = () => {
  const { sortProducts } = useSort()
  // We call the customHook to get the function which Filters the products.
  const { filterProducts } = useFilters()
  const isLoading = useRef(false)
  const [favProducts, setFavProducts] = useState([])

  useEffect(() => {
    async function fetchProducts () {
      isLoading.current = true
      const allFavProducts = await getFavProducts()
      setFavProducts(allFavProducts)

      isLoading.current = false
    }

    fetchProducts()
  }, [])

  const filteredProducts = filterProducts(favProducts ?? [])

  const sortedProducts = sortProducts(filteredProducts) ?? []

  return { isLoading: isLoading.current, favProducts: sortedProducts, allFavProducts: favProducts }
}
