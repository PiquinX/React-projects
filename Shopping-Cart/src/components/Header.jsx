import { Cart } from './Cart/Cart'
import { useFilters } from '../Hooks/useFilters'
import { Link, useNavigate } from 'react-router-dom'
import { useSesion } from '../Hooks/useSesion'
import { ProfileDropDownMenu } from './Header/ProfileDropDownMenu'

export function Header () {
  // We call the useFilters to get the filters state and the changeSearch to update only the search.
  const { filters, changeSearch } = useFilters()

  const { account } = useSesion()

  const navigate = useNavigate()

  // This function updates the search filter.
  const handleChange = (event) => {
    navigate('/')
    const newSearch = event.target.value

    // If the user types an space the value won't be updated.
    if (newSearch === ' ') return

    // Updates the value of the input (the search).
    changeSearch(newSearch)
  }

  // Resets the search
  const restartSearch = () => changeSearch('')

  // We apply styles depending on the length of the search.
  const inputClass = filters.search.length > 0 ? 'w-44 pl-10 pr-7 border-white z-[400] shadow' : 'w-6 pl-6 border-transparent'
  const xmarkClass = filters.search.length > 0 ? 'block' : 'hidden'

  return (
    <header className='sticky top-0 z-40 h-24 bg-blue-700'>
      <Link to={'/'} className='text-2xl py-[1.65rem] font-bold text-white xs:text-3xl sm:text-4xl ml-6 xs:ml-10 lg:ml-24 2xl:ml-44 select-none absolute'>PIQUIN SHOP</Link>
      <div className='flex absolute top-[1.65rem] right-6 xs:right-10 lg:right-24 2xl:right-44 gap-8'>
        <div className='relative group'>
          <input
            tabIndex={1}
            id='search'
            onChange={handleChange}
            value={filters.search}
            placeholder='Search'
            className={`${inputClass} outline-0 px-3 py-1 duration-100 bg-blue-700 text-white border-2 rounded focus:w-44 focus:z-[400] shadow-white focus:border-white focus:pl-10`}
          />

          <label htmlFor='search'>
            <i className='text-white absolute top-0 left-0 px-[.56rem] py-[0.15rem] text-2xl fa-solid fa-magnifying-glass cursor-pointer' htmlFor='search' />
          </label>

          <label htmlFor='search'>
            <i
              onClick={restartSearch}
              className={`${xmarkClass} text-white absolute top-0 right-0 px-[.53rem] py-1 text-xl fa-solid fa-xmark cursor-pointer`} htmlFor='search'
            />
          </label>
        </div>
        <Cart />
        {
          !account
            ? (
                <Link to='/login' className='flex gap-2 px-3 py-2 text-xl text-white border-2 border-white rounded-lg'>
                  Log In <i className="relative top-[6px] fa-solid fa-right-to-bracket"></i>
                </Link>
              )
            : (
                <ProfileDropDownMenu username={account.userName} />
              )
        }
      </div>
    </header>
  )
}
