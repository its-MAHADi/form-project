
import { useState } from 'react'
import './App.css'

function App() {

  const [phonenumber,setphonenumber] = useState("")
  const [password,setpassword] = useState("")

const handleblurphonenumber =(e) =>{
  const value = e.target.value
setphonenumber (value)
}
const handleblurpassword =(e) =>{
  const value = e.target.value
  setpassword (value)
  }
  //facebook
  const handlelogin =(e) => {
    e.preventdefault();
  console.log (phonenumber,password);
  }

  return (
    <div className='w-2/6 mx-auto bg-indigo-100 p-10 rounded mt-20'>

    <form onSubmit= {handlelogin} className='flex flex-col gap-5'>

      <input type="text" name='Phone number' onBlur={handleblurphonenumber} placeholder='Email address or phone number' className='border px-2 py-2 rounded' />

      <input type="password" name='Password'onBlur={handleblurpassword} placeholder='Password' className='border px-2 py-2 rounded' />

      <button className='bg-blue-600 px-4 py-2  text-white rounded' type='login'> Log in </button>

      <h2 className='text-blue-600 text-center'>Forgotten password?</h2>

      <button className='bg-green-600 px-4 py-2  text-white rounded'> Create new account </button>

    </form>
    </div>
  )
}

export default App
