// I know that this is a custom hook because it has a hook on it, but I'm doing it for practice pourposes
export const getFavProducts = async () => {
  const account = JSON.parse(localStorage.getItem('account'))

  const favourites = account.favourites

  await new Promise(resolve => setTimeout(resolve, 5000))

  return favourites
}
