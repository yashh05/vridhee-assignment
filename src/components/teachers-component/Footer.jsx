import React from 'react'

function AboveFooter(){
    return(
        <div className='m-auto relative top-7 z-50'>
            <ul className='flex gap-4'>
            <li className='border border-navblue bg-white flex rounded-xl py-2 px-5'>
                <img src="/images/vridheetaskpng/Campuses logo  1x.png" />
                <div>
                    <p className='font-extrabold text-center text-navblue'>300</p>
                    <p className='text-xs text-center' >Campuses</p>
                </div>
            </li>
            <li className='border border-navblue bg-white flex rounded-xl py-2 px-5'>
                <img src="/images/vridheetaskpng/Students logo  1x.png" />
                <div>
                    <p className='font-extrabold text-center text-navblue'>68000</p>
                    <p className='text-xs text-center'>students</p>
                </div>
            </li>
            <li className='border border-navblue bg-white flex rounded-xl py-2 px-5'>
                <img src="/images/vridheetaskpng/Courses 1x.png" />
                <div>
                    <p className='font-extrabold text-center text-navblue'>1867</p>
                    <p className='text-xs text-center'>Courses</p>
                </div>
            </li>
            <li className='border border-navblue bg-white flex rounded-xl py-2 px-5'>
                <img src="/images/vridheetaskpng/Communities 1x.png" />
                <div>
                    <p className='font-extrabold text-center text-navblue'>4320</p>
                    <p className='text-xs text-center'>Communities</p>
                </div>
            </li>
            <li className='border border-navblue bg-white flex rounded-xl py-2 px-5'>
                <img src="/images/vridheetaskpng/Mentors 1x.png" />
                <div>
                    <p className='font-extrabold text-center text-navblue'>3652</p>
                    <p className='text-xs text-center'>Mentors</p>
                </div>
            </li>

            </ul>
        </div>
    )
}



function Footer() {
  return (
    <>
    <AboveFooter />
    <div className='bg-navblue text-white  py-20'>
      <div className='w-[80%] flex justify-around m-auto items-center'>
        <img src="/images/vridheetaskpng/Vridhee white logo with Name 1x.png" />
      <div>
        <ul className='text-xs'>
        <li>About</li>
        <li>Contact</li>
        <li>Careers</li>
        <li>Developer</li>
        <li>Community</li>
        </ul>
      </div>
      <div>
        <ul className='text-xs'>
            <li>Feedback</li>
            <li>Help</li>
            <li>Terms</li>
            <li>Privacy center</li>
            <li>Cookies</li>
        </ul>
      </div>
      <div className='flex flex-col gap-3'>
        <button className='border rounded-lg py-1 pl-3 text-sm text-start w-52 border-white '>Support Us</button>
        <button className='border rounded-lg py-1 pl-3 text-sm text-start w-52 border-white '>FundRaisers</button>
      </div>
      <div className='flex flex-col gap-6'>
        <p className='text-xs'>Language</p>
        <select name='lang' className='text-black w-68 border-none font-light rounded-lg py-2 pl-4'>
            <option value='English'>English</option>
            <option>English</option>
            <option>English</option>
        </select>
        <div className='flex gap-3'>
            <img src="/images/vridhee task svg/Apple store.svg" />
            <img src="/images/vridhee task svg/Google play get.svg" />
        </div>
        <div className='flex gap-3 m-auto'>
            <img src="/images/vridheetaskpng/Facebook logo white 1x.png" />
            <img src="/images/vridheetaskpng/Twitter logo white 1x.png" />
            <img src="/images/vridheetaskpng/Youtube logo white 1x.png" />
            <img src="/images/vridheetaskpng/Linkedin logo white 1x.png" />
            <img src="/images/vridheetaskpng/Instagram logo white 1x.png" />
        </div>
      </div>

    </div>
    <div className='w-[80%] bg-gray-500 h-[1px] m-auto mt-2'></div>
    </div>
    </>
  )
}

export default Footer