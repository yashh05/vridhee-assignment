import React from 'react'

function Curriculum() {
    const curriArr=[
        {
            img:"/images/resources/html.png",
            title:"HTML & CSS",
            views:1500,
            teacher:2,
            videos:120
        },
        {
            img:"/images/resources/photographer.png",
            title:"Photographer",
            views:1500,
            teacher:2,
            videos:120
        },
        {
            img:"/images/resources/photographer.png",
            title:"Photographer",
            views:1500,
            teacher:2,
            videos:120
        },{
            img:"/images/resources/javascript.png",
            title:"Javascript",
            views:1500,
            teacher:2,
            videos:120
        },
        {
            img:"/images/resources/desain.png",
            title:"Desian Grafis",
            views:1500,
            teacher:2,
            videos:120
        },
        {
            img:"/images/resources/desain.png",
            title:"Desian Grafis",
            views:1500,
            teacher:2,
            videos:120
        }
    ]
    return (
        <div className='flex flex-col w-full font-poppins'>
            <div className='flex w-full items-center my-12 text-navblue justify-between'>
                <h1 className='font-semibold text-3xl'>Curriculum</h1>
                <ul className='flex gap-4 justify-around'>
                    <li className='border rounded-full border-gray-300 px-5 '>School</li>
                    <li className='border rounded-full border-gray-300 px-5 '>Higher Education</li>
                    <li className='border rounded-full border-gray-300 px-5 bg-navblue text-white ' >Professional</li>
                    <li className='border rounded-full border-gray-300 px-5 '>Interest Based</li>
                </ul>
                <button
                    className='bg-navblue text-white px-8 py-3 rounded-full'>
                    View All
                </button>
            </div>
            <div className='w-full flex gap-2 justify-between flex-wrap'>
                  {
                    curriArr.map((course)=>{
                        return  <div className='flex flex-col w-[340px] items-start gap-2'>
                        <p className='py-2 w-32 text-center font-bold relative top-20 bg-navblue text-white'>Best Course</p>
                         <img src={course.img} alt="" className=' h-64'/>  
                            <div className='flex ml-3 w-full justify-between items-center'>
                                <p className='text-xl font-extrabold text-gray-900'>{course.title}</p>
                                <p className="text-sm text-gray-600 mr-8">{course.views} views</p>
                            </div>
                            <div className='flex gap-5 ml-3 '>
                                <p>{course.videos} Videos</p>
                                <p>{course.teacher} Teacher</p>
                            </div>
                       </div>
                    })
                  } 

            </div>
        </div>
    )
}

export default Curriculum