import React from 'react'

function Activity() {
    const activityArr = [{
        img: "/images/resources/academic.png",
        name: "Activity"
    },
    {
        img: "/images/resources/non-academic.png",
        name: "Non-academic"
    }, {
        img: "/images/resources/community.png",
        name: "Community Service"
    }, {
        img: "/images/resources/family-bonding.png",
        name: "Family Bonding"
    }
    ]
    return (
        <div className='flex w-full gap-3 flex-col font-poppins mb-6'>
            <p className='text-navblue text-3xl font-semibold '>Activity</p>
            <p className='text-lg font-semibold mb-5 text-gray-700'>Create and participate in activity driven learning mechanism and win Vcoins</p>
            <div className='flex items-center justify-between'>
                {activityArr.map((item)=>{
                    return<div className='w-[24%]  text-center'>
                    <img src={item.img} alt="" className='shadow-xl
                      w-full h-64 rounded-lg' />
                    <p className='text-navblue text-xl mt-3  font-semibold'>{item.name}</p>
                </div>
                })}
            </div>
        </div>
    )
}

export default Activity