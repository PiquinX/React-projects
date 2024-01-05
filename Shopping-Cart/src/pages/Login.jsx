import { Input, InputPassword } from '../components/forms/Inputs'
import accounts from '../mocks/accounts.json'
import { useSesion } from '../Hooks/useSesion'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function Login () {
  const { handleLogIn } = useSesion()
  const navigate = useNavigate()

  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const { account } = useSesion()

  setInterval(() => {
    if (account) navigate('/')
  }, 100)

  const handleSubmit = (event) => {
    event.preventDefault()
    const userAccountIndex = accounts.users.findIndex(user => user.userName === name || user.mail === name)

    if (userAccountIndex) {
      setError('The username or email is wrong')

      return
    }

    if (accounts.users[userAccountIndex].password === password) {
      handleLogIn({ newAccount: accounts.users[userAccountIndex] })
      navigate('/')
    } else {
      setError('wrong password')
    }
  }

  const handleName = (event) => setName(event.target.value)

  const handlePassword = (event) => setPassword(event.target.value)

  return (
    <div className='flex flex-col items-center justify-center w-full h-full mt-10'>
      <form onSubmit={handleSubmit} className="flex flex-col h-full gap-10 px-10 py-8 border border-gray-400 rounded-md w-80">
        <h1 className='text-2xl font-bold text-center text-blue-700'>LOG IN</h1>
        <div className='flex flex-col gap-5'>
          <Input
            placeholder="username or mail"
            value={name}
            handleChange={handleName}
          />
          <InputPassword
            placeholder="password"
            value={password}
            handleChange={handlePassword}
          />
        </div>

        <button className='w-full py-2 text-lg font-bold text-blue-700 duration-75 border-2 border-blue-700 rounded-lg select-none hover:text-white hover:bg-blue-700 focus:text-white focus:bg-blue-700' >
          Log In
        </button>
      </form>
    </div>
  )
}
