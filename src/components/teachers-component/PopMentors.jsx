import React from 'react'

function PopMentors() {
    const popArr = [
        {
            name: "Dipyaman Baral",
            modes: ["online", "offline"],
            location: "Delhi,India",
            studentsGuided: "36K",
            studentsSponsered: 89,
            subjects: ["Maths", "English", "Science"],
            img: "/images/resources/dipyaman baral.png",
            introduction: "Vridhee is the most user-friendly integrated School solutions out there.Their fee module has helped keep a tab on the collections and dues. I recommend Vridhee to anyone who wants to dignitize their school. ",
            vRank: 9,
            speaks: ["English", "Hindi", "Telugu"]
        },
        {
            name: "Dipyaman Baral",
            modes: ["online", "offline"],
            location: "Delhi,India",
            studentsGuided: "36K",
            studentsSponsered: 89,
            subjects: ["Maths", "English", "Science"],
            img: "/images/resources/dipyaman baral.png",
            introduction: "Vridhee is the most user-friendly integrated School solutions out there.Their fee module has helped keep a tab on the collections and dues. I recommend Vridhee to anyone who wants to dignitize their school. ",
            vRank: 9,
            speaks: ["English", "Hindi", "Telugu"]
        },
        {
            name: "Dipyaman Baral",
            modes: ["online", "offline"],
            location: "Delhi,India",
            studentsGuided: "36K",
            studentsSponsered: 89,
            subjects: ["Maths", "English", "Science"],
            img: "/images/resources/dipyaman baral.png",
            introduction: "Vridhee is the most user-friendly integrated School solutions out there.Their fee module has helped keep a tab on the collections and dues. I recommend Vridhee to anyone who wants to dignitize their school. ",
            vRank: 9,
            speaks: ["English", "Hindi", "Telugu"]
        },
        {
            name: "Dipyaman Baral",
            modes: ["online", "offline"],
            location: "Delhi,India",
            studentsGuided: "36K",
            studentsSponsered: 89,
            subjects: ["Maths", "English", "Science"],
            img: "/images/resources/dipyaman baral.png",
            introduction: "Vridhee is the most user-friendly integrated School solutions out there.Their fee module has helped keep a tab on the collections and dues. I recommend Vridhee to anyone who wants to dignitize their school. ",
            vRank: 9,
            speaks: ["English", "Hindi", "Telugu"]
        }
    ]
    return (
        <div className='flex flex-col mt-7 mb-7'>
            <p className=' text-navblue text-3xl font-semibold mb-6 '>Popular Mentors</p>
            <div className='flex justify-between  flex-wrap'>
                {popArr.map((mentor) => {
                    return <div className='flex border-2 mt-8 rounded-lg p-2 w-[49.5%] font-poppins'>
                        <div className='w-8/12  flex flex-col mb-1 mr-2'>
                            <div className='flex'>
                                <div className='flex flex-col'>
                                    <img src={mentor.img} alt="mentor pic " className='border border-navblue rounded-lg  w-48  h-30'></img>
                                    <p className='bg-navblue w-5/6 text-center self-center text-white rounded-full text-xs py-1 relative bottom-3'>vRank#<span className='text-xl'>9</span></p>

                                </div>
                                <div className='p-2 w-full flex flex-col gap-3 text-xs'>

                                    <div className='w-full flex justify-between items-center'>
                                    <p className=' font-semibold text-[16px]'>{mentor.name}</p>
                                    <p className='text-[10px] text-gray-600'>{mentor.modes.join(" & ")}</p>
                                    </div>

                                    <p className='w-full text-[10px] flex items-center gap-2'><img src="/images/resources/Indian-Flag.png" className='w-8'></img> <span>{mentor.location}</span> </p>
                                    <div className='flex justify-between '>
                                    <div>
                                        <p className=' font-extrabold'>{mentor.studentsGuided}</p>
                                        <p className='text-[11px]'>Students Guided</p>
                                    </div>
                                    <div>
                                        <p className='font-bold'>{mentor.studentsSponsered}</p>
                                        <p className='text-[11px]'>students Sponsered</p>
                                    </div>
                                   </div>

                                    <ul className='flex gap-1 w-full flex-wrap'>
                                        {mentor.subjects.map((subject) => {
                                            return <li className='border border-gray-400 rounded-full px-4 py-1 text-[10px]  text-center'>{subject}</li>
                                        })}
                                    </ul>


                                </div>
                            </div>
                            <div>
                                <p className='font-extrabold text-base mt-3 mb-1'>Introduction</p>
                                <p className=' text-[9px] font-semibold'>{mentor.introduction}</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between w-4/12 gap-4 pl-3 border-l-2'>
                           <div className=' w-32'> 
                          <p className=' text-sm text-gray-500'>Speaks</p>
                          <span className='font-semibold text-sm'>{mentor.speaks.join(' , ')}</span>
                          </div>

                          <div className='w-full gap-2 flex items-center'>
                            <img src="/images/vridheetaskpng/Watch logo 2x.png" ></img>
                            <button className='text-xs font-semibold '> Watch Intro</button>
                          </div>

                          <button className='w-full py-2 text-[14px] bg-navblue text-white rounded-lg'>Book Trail Lesson</button>
                          <button className='w-full py-2 text-[14px] bg-navblue text-white rounded-lg'>Message</button>

                          <div className='flex justify-around'>
                            <img src="/images/vridhee task svg/Facebook logo.svg" alt="" />
                            <img src="/images/vridhee task svg/twitter logo.svg" alt="" />
                            <img src="/images/vridhee task svg/Linkedin logo square.svg" alt="" />
                            <img src="/images/vridhee task svg/Youtube logo.svg" alt="" />
                          </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default PopMentors