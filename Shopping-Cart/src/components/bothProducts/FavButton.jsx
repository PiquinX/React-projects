export function FavButton ({ isInFavs, handleFavourites }) {
  const fullHeartClass = isInFavs ? 'scale-100' : 'scale-0'

  const handleClick = () => handleFavourites()

  return (
      <button className="relative text-2xl text-red-700" onClick={handleClick}>
          <i className="w-full h-full fa-regular fa-heart"></i>
          <i className={`${fullHeartClass} absolute left-0 w-full h-full duration-75 transform top-1 fa-solid fa-heart`}></i>
      </button>
  )
}
