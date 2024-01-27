import allProducts from '../mocks/products.json'

export const getProducts = async () => {
  await new Promise(resolve => setTimeout(resolve, 5000))

  return allProducts
}
