import React from 'react'

function Form() {
  return (
    <div className='flex flex-col font-roboto w-[50%] items-center text-center gap-3 mt-20 mb-6'>
      <p className=' text-4xl text-center'> Welcome to Vridhee</p>
        <div className='flex items-center'>
          <div className='w-28 h-1 border bg-gradient-to-r to-navblue from-transparent '></div>
          <span className=' font-extraThin px-3'>Sign up With</span>
          <div className='w-28 h-1 border bg-gradient-to-r from-navblue to-transparent'></div>
          </div>
      <div className='flex gap-3'>
          <img src="/images/vridheetaskpng/Google logo 1x.png" alt="" />
          <img src="/images/vridheetaskpng/Facebook logo 1x.png" alt="" />
          <img src="/images/vridheetaskpng/Linked in  logo 1x.png" alt="" />
          <img src="/images/vridheetaskpng/Apple logo 1x.png" alt="" />
      </div>
      <p>or</p>
      <form className='w-full flex flex-col gap-4'>
        <input type="text" placeholder='Username , email & phone number' className='border-2 w-full rounded-full p-5  border-gray-400' />
        <input type="text" placeholder='Password' className='w-full rounded-full p-5  border-2 border-gray-400' />
        <button type="submit" className=' bg-navblue text-white  border-2 w-full rounded-full p-5 font-extrabold text-2xl border-gray-400'>Login</button>
      </form>
      <p className='underline text-gray-500'>Forgot Password ? </p>
    </div>
  )
}

export default Form