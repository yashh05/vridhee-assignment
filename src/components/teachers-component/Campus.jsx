import React from 'react'

function Campus() {
    let campArr=['website','Mobile APP','Enquiry','Admission','Fee Management','Payment Gateway','Digital Content','Live Classes',
'Question Bank','Lesson Planning','Doubt clearing','Attendance','Notice Board','Information Center','HR Management'];

  return (
    <div className='flex flex-col gap-3'>
        <p className=' text-navblue text-3xl font-semibold '>Campus</p>
        <p className='text-gray-700 text-lg'>Build your own Campus in your name for free and get access to all our content ,question bank & e-books </p>
          <ul className='flex flex-wrap gap-2'>
            {campArr.map((cat)=>{
                return <li className=' border rounded-full border-gray-400 px-4 py-3 font-semibold mb-2 cursor-pointer'>{cat}</li>
            })}
          </ul>
        </div>
  )
}

export default Campus