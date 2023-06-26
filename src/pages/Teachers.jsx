import Form from '../components/teachers-component/Form'
import Features from '../components/teachers-component/Features'
import Cards from '../components/teachers-component/Cards'
import Campus from '../components/teachers-component/Campus'
import PopMentors from '../components/teachers-component/PopMentors'
import Activity from '../components/teachers-component/Activity'
import ProgramBuddies from '../components/teachers-component/ProgramBuddies'
import Footer from '../components/teachers-component/Footer'
import Curriculum from '../components/teachers-component/Curriculum'
import Advocacy from '../components/teachers-component/Advocacy'

function Teachers() {
  return (
    <div className='flex flex-col  bg-bodybg'>

      <div className='flex bg-white'>
        <div className='w-[60%] flex justify-center items-center'>
          <Form />
        </div>
        <Features />
      </div>

      <div className=' w-[85%] m-auto'>
        <Cards />
        <Campus />
        <PopMentors />
        <Activity />
        <Curriculum />
        <Advocacy />
        <ProgramBuddies />
      </div>
      <Footer />
    </div>
  )
}

export default Teachers