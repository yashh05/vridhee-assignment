import React, { useState } from 'react'

function Advocacy() {

    const AdvocacyArr = [
        {
            id: 1,
            info: "Vridhee is one of the most user-friendly Integrated School Solutions out there.Their Fee Module has helped keep a tab on the collection and dues .I recommend Vridhee to anyone who wants to digitize their school.",
            name: "Mr. Yash Sharma"
        },
        {
            id: 2,
            info: "Vridhee is one of the most user-friendly Integrated School Solutions out there.Their Fee Module has helped keep a tab on the collection and dues .I recommend Vridhee to anyone who wants to digitize their school.",
            name: "Mr. Pranav kumar"
        }
    ]

    const [reviewId, setReviewId] = useState(1);

    return (
        <div className='flex font-poppins w-full flex-col '>
            <h1 className='font-semibold text-3xl text-navblue my-10'>Advocacy</h1>
            <div className='flex w-full justify-center gap-2 items-center'>
                <button className='cursor-pointer disabled:bg-gray-300 disabled:cursor-default disabled:rounded-[50%]' disabled={reviewId === 1} onClick={() => setReviewId(reviewId - 1)} > <img src="/images/resources/back-page.png" alt="" 
                 />  </button>
                {AdvocacyArr.filter(item => item.id === reviewId).map((item) => {
                    return <div className='flex w-[93%] gap-3 items-center  bg-white rounded-lg px-9 py-10 '>
                        <p className='text-2xl font-[500] text-center'>
                            {item.info}
                        </p>
                        <div className='flex items-center flex-col'>
                            <img src="/images/resources/pranav.png" />
                            <p className='text-lg font-[500]'>{item.name} </p>
                            <p className='text-xs'>Administrative Director,
                                Virendra tiny tots paradise </p>
                            <p className='text-xs'>Jaipur,Rajasthan</p>
                        </div>
                    </div>
                })

                }

                <button className='cursor-pointer disabled:bg-gray-300 disabled:cursor-default disabled:rounded-[50%]' disabled={reviewId === AdvocacyArr.length} onClick={() => setReviewId(reviewId + 1)}> <img src="/images/resources/next-page.png" alt=""  /></button>
            </div>

        </div>
    )
}

export default Advocacy