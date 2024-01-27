import { Link } from 'react-router-dom'
import { useSelect } from '../../hooks/useSelect'
import { LogOutModal } from './logOutModal'

export function ProfileDropDownMenu ({ username }) {
  const { isShowing, setIsShowing } = useSelect()

  const dropDownClass = isShowing ? 'pointer-events-auto top-[46px] opacity-100' : 'pointer-events-none top-3/4 opacity-0'

  const buttonClass = isShowing ? 'bg-white text-blue-700' : 'bg-blue-700 text-white'

  const handleClick = () => setIsShowing(!isShowing)

  return (
        <>
            <div className="relative text-white">
              <button
                data-dropdown-button
                className={`${buttonClass} z-10 flex items-center gap-3 px-5 py-2 bg-transparent border-2 border-white rounded-lg cursor-pointer`}
                onClick={handleClick}
              >
                <i className="pointer-events-none fa-solid fa-user"></i>
                <span className='pointer-events-none'>{username}</span>
              </button>

              <div className={`${dropDownClass} absolute duration-150 left-0 flex-col bg-blue-700 border-2 rounded-lg shadow w-max h-max peer-hover:flex`}>
                {/* <div className="flex items-center gap-3 px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-900">
                  <i className="fa-solid fa-gear"></i>
                  <span>Profile</span>
                </div> */}
                <Link to={'/favourites'} className="flex items-center gap-3 px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-900">
                  <i className="fa-regular fa-heart"></i>
                  <span>Favourites</span>
                </Link>
                <LogOutModal />
              </div>
            </div>
        </>
  )
}
