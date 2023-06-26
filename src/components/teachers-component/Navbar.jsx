import React from 'react'
function Navbar() {
    return (
        <div className='flex justify-between items-center text-base font-roboto mt-5 mb-5'>
            <img src="/images/vridhee task svg/vridhee logo with name.svg" className=' ml-40 text-blue-500 ' />

            <ul className='flex justify-between gap-10 mr-10 text-sm'>
                <li className='text-center text-navblue font-semibold '><img src="/images/vridheetaskpng/light on 1x.png " alt="" className='m-auto mb-2'></img>
                    Light On</li>

                <li className='text-center text-navblue font-semibold'><img src="/images/vridheetaskpng/community 1x.png " alt="" className='m-auto mb-2'></img>
                    Community</li>
                <li className='text-center text-navblue font-semibold'><img src="/images/vridhee task svg/learning.svg " alt="" className='m-auto mb-2'></img>
                    Learning</li>
                <li className='text-center text-navblue font-semibold'><img src="/images/vridhee task svg/doubt.svg " alt="" className='m-auto mb-2'></img>
                    Doubt</li>

                <button className='text-navblue font-semibold text-sm rounded-full px-7  border-2 border-navblue'> 
                Join Now</button>
            </ul>
        </div>
    )
}

export default Navbar