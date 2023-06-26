import React from 'react'

function Cards() {
  return (
    <div className='flex mb-9 w-full justify-between mt-9'>
        <div className='bg-white rounded-3xl py-6 px-24 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col items-center '>
            <img src="/images/vridheetaskpng/Curriculum 1x.png" alt="" className=' mt-5' />
            <p className='text-navblue font-bold'>Curriculum</p>
        </div>
        <div className='bg-white rounded-3xl py-6 px-24 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col items-center '>
            <img src="/images/vridheetaskpng/community profile 1x.png" alt="" className=' mt-5'/>
            <p className='text-navblue font-bold'>Community</p>
        </div>
        <div className='bg-white rounded-3xl py-6 px-24 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col items-center '>
            <img src="/images/vridheetaskpng/Campus profile 1x.png" alt="" className=' mt-5'/>
            <p className='text-navblue font-bold'>Campus</p>
        </div>
        <div className='bg-white w-60 px-2 py-2 justify-between flex flex-col items-center'>
            <p className='text-navblue text-5xl font-extrabold'>1 M+</p>
            <p className='text-xs text-center px-4' >Teachers are needed in educational institutes in India</p>
            <a className='underline px-4 text-sm'>Low income & exposure in teaching profession</a>
            <button className='bg-navblue text-white py-2 cursor-pointer  rounded-full w-full'>support free Education</button>
        </div>

    </div>
  )
}

export default Cards