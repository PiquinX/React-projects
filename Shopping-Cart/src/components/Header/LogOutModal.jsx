import { useSesion } from '../../Hooks/useSesion'
import { useSelect } from '../../hooks/useSelect'

export function LogOutModal () {
  const { isShowing, setIsShowing } = useSelect()

  const { handleLogOut } = useSesion()

  const handleClick = () => setIsShowing(!isShowing)

  return (
    <>
    <div
        className="flex items-center gap-3 px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-900"
        onClick={handleClick}
        data-dropdown-button
    >
        <i className="pointer-events-none fa-solid fa-right-from-bracket"></i>
        <span className='pointer-events-none'>Log Out</span>
    </div>

    {
        isShowing &&
        <div
            className='fixed top-0 left-0 z-50 flex flex-col justify-center items-center w-screen h-screen bg-[#0006] backdrop-blur-sm'

        >
            <div
                data-dropdown-button
                className='w-[30rem] bg-blue-500 rounded-lg h-[15rem]'

            >
                <button onClick={handleLogOut}>Log Out</button>
            </div>
        </div>
    }
    </>
  )
}
