import { useEffect, useRef, useState } from 'react'
import { getProducts } from '../services/getProducts'
import { useSort } from './useSort'
import { useFilters } from './useFilters'

export const useProducts = () => {
  const { sortProducts } = useSort()
  // We call the customHook to get the function which Filters the products.
  const { filterProducts } = useFilters()
  const isLoading = useRef(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts () {
      isLoading.current = true
      const allProducts = await getProducts()
      setProducts(allProducts.products)

      isLoading.current = false
    }

    fetchProducts()
  }, [])

  const filteredProducts = filterProducts(products ?? [])

  const sortedProducts = sortProducts(filteredProducts) ?? []

  return { isLoading: isLoading.current, products: sortedProducts }
}
